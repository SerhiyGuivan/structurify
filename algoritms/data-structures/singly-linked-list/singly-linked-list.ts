class Node<T> {
  val: T;
  next: Node<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

export default class SinglyLinkedList<T> {
  head: Node<T> | null;
  tail: Node<T> | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val: T): SinglyLinkedList<T> {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop(): Node<T> | undefined {
    if (!this.head) return undefined;
    let current: Node<T> | null = this.head;
    let newTail: Node<T> | null = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    if (this.tail) {
      this.tail.next = null;
    }

    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift(): Node<T> | undefined {
    if (!this.head) return undefined;
    const currentHead: Node<T> | null = this.head;
    this.head = currentHead.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return currentHead;
  }

  unshift(val: T): SinglyLinkedList<T> {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index: number): Node<T> | null {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current: Node<T> | null = this.head;

    while (counter !== index) {
      if (current) {
        current = current.next;
      } else {
        // Handle unexpected null value in the middle of the list.
        return null;
      }
      counter++;
    }

    return current;
  }

  set(index: number, val: T): boolean {
    const foundNode: Node<T> | null = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index: number, val: T): boolean {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    const newNode = new Node(val);
    const prev = this.get(index - 1);
    const temp = prev!.next;
    prev!.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index: number): Node<T> | undefined {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const previousNode: Node<T> | null = this.get(index - 1);
    if (!previousNode || !previousNode.next) return undefined;

    const removed: Node<T> | null = previousNode.next;
    previousNode.next = removed.next;
    this.length--;

    return removed;
  }

  reverse(): SinglyLinkedList<T> {
    let node: Node<T> | null = this.head;
    this.head = this.tail;
    this.tail = node;
    let next: Node<T> | null;
    let prev: Node<T> | null = null;

    for (let i = 0; i < this.length; i++) {
      if (node) {
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
      } else {
        // Handle unexpected null value in the middle of the list.
        break;
      }
    }

    return this;
  }
}
