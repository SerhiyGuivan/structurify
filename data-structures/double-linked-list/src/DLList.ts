class DLNode<T> {
  val: T;
  next: DLNode<T> | null;
  prev: DLNode<T> | null;
  constructor(val: T) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

export default class DLList<T> {
  private _head: DLNode<T> | null;
  private _tail: DLNode<T> | null;
  private _length: number;
  constructor() {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  get head():DLNode<T> | null {
    return this._head;
  }

  get tail():DLNode<T> | null {
    return  this._tail;
  }

  get length():number {
    return this._length;
  }

  // Create a new instance of a DLList and populates it with the elements from the given array
  static fromArray<T>(data: T[]):DLList<T> {
    const list = new DLList<T>();

    for (const item of data) {
      list.push(item);
    }

    return list;
  }

  // Add a new node to the end of the linked list
  push(val: T): DLList<T> {
    const newNode = new DLNode<T>(val);

    if (this._length === 0 || this._tail === null) {
      this._head = newNode;
      this._tail = newNode;
    } else {
      this._tail.next = newNode;
      newNode.prev = this._tail;
      this._tail = newNode;
    }

    this._length++;
    return this;
  }

  // Remove and return the value of the last node in the linked list
  pop (): T | undefined {
    if (this._tail === null) return undefined;

    const removedNode = this._tail;

    if (this._head ===  this._tail) {
      this._tail = null;
      this._head = null;
    } else {
      this._tail = removedNode.prev;
      this._tail!.next = null;
    }

    this._length--;

    return removedNode.val;
  }

  // Remove and return the value of the first node from the linked list.
  shift (): T | undefined {
    if (this._head === null) return undefined;

    const removedNode = this._head;

    if (this._head === this._tail) {
      this._tail = null;
      this._head = null;
    } else {
      this._head = removedNode.next;
      this._head!.prev = null;
    }

    this._length--;

    return removedNode.val;
  }

  // Add a new node with the given value to the beginning of the linked list.
  unshift(val: T): DLList<T> {
    console.log('unshift');
    const newNode = new DLNode<T>(val);


    if (this._head === null) {
      this._head = newNode;
      this._tail = newNode;
    } else {
      newNode.next = this._head;
      this._head!.prev = newNode;
      this._head = newNode;

    }

    this._length++;

    return this;
  }

  // Return the value at a specified index in a linked list
  get(index: number): T | undefined {
    const currentNode = this.getNode(index);

    if (currentNode !== null) return currentNode.val;

    return undefined;
  }

  // Return the node at a specified index in a linked list
  getNode(index: number): DLNode<T> | null {
    if (index < 0 || index >= this._length) return null;

    let currentNode: DLNode<T> | null;
    let count: number;

    // Start from the closer end (head or tail) depending on the index
    if (index <= this._length / 2) {
      currentNode = this._head;
      count = index;
    } else {
      currentNode = this._tail;
      count = this._length - index - 1;
    }

    const direction = index <= this._length / 2 ? 'next' : 'prev';

    for (let i = 0; i < count; i++) {
      currentNode = currentNode![direction];
    }

    return currentNode;
  }

  // Update the value of the node at the specified index
  set (index: number, val: T): boolean {
    const currentNode = this.getNode(index)

    if (currentNode !== null) {
      currentNode.val = val;
      return true;
    }

    return false;

  }

  // Insert a new node with the given value at the specified index
  insert (index: number, val: T): boolean {
    if (index < 0 || index > this._length ) return false;

    if (index === 0) return !!this.unshift(val);

    if (index === this._length) return !!this.push(val);

    const newNode = new DLNode(val);
    const beforeNode = this.getNode(index - 1);
    const afterNode = beforeNode!.next;

    beforeNode!.next = newNode;
    afterNode!.prev = newNode;

    newNode.prev = beforeNode;
    newNode.next = afterNode;

    this._length++;

    return true;
  }

  // Remove and return the value at the specified index
  remove(index: number):T | undefined {
    if (index < 0 || index >= this._length ) return undefined;
    if (index === 0) return this.shift();
    if (index === this._length - 1) return this.pop();

    const removedNode = this.getNode(index);

    if (removedNode !== null) {
      const beforeNode = removedNode!.prev;
      const afterNode = removedNode!.next;

      beforeNode!.next = afterNode;
      afterNode!.prev =beforeNode;

      this._length--;

      return removedNode.val;
    }

    return undefined;

  }

  // Reverse the order of nodes in the list
  reverse():DLList<T> {
    let currentNode = this._head;
    let prevNode = this._head;

    for (let i = 0; i < this._length; i++) {
      prevNode = currentNode;
      currentNode = currentNode!.next;
      [prevNode!.prev, prevNode!.next] = [prevNode!.next, prevNode!.prev];
    }

    [this._head, this._tail] = [this._tail, this._head];

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

const list = new DLList().unshift(1).unshift(2);
console.log(list.toArray());
