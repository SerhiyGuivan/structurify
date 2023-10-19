class DLLNode<T> {
  val: T;
  next: DLLNode<T> | null;
  prev: DLLNode<T> | null;
  constructor(val: T) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

export default class DoubleLinkedList<T> {
  private head: DLLNode<T> | null;
  private tail: DLLNode<T> | null;
  private length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  get headNode():DLLNode<T> | null {
    return this.head;
  }

  get tailNode():DLLNode<T> | null {
    return this.tail;
  }

  get size():number {
    return this.length;
  }

  static fromArray<T>(data: T[]):DoubleLinkedList<T> {
    const list = new DoubleLinkedList<T>();

    for (const item of data) {
      list.push(item);
    }

    return list;
  }

  push(val: T): DoubleLinkedList<T> {
    const newNode = new DLLNode<T>(val);

    if (this.length === 0 || this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop (): T | undefined {
    if (this.tail === null) return undefined;

    const removedNode = this.tail;

    if (this.head === this.tail) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = removedNode.prev;
      this.tail!.next = null;
    }

    this.length--;

    return removedNode.val;
  }

  shift (): T | undefined {
    if (this.head === null) return undefined;

    const removedNode = this.head;

    if (this.head === this.tail) {
      this.tail = null;
      this.head = null;
    } else {
      this.head = removedNode.next;
      this.head!.prev = null;
    }

    this.length--;

    return removedNode.val;
  }

  unshift(val: T): DoubleLinkedList<T> {
    const newNode = new DLLNode<T>(val);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head!.prev = newNode;
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

  getNode(index: number): DLLNode<T> | null {
    if (index < 0 || index >= this.length) return null;

    let currentNode: DLLNode<T> | null;
    let count: number;

    // Start from the closer end (head or tail) depending on the index
    if (index <= this.length / 2) {
      currentNode = this.head;
      count = index;
    } else {
      currentNode = this.tail;
      count = this.length - index - 1;
    }

    const direction = index <= this.length / 2 ? 'next' : 'prev';

    for (let i = 0; i < count; i++) {
      currentNode = currentNode![direction];
    }

    return currentNode;
  }

  set (index: number, val: T): boolean {
    const currentNode = this.getNode(index)

    if (currentNode !== null) {
      currentNode.val = val;
      return true;
    }

    return false;

  }

  insert (index: number, val: T): boolean {
    if (index < 0 || index > this.length ) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    const newNode = new DLLNode(val);
    const beforeNode = this.getNode(index - 1);
    const afterNode = beforeNode!.next;

    beforeNode!.next = newNode;
    afterNode!.prev = newNode;

    newNode.prev = beforeNode;
    newNode.next = afterNode;

    this.length++;

    return true;
  }

  remove(index: number):T | undefined {
    if (index < 0 || index >= this.length ) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const removedNode = this.getNode(index);

    if (removedNode !== null) {
      const beforeNode = removedNode!.prev;
      const afterNode = removedNode!.next;

      beforeNode!.next = afterNode;
      afterNode!.prev =beforeNode;

      this.length--;

      return removedNode.val;
    }

    return undefined;

  }

  reverse():DoubleLinkedList<T> {
    let currentNode = this.head;
    let prevNode = this.head;

    for (let i = 0; i < this.length; i++) {
      prevNode = currentNode;
      currentNode = currentNode!.next;
      [prevNode!.prev, prevNode!.next] = [prevNode!.next, prevNode!.prev];
    }

    [this.head, this.tail] = [this.tail, this.head];

    return this;
  }

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

