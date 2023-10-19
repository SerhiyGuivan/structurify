/**
 * Define a generic class SLLNode<T> to represent a node in a singly linked list.
 * It contains a value 'val' of generic type T and a reference to the next node or null.
 */
class SLLNode<T> {
  val: T;
  next: SLLNode<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Define a generic class SinglyLinkedList<T> to represent a singly linked list.
 * It contains a reference to the head, tail, and the length of the list.
 */
export default class SinglyLinkedList<T> {
  private head: SLLNode<T> | null;
  private tail: SLLNode<T> | null;
  private length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Get the head node of the linked list.
   */
  get getHeadNode(): SLLNode<T> | null {
    return this.head;
  }

  /**
   * Get the tail node of the linked list.
   */
  get getTailNode(): SLLNode<T> | null {
    return this.tail;
  }

  /**
   * Get the length of the linked list.
   */
  get size(): number {
    return this.length;
  }

  /**
   * Static method to create a new singly linked list from an array of data.
   * Time Complexity: O(n) where n is the length of the input 'data'.
   * Space Complexity: O(n) to store the newly created list.
   */
  static fromArray<T>(data: T[]): SinglyLinkedList<T> {
    const list = new SinglyLinkedList<T>();

    for (const item of data) {
      list.push(item);
    }

    return list;
  }

  /**
   * Add a new node with the given value to the end of the linked list.
   * Time Complexity: O(1) as it appends to the end in constant time.
   * Space Complexity: O(1) as it creates a single new node.
   */
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

  /**
   * Remove and return the last node from the linked list.
   * Time Complexity: O(n) in the worst case as it traverses the list to find the last node.
   * Space Complexity: O(1) as it only removes a single node.
   */
  pop(): T | undefined {
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

  /**
   * Remove and return the first node from the linked list.
   * Time Complexity: O(1) as it removes the first node in constant time.
   * Space Complexity: O(1) as it only removes a single node.
   */
  shift(): T | undefined {
    if (this.head === null) return undefined;

    const removedNode = this.head;

    if (this.head === this.tail) {
      this.tail = null;
    }

    this.head = removedNode.next;

    this.length--;

    return removedNode.val;
  }

  /**
   * Add a new node with the given value to the beginning of the linked list.
   * Time Complexity: O(1) as it prepends to the beginning in constant time.
   * Space Complexity: O(1) as it creates a single new node.
   */
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

  /**
   * Get the value at a specific index in the linked list.
   * Time Complexity: O(n) in the worst case as it may have to traverse the list.
   * Space Complexity: O(1) as it only returns a single value.
   */
  get(index: number): T | undefined {
    const currentNode = this.getNode(index);

    if (currentNode !== null) return currentNode.val;

    return undefined;
  }

  /**
   * Get the node at a specific index in the linked list.
   * Time Complexity: O(n) in the worst case as it may have to traverse the list.
   * Space Complexity: O(1) as it only returns a single node.
   */
  getNode(index: number): SLLNode<T> | null {
    if (index < 0 || index >= this.length) return null;

    let currentNode: SLLNode<T> | null = this.head;

    for (let i: number = 0; i < index; i++) {
      currentNode = currentNode!.next;
    }

    return currentNode;
  }

  /**
   * Set the value at a specific index in the linked list.
   * Time Complexity: O(n) in the worst case as it may have to traverse the list.
   * Space Complexity: O(1) as it only updates a single value.
   */
  set(index: number, val: T): boolean {
    const currentNode: SLLNode<T> | null = this.getNode(index);

    if (currentNode !== null) {
      currentNode.val = val;
      return true;
    }

    return false;
  }

  /**
   * Insert a new node with the given value at a specific index in the linked list.
   * Time Complexity: O(n) in the worst case as it may have to traverse the list.
   * Space Complexity: O(1) as it only inserts a single new node.
   */
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

  /**
   * Remove and return a node at a specific index in the linked list.
   * Time Complexity: O(n) in the worst case as it may have to traverse the list.
   * Space Complexity: O(1) as it only removes a single node.
   */
  remove(index: number): T | undefined {
    if (index < 0 || index >= this.length) return undefined;

    if (index === 0) return this.shift();

    if (index === this.length - 1) return this.pop();

    const beforeNode = this.getNode(index - 1);

    if (beforeNode !== null) {
      const removedNode = beforeNode!.next;

      beforeNode.next = removedNode!.next;

      this.length--;

      return removedNode!.val;
    }

    return undefined;
  }

  /**
   * Clear the entire linked list by setting head, tail, and length to null/0.
   * Time Complexity: O(1) as it clears the list in constant time.
   * Space Complexity: O(1) as it only updates references.
   */
  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Reverse the order of nodes in the linked list.
   * Time Complexity: O(n) where n is the length of the list.
   * Space Complexity: O(1) as it only involves swapping node references.
   */
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

  /**
   * Rotate the linked list by a specified number of positions.
   * Time Complexity: O(n) where n is the length of the list.
   * Space Complexity: O(1) as it only involves updating node references.
   */
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

  /**
   * Convert the linked list into an array and return it.
   * Time Complexity: O(n) where n is the length of the list.
   * Space Complexity: O(n) as it creates a new array to store the list values.
   */
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
