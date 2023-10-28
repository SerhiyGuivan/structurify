import SinglyLinkedList from '../linked-list/singly-linked-list';

/**
 * Queue is a data structure that follows the First-In-First-Out (FIFO) principle.
 * It uses a singly linked list internally for efficient enqueue and dequeue operations.
 */
export default class Queue<T> {
  list: SinglyLinkedList<T>;

  constructor() {
    // Initialize an empty queue using a singly linked list.
    this.list = new SinglyLinkedList();
  }

  /**
   * Gets the number of elements in the queue.
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  get size(): number {
    return this.list.size;
  }

  /**
   * Checks if the queue is empty.
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  get isEmpty(): boolean {
    return this.size === 0;
  }

  /**
   * Adds an element to the rear of the queue.
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  enqueue(val: T): number {
    this.list.push(val);
    return this.size;
  }

  /**
   * Removes and returns the front element of the queue.
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  dequeue(): T | undefined {
    return this.list.shift();
  }

  /**
   * Returns the value of the front element without removing it.
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  peek(): T | undefined {
    if (this.list.headNode === null) return undefined;
    return this.list.headNode.val;
  }

  /**
   * Removes all elements from the queue.
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  clear(): void {
    this.list.clear();
  }

  /**
   * Converts the queue to an array, maintaining the order of elements.
   * Time Complexity: O(n), where n is the number of elements in the queue.
   * Space Complexity: O(n), as it creates a new array to hold the elements.
   */
  toArray(): T[] {
    return this.list.toArray();
  }
}
