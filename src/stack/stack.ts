import SinglyLinkedList from '../linked-list/singly-linked-list';

/**
 * Stack is a data structure that follows the Last-In-First-Out (LIFO) principle.
 * It uses a singly linked list internally for efficient push and pop operations.
 */
export default class Stack<T> {
  list: SinglyLinkedList<T>;

  constructor() {
    this.list = new SinglyLinkedList();
  }

  /**
   * Gets the number of elements in the stack.
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  get size(): number {
    return this.list.size;
  }

  /**
   * Checks if the stack is empty.
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  get isEmpty(): boolean {
    return this.size === 0;
  }

  /**
   * Pushes an element onto the stack.
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  push(val: T): void {
    this.list.unshift(val);
  }

  /**
   * Pops the top element from the stack and returns it.
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  pop(): T | undefined {
    return this.list.shift();
  }

  /**
   * Clears the stack.
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  clear(): void {
    this.list.clear();
  }

  /**
   * Peeks at the top element of the stack without removing it.
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  peek(): T | undefined {
    return this.list.head?.val;
  }

  /**
   * Converts the stack to an array.
   * Time Complexity: O(n) where n is the size of the stack
   * Space Complexity: O(n) where n is the size of the stack
   */
  toArray(): T[] {
    return this.list.toArray().reverse();
  }
}