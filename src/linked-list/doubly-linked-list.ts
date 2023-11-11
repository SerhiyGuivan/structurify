import { BaseLinkedList, LLNode } from './base-linked-list';

/**
 * Represents a node in a doubly linked list.
 * @template T - Type of the value held by the node.
 */
class DLLNode<T> extends LLNode<T, DLLNode<T>> {
  val: T
  prev: DLLNode<T> | null;
  next: DLLNode<T> | null;
  constructor(val: T) {
    super()
    this.val = val
    this.prev = null;
    this.next = null;
  }
}

/**
 * Represents a doubly linked list.
 * @template T - Type of the value held by the list.
 */
export default class DoublyLinkedList<T> extends BaseLinkedList<T, DLLNode<T>>{
  constructor() {
    super();
  }

  /**
   * Creates a doubly linked list from an array.
   * @param {T[]} data - Array to create the list from.
   * @returns {DoublyLinkedList<T>} - Doubly linked list created from the array.
   * @timecomplexity O(n) - Linear time as it iterates through each element in the input array to create the list.
   * @spacecomplexity O(n) - Additional space used is directly proportional to the number of elements in the input array and the resulting list.
   */
  static fromArray<T>(data: T[]): DoublyLinkedList<T> {
    const list= new DoublyLinkedList<T>();

    for (const item of data) {
      list.push(item);
    }

    return list;
  }

  /**
   * Adds a new node with the provided value to the end of the list.
   * @param {T} val - Value to be added to the list.
   * @returns {DoublyLinkedList<T>} - Updated list.
   * @timecomplexity O(1) - Constant time as it adds an element at the end of the list.
   * @spacecomplexity O(1) - Constant space is used regardless of the list size.
   */
  push(val: T): DoublyLinkedList<T> {
    const newNode = new DLLNode<T>(val);

    if (this.isEmpty) {
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

  /**
   * Removes and returns the value from the end of the list.
   * @returns {T | undefined} - Removed value or undefined if the list is empty.
   * @timecomplexity O(1) - Constant time as it removes an element from the end of the list.
   * @spacecomplexity O(1) - Constant space is used regardless of the list size.
   */
  pop(): T | undefined {
    if (this.isEmpty) {
      return undefined;
    }

    const removedNode= this._tail;

    if (this._head === this._tail) {
      this._tail = null;
      this._head = null;
    } else {
      this._tail = removedNode.prev;
      this._tail!.next = null;
    }

    this._length--;
    return removedNode.val;
  }

  /**
   * Removes and returns the value from the beginning of the list.
   * @returns {T | undefined} - Removed value or undefined if the list is empty.
   * @timecomplexity O(1) - Constant time as it removes an element from the beginning of the list.
   * @spacecomplexity O(1) - Constant space is used regardless of the list size.
   */
  shift(): T | undefined {
    if (this.isEmpty) {
      return undefined;
    }

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

  /**
   * Adds a new node with the provided value to the beginning of the list.
   * @param {T} val - Value to be added to the beginning of the list.
   * @returns {DoublyLinkedList<T>} - Updated list.
   * @timecomplexity O(1) - Constant time as it adds an element at the beginning of the list.
   * @spacecomplexity O(1) - Constant space is used regardless of the list size.
   */
  unshift(val: T): DoublyLinkedList<T> {
    const newNode = new DLLNode<T>(val);

    if (this.isEmpty) {
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

  /**
   * Returns the value at the specified index in the list.
   * @param {number} index - Index to retrieve the value from.
   * @returns {T | undefined} - Value at the index or undefined if the index is out of range.
   * @timecomplexity O(n) - Linear time in the worst case, as it traverses the list to reach the desired index.
   * @spacecomplexity O(1) - Constant space is used regardless of the list size.
   */
  at(index: number): T | undefined {
    const currentNode = this.nodeAt(index);

    if (currentNode !== null) {
      return currentNode.val;
    }

    return undefined;
  }

  /**
   * Retrieves the node at the specified index in the list.
   * @param {number} index - Index to retrieve the node from.
   * @returns {DLLNode<T> | null} - Node at the index or null if the index is out of range.
   * @timecomplexity O(n) - Linear time in the worst case, as it traverses the list to reach the desired index.
   * @spacecomplexity O(1) - Constant space is used regardless of the list size.
   */
  nodeAt(index: number): DLLNode<T> | null {
    if (index < 0 || index >= this._length) {
      return null;
    }

    let currentNode: DLLNode<T> | null;
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

  /**
   * Sets the value at the specified index in the list.
   * @param {number} index - Index where the value should be set.
   * @param {T} val - Value to set at the index.
   * @returns {boolean} - True if the value is successfully set, false if the index is out of range.
   * @timecomplexity O(n) - Linear time in the worst case, as it traverses the list to reach the desired index.
   * @spacecomplexity O(1) - Constant space is used regardless of the list size.
   */
  setAt(index: number, val: T): boolean {
    const currentNode = this.nodeAt(index)

    if (currentNode !== null) {
      currentNode.val = val;
      return true;
    }

    return false;
  }

  /**
   * Inserts a new node with the provided value at the specified index in the list.
   * @param {number} index - Index where the value should be inserted.
   * @param {T} val - Value to insert at the index.
   * @returns {boolean} - True if the value is successfully inserted, false if the index is out of range.
   * @timecomplexity O(n) - Linear time in the worst case, as it might traverse the list to reach the desired index.
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

    const newNode = new DLLNode(val);
    const beforeNode = this.nodeAt(index - 1);
    const afterNode = beforeNode!.next;

    beforeNode!.next = newNode;
    afterNode!.prev = newNode;

    newNode.prev = beforeNode;
    newNode.next = afterNode;

    this._length++;
    return true;
  }

  /**
   * Deletes the node at the specified index in the list.
   * @param {number} index - Index of the node to be deleted.
   * @returns {T | undefined} - Value of the deleted node or undefined if the index is out of range.
   * @timecomplexity O(n) - Linear time in the worst case, as it might traverse the list to reach the desired index.
   * @spacecomplexity O(1) - Constant space is used regardless of the list size.
   */
  deleteAt(index: number): T | undefined {
    if (index < 0 || index >= this._length ) {
      return undefined;
    }

    if (index === 0) {
      return this.shift();
    }

    if (index === this._length - 1) {
      return this.pop();
    }

    const removedNode = this.nodeAt(index);

    if (removedNode !== null) {
      const beforeNode = removedNode!.prev;
      const afterNode = removedNode!.next;

      beforeNode!.next = afterNode;
      afterNode!.prev = beforeNode;

      this._length--;
      return removedNode.val;
    }

    return undefined;
  }

  /**
   * Reverses the order of nodes in the list.
   * @returns {DoublyLinkedList<T>} - The reversed list.
   * @timecomplexity O(n) - Linear time, as it traverses the list to reverse the order of nodes.
   * @spacecomplexity O(1) - Constant space is used regardless of the list size.
   */
  reverse(): DoublyLinkedList<T> {
    let currentNode = this._head;
    [this._head, this._tail] = [this._tail, this._head];

    while (currentNode) {
      const next = currentNode.next;
      [currentNode.prev, currentNode.next] = [currentNode.next, currentNode.prev];
      currentNode = next;
    }

    return this;
  }

  /**
   * Converts the list into an array of its values.
   * @returns {T[]} - Array containing the values of the list.
   * @timecomplexity O(n) - Linear time, as it traverses the list to create the array of values.
   * @spacecomplexity O(n) - Additional space is directly proportional to the number of elements in the list.
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
