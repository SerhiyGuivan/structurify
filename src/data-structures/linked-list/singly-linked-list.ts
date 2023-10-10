class SLLNode<T> {
  val: T;
  next: SLLNode<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

export default class SinglyLinkedList<T> {
  private head: SLLNode<T> | null;
  private tail: SLLNode<T> | null;
  private length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  get getHead():SLLNode<T> | null {
    return this.head;
  }

  get getTail():SLLNode<T> | null {
    return  this.tail;
  }

  get getLength():number {
    return this.length;
  }

  // Create a new instance of a SLList and populates it with the elements from the given array
  static fromArray<T>(data: T[]):SinglyLinkedList<T> {
    const list = new SinglyLinkedList<T>();

    for (const item of data) {
      list.push(item);
    }

    return list;
  }

  // Add a new node to the end of the linked list
  push(val: T): SinglyLinkedList<T> {
    const newNode = new SLLNode(val);

    if (this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  // Remove and return the value of the last element in a linked list
  pop():T | undefined {
    if (this.head === null) return undefined;

    if (this.head === this.tail) {
      const val = this.tail.val;

      this.head = null;
      this.tail = null;
      this.length--;

      return val;
    }

    let currentNode = this.head;

    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next!;
    }

    currentNode.next = null;

    const val = this.tail!.val;

    this.tail = currentNode;
    this.length--;

    return val;
  }

  // Remove and return the value of the first node from the linked list.
  shift(): T | undefined {
    if (this.head === null) return undefined;

    const removedNode= this.head;

    if (this.head === this.tail) {
      this.tail = null;
    }

    this.head = removedNode.next;

    this.length--;

    return removedNode.val;
  }

  // Add a new node with the given value to the beginning of the linked list.
  unshift(val: T): SinglyLinkedList<T> {
    const newNode = new SLLNode(val);

    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index: number): T | undefined {
    const currentNode = this.getNode(index);

    if (currentNode !== null) return currentNode.val;

    return undefined;
  }

  // Return the node at a specified index in a linked list
  getNode(index: number): SLLNode<T> | null {
    if (index < 0 || index >= this.length) return null;

    let currentNode: SLLNode<T> | null = this.head;

    for (let i: number = 0; i < index; i++) {
      currentNode = currentNode!.next;
    }

    return currentNode;
  }

  // Update the value of the node at the specified index
  set(index: number, val: T): boolean {
    const currentNode: SLLNode<T> | null = this.getNode(index);
    if (currentNode !== null) {
      currentNode.val = val;
      return true;
    }
    return false;
  }

  // Insert a new node with the given value at the specified index
  insert(index: number, val: T): boolean {
    if (index < 0 || index > this.length) return false;

    if (index === this.length) return !!this.push(val);

    if (index === 0) return !!this.unshift(val);

    const newNode = new SLLNode(val);

    const beforeNode = this.getNode(index - 1);
    const afterNode = beforeNode!.next;

    beforeNode!.next = newNode;
    newNode.next = afterNode;

    this.length++;

    return true;
  }

  // Remove and return the value at the specified index
  remove(index: number): T | undefined {
    if (index < 0 || index >= this.length) return undefined;

    if (index === 0) return this.shift();

    if (index === this.length - 1) return this.pop();

    const beforeNode = this.getNode(index - 1);

    if (beforeNode !== null ) {
      const removedNode = beforeNode!.next;

      beforeNode.next = removedNode!.next;

      this.length--;

      return removedNode!.val;
    }

    return undefined;
  }

  // Reverse the order of nodes in the list
  reverse(): SinglyLinkedList<T> {
    [this.head, this.tail] = [this.tail, this.head];

    let currentNode = this.tail;

    let nextNode: SLLNode<T> | null;
    let prevNode: SLLNode<T> | null = null;

    for (let i = 0; i < this.length; i++) {
      nextNode = currentNode!.next;
      currentNode!.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }

    return this;
  }

  // Rotate the order of nodes in the list
  rotate(num: number): SinglyLinkedList<T> {
    if (num % this.length === 0) return this;

    const rotation = num > 0 ? num % this.length : this.length + (num % this.length);

    let currentNode = this.head;
    let prevNode = this.head;

    this.tail!.next = this.head;

    for (let i = 0; i < rotation; i++) {
      prevNode = currentNode;
      currentNode = currentNode!.next;
    }

    this.head = currentNode;
    this.tail = prevNode;

    this.tail!.next = null;

    return this;
  }

  // Convert a linked list into an array
  toArray(): T[] {
    const arr: T[] = [];
    let currentNode = this.head;

    while (currentNode) {
      arr.push(currentNode.val);
      currentNode = currentNode.next;
    }

    return arr;
  }
}

