class SLNode<T> {
  val: T;
  next: SLNode<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

export default class SLList<T> {
  private _head: SLNode<T> | null;
  private _tail: SLNode<T> | null;
  private _length: number;

  constructor() {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  get head():SLNode<T> | null {
    return this._head;
  }

  get tail():SLNode<T> | null {
    return  this._tail;
  }

  get length():number {
    return this._length;
  }

  // Create a new instance of a SLList and populates it with the elements from the given array
  static fromArray<T>(data: T[]):SLList<T> {
    const list = new SLList<T>();

    for (const item of data) {
      list.push(item);
    }

    return list;
  }

  // Add a new node to the end of the linked list
  push(val: T): SLList<T> {
    const newNode = new SLNode(val);

    if (this._tail === null) {
      this._head = newNode;
      this._tail = newNode;
    } else {
      this._tail!.next = newNode;
      this._tail = newNode;
    }

    this._length++;
    return this;
  }

  // Remove and return the value of the last element in a linked list
  pop():T | undefined {
    if (this._head === null) return undefined;

    if (this._head === this._tail) {
      const val = this._tail.val;

      this._head = null;
      this._tail = null;
      this._length--;

      return val;
    }

    let currentNode = this._head;

    while (currentNode.next !== this._tail) {
      currentNode = currentNode.next!;
    }

    currentNode.next = null;

    const val = this._tail!.val;

    this._tail = currentNode;
    this._length--;

    return val;
  }

  // Remove and return the value of the first node from the linked list.
  shift(): T | undefined {
    if (this._head === null) return undefined;

    const removedNode= this._head;

    if (this._head === this._tail) {
      this._tail = null;
    }

    this._head = removedNode.next;

    this._length--;

    return removedNode.val;
  }

  // Add a new node with the given value to the beginning of the linked list.
  unshift(val: T): SLList<T> {
    const newNode = new SLNode(val);

    if (this._head === null) {
      this._head = newNode;
      this._tail = this._head;
    } else {
      newNode.next = this._head;
      this._head = newNode;
    }

    this._length++;
    return this;
  }

  get(index: number): T | undefined {
    const currentNode = this.getNode(index);

    if (currentNode !== null) return currentNode.val;

    return undefined;
  }

  // Return the node at a specified index in a linked list
  getNode(index: number): SLNode<T> | null {
    if (index < 0 || index >= this._length) return null;

    let currentNode: SLNode<T> | null = this._head;

    for (let i: number = 0; i < index; i++) {
      currentNode = currentNode!.next;
    }

    return currentNode;
  }

  // Update the value of the node at the specified index
  set(index: number, val: T): boolean {
    const currentNode: SLNode<T> | null = this.getNode(index);
    if (currentNode !== null) {
      currentNode.val = val;
      return true;
    }
    return false;
  }

  // Insert a new node with the given value at the specified index
  insert(index: number, val: T): boolean {
    if (index < 0 || index > this._length) return false;

    if (index === this._length) return !!this.push(val);

    if (index === 0) return !!this.unshift(val);

    const newNode = new SLNode(val);

    const beforeNode = this.getNode(index - 1);
    const afterNode = beforeNode!.next;

    beforeNode!.next = newNode;
    newNode.next = afterNode;

    this._length++;

    return true;
  }

  // Remove and return the value at the specified index
  remove(index: number): T | undefined {
    if (index < 0 || index >= this._length) return undefined;

    if (index === 0) return this.shift();

    if (index === this._length - 1) return this.pop();

    const beforeNode = this.getNode(index - 1);

    if (beforeNode !== null ) {
      const removedNode = beforeNode!.next;

      beforeNode.next = removedNode!.next;

      this._length--;

      return removedNode!.val;
    }

    return undefined;
  }

  // Reverse the order of nodes in the list
  reverse(): SLList<T> {
    [this._head, this._tail] = [this._tail, this._head];

    let currentNode = this._tail;

    let nextNode: SLNode<T> | null;
    let prevNode: SLNode<T> | null = null;

    for (let i = 0; i < this._length; i++) {
      nextNode = currentNode!.next;
      currentNode!.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }

    return this;
  }

  // Rotate the order of nodes in the list
  rotate(num: number): SLList<T> {
    if (num % this._length === 0) return this;

    const rotation = num > 0 ? num % this._length : this._length + (num % this._length);

    let currentNode = this._head;
    let prevNode = this._head;

    this._tail!.next = this._head;

    for (let i = 0; i < rotation; i++) {
      prevNode = currentNode;
      currentNode = currentNode!.next;
    }

    this._head = currentNode;
    this._tail = prevNode;

    this._tail!.next = null;

    return this;
  }

  // Convert a linked list into an array
  toArray(): T[] {
    const arr: T[] = [];
    let currentNode = this._head;

    while (currentNode) {
      arr.push(currentNode.val);
      currentNode = currentNode.next;
    }

    return arr;
  }
}

