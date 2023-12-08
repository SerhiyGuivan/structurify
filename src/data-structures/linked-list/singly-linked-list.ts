import { BaseLinkedList, LLNode } from './base-linked-list';

/**
 * Represents a node in a singly linked list.
 * @template T - Type of the value held by the node.
 */
export class SLLNode<T> extends LLNode<T, SLLNode<T>>{
  val: T
  next: SLLNode<T>
  constructor(val: T) {
    super()
    this.val = val;
    this.next = null
  }
}

/**
 * Represents a singly linked list.
 * @template T - Type of the value held by the list.
 */
export default class SinglyLinkedList<T> extends BaseLinkedList<T, SLLNode<T>> {
  constructor() {
    super()
  }

  /**
   * Create a singly linked list from an array.
   * @param {T[]} data - Array to create the list from.
   * @returns {SinglyLinkedList<T>} - Singly linked list created from the array.
   * @timecomplexity O(n) - Where 'n' is the length of the input array.
   * @spacecomplexity O(n) - Additional space used is linearly proportional to the length of the input array.
   */
  static fromArray<T>(data: T[]): SinglyLinkedList<T> {
    const list = new SinglyLinkedList<T>();

    for (const item of data) {
      list.push(item);
    }

    return list;
  }

  /**
   * Adds a new node with the provided value to the end of the list.
   * @param {T} val - Value to be added to the list.
   * @returns {SinglyLinkedList<T>} - Updated list.
   * @timecomplexity O(1) - Constant time complexity as it only adds to the end of the list.
   * @spacecomplexity O(1) - Constant space is used regardless of the list size.
   */
  push(val: T): SinglyLinkedList<T> {
    const newNode = new SLLNode(val);

    if (this.isEmpty) {
      this._head = newNode;
      this._tail = newNode;
    } else {
      this._tail!.next = newNode;
      this._tail = newNode;
    }

    this._length++;

    return this;
  }

  /**
   * Removes and returns the value from the end of the list.
   * @returns {T | undefined} - Removed value.
   * @timecomplexity O(n) - Linear time as it may traverse the list to find the last element.
   * @spacecomplexity O(1) - Constant space is used regardless of the list size.
   */
  pop(): T | undefined {
    if (this._head === null) {
      return undefined;
    }

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

  /**
   * Removes and returns the value from the beginning of the list.
   * @returns {T | undefined} - Removed value.
   * @timecomplexity O(1) - Constant time complexity as it only removes from the beginning of the list.
   * @spacecomplexity O(1) - Constant space is used regardless of the list size.
   */
  shift(): T | undefined {
    if (this._head === null) {
      return undefined;
    }

    const removedNode = this._head;

    if (this._head === this._tail) {
      this._tail = null;
    }

    this._head = removedNode.next;
    this._length--;

    return removedNode.val;
  }

  /**
   * Adds a new node with the provided value to the beginning of the list.
   * @param {T} val - Value to be added to the beginning of the list.
   * @returns {SinglyLinkedList<T>} - Updated list.
   * @timecomplexity O(1) - Constant time complexity as it only adds to the beginning of the list.
   * @spacecomplexity O(1) - Constant space is used regardless of the list size.
   */
  unshift(val: T): SinglyLinkedList<T> {
    const newNode = new SLLNode(val);

    if (this.isEmpty) {
      this._head = newNode;
      this._tail = newNode;
    } else {
      newNode.next = this._head;
      this._head = newNode;
    }

    this._length++;

    return this;
  }

  /**
   * Get the value at the specified index.
   * @param {number} index - Index of the value to retrieve.
   * @returns {T | undefined} - Retrieved value.
   * @timecomplexity O(n) - Linear time as it may traverse the list to find the node at the specified index.
   * @spacecomplexity O(1) - Constant space is used regardless of the list size.
   */
  at(index: number): T | undefined {
    const currentNode= this.nodeAt(index);

    if (currentNode !== null) {
      return currentNode.val;
    }

    return undefined;
  }

  /**
   * Get the node at the specified index.
   * @param {number} index - Index of the node to retrieve.
   * @returns {SLLNode<T> | null} - Retrieved node or null if index is invalid.
   * @timecomplexity O(n) - Linear time as it may traverse the list to find the node at the specified index.
   * @spacecomplexity O(1) - Constant space is used regardless of the list size.
   */
  nodeAt(index: number): SLLNode<T> | null {
    if (!this.isValidIndex(index)) {
      return null;
    }

    let currentNode = this._head;

    for (let i: number = 0; i < index; i++) {
      currentNode = currentNode!.next;
    }

    return currentNode;
  }

  /**
   * Set the value at the specified index.
   * @param {number} index - Index where the value needs to be set.
   * @param {T} val - Value to be set.
   * @returns {boolean} - Indicates if the value was successfully set or not.
   * @timecomplexity O(n) - Linear time as it may traverse the list to find the node at the specified index.
   * @spacecomplexity O(1) - Constant space is used regardless of the list size.
   */
  setAt(index: number, val: T): boolean {
    const currentNode = this.nodeAt(index);

    if (currentNode !== null) {
      currentNode.val = val;
      return true;
    }

    return false;
  }

  /**
   * Insert a value at the specified index.
   * @param {number} index - Index where the value needs to be inserted.
   * @param {T} val - Value to be inserted.
   * @returns {boolean} - Indicates if the value was successfully inserted or not.
   * @timecomplexity O(n) - Linear time as it may traverse the list to find the node before the specified index.
   * @spacecomplexity O(1) - Constant space is used regardless of the list size.
   */
  insertAt(index: number, val: T): boolean {
    if (index < 0 || index > this._length) {
      return false;
    }

    if (index === 0) {
      return !!this.unshift(val);
    }

    if (index === this._length) {
      return !!this.push(val);
    }

    const newNode = new SLLNode(val);

    const beforeNode = this.nodeAt(index - 1);
    const afterNode = beforeNode!.next;

    beforeNode!.next = newNode;
    newNode.next = afterNode;

    this._length++;

    return true;
  }

  /**
   * Delete the value at the specified index.
   * @param {number} index - Index where the value needs to be deleted.
   * @returns {T | undefined} - Deleted value or undefined if index is invalid.
   * @timecomplexity O(n) - Linear time as it may traverse the list to find the node before the specified index.
   * @spacecomplexity O(1) - Constant space is used regardless of the list size.
   */
  deleteAt(index: number): T | undefined {
    if (!this.isValidIndex(index)) {
      return undefined;
    }

    if (index === 0) {
      return this.shift();
    }

    if (index === this._length - 1) {
      return this.pop();
    }

    const beforeNode = this.nodeAt(index - 1);

    if (beforeNode !== null) {
      const removedNode = beforeNode!.next;
      beforeNode.next = removedNode!.next;
      this._length--;

      return removedNode!.val;
    }

    return undefined;
  }
  /**
   * Reverse the order of the nodes in the list.
   * @returns {SinglyLinkedList<T>} - The reversed list.
   * @timecomplexity O(n) - Linear time as it traverses through the entire list to reverse it.
   * @spacecomplexity O(1) - Constant space is used regardless of the list size.
   */
  reverse(): SinglyLinkedList<T> {
    [this._head, this._tail] = [this._tail, this._head];

    let currentNode = this._tail;

    let nextNode: SLLNode<T> | null;
    let prevNode: SLLNode<T> | null = null;

    for (let i = 0; i < this._length; i++) {
      nextNode = currentNode!.next;
      currentNode!.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }

    return this;
  }

  /**
   * Rotate the list by the specified number of positions.
   * @param {number} n - Number of positions to rotate the list.
   * @returns {SinglyLinkedList<T>} - The rotated list.
   * @timecomplexity O(n) - Linear time as it may traverse through the list to perform rotations.
   * @spacecomplexity O(1) - Constant space is used regardless of the list size.
   */
  rotateByN(n: number): SinglyLinkedList<T> {
    if (n % this._length === 0) return this;

    const rotation = n > 0 ? n % this._length : this._length + (n % this._length);

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

  /**
   * Convert the list to an array.
   * @returns {T[]} - An array containing the elements of the list in order.
   * @timecomplexity O(n) - Linear time as it traverses through the entire list to build the array.
   * @spacecomplexity O(n) - Additional space used is linearly proportional to the list's length.
   */
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
