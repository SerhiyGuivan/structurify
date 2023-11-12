import SinglyLinkedList from '../linked-list/singly-linked-list';

/**
 * Represents a stack data structure that follows the Last-In-First-Out (LIFO) principle.
 * It uses a singly linked list internally for efficient push and pop operations.
 * @template T - The type of elements in the stack.
 */
export default class Stack<T> {
  list: SinglyLinkedList<T>;

  /**
   * Creates a new instance of the Stack class.
   * The underlying data structure is a singly linked list.
   */
  constructor() {
    this.list = new SinglyLinkedList();
  }

  /**
   * Returns the number of elements in the stack.
   * @returns {number} - The size of the stack.
   * @timecomplexity O(1)
   * @spacecomplexity O(1)
   */
  get size(): number {
    return this.list.size;
  }

  /**
   * Checks if the stack is empty.
   * @returns {boolean} - True if the stack is empty, false otherwise.
   * @timecomplexity O(1)
   * @spacecomplexity O(1)
   */
  get isEmpty(): boolean {
    return this.size === 0;
  }

  /**
   * Adds a new element to the top of the stack.
   * @param {T} val - The value to be pushed onto the stack.
   * @timecomplexity O(1)
   * @spacecomplexity O(1)
   */
  push(val: T): void {
    this.list.unshift(val);
  }

  /**
   * Removes and returns the element from the top of the stack.
   * @returns {T | undefined} The value popped from the stack, or undefined if the stack is empty.
   * @timecomplexity O(1)
   * @spacecomplexity O(1)
   */
  pop(): T | undefined {
    return this.list.shift();
  }

  /**
   * Retrieves the value at the top of the stack without removing it.
   * @returns {T | undefined} The value at the top of the stack, or undefined if the stack is empty.
   * @timecomplexity O(1)
   * @spacecomplexity O(1)
   */
  peek(): T | undefined {
    return this.list.head?.val;
  }
  /**
   * Removes all elements from the stack.
   * @timecomplexity O(1)
   * @spacecomplexity O(1)
   */
  clear(): void {
    this.list.clear();
  }

  /**
   * Returns an array representation of the stack.
   * @returns {T[]} An array containing the elements of the stack in top-to-bottom order.
   * @timecomplexity O(n)
   * @spacecomplexity O(n)
   */
  toArray(): T[] {
    return this.list.toArray().reverse();
  }
}