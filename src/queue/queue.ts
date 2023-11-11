import SinglyLinkedList from '../linked-list/singly-linked-list';

/**
 * Queue class represents a basic queue data structure that follows the First-In-First-Out (FIFO) principle.
 * It uses a singly linked list internally for efficient enqueue and dequeue operations.
 * @template T - The type of elements stored in the queue.
 */
export default class Queue<T> {
  list: SinglyLinkedList<T>;

  /**
   * Creates an instance of the Queue class.
   * The underlying data structure is a singly linked list.
   */
  constructor() {
    this.list = new SinglyLinkedList();
  }

  /**
   * Retrieves the value at the front of the queue.
   * @returns {T | undefined} The value at the front of the queue, or undefined if the queue is empty.
   * @timecomplexity O(1) - Constant time complexity as accessing the head of a linked list is a constant time operation.
   * @spacecomplexity O(1) - Constant space complexity as no additional data structures are used.
   */
  get front(): T | undefined {
    return this.list.head?.val;
  }

  /**
   * Retrieves the value at the rear of the queue.
   * @returns {T | undefined} The value at the rear of the queue, or undefined if the queue is empty.
   * @timecomplexity O(1) - Constant time complexity as accessing the tail of a linked list is a constant time operation.
   * @spacecomplexity O(1) - Constant space complexity as no additional data structures are used.
   */
  get rear(): T | undefined {
    return this.list.tail?.val;
  }

  /**
   * Returns the number of elements in the queue.
   * @returns {number} - The size of the queue.
   * @timecomplexity O(1)
   * @spacecomplexity O(1)
   */
  get size(): number {
    return this.list.size;
  }

  /**
   * Checks if the queue is empty.
   * @returns {boolean} - True if the queue is empty, false otherwise.
   * @timecomplexity O(1)
   * @spacecomplexity O(1)
   */
  get isEmpty(): boolean {
    return this.list.isEmpty;
  }

  /**
   * Adds an element to the end of the queue.
   * @param {T} val - The value to enqueue.
   * @returns {number} - The updated size of the queue.
   * @timecomplexity O(1)
   * @spacecomplexity O(1)
   */
  enqueue(val: T): number {
    this.list.push(val);
    return this.size;
  }

  /**
   * Removes and returns the element from the front of the queue.
   * @returns {T | undefined} - The value dequeued from the front of the queue.
   * @timecomplexity O(1)
   * @spacecomplexity O(1)
   */
  dequeue(): T | undefined {
    return this.list.shift();
  }

  /**
   * Retrieves the value at the front of the queue without removing it.
   * @returns {T | undefined} - The value at the front of the queue.
   * @timecomplexity O(1)
   * @spacecomplexity O(1)
   */
  peek(): T | undefined {
    return this.list.head?.val;
  }

  /**
   * Retrieves the value at the rear of the queue without removing it.
   * @returns {T | undefined} - The value at the rear of the queue.
   * @timecomplexity O(1)
   * @spacecomplexity O(1)
   */
  peekRear(): T | undefined {
    return this.list.tail?.val;
  }

  /**
   * Clears all elements from the queue.
   * @timecomplexity O(1)
   * @spacecomplexity O(1)
   */
  clear(): void {
    this.list.clear();
  }

  /**
   * Converts the queue to an array.
   * @returns {T[]} - An array containing all elements in the queue.
   * @timecomplexity O(n)
   * @spacecomplexity O(n)
   */
  toArray(): T[] {
    return this.list.toArray();
  }
}
