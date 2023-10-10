class QueueNode<T> {
  val: T;
  next: QueueNode<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

export default class Queue<T> {
  private first: QueueNode<T> | null;
  private last: QueueNode<T> | null;
  private size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // Getter method to retrieve the size of the queue
  get getSize(): number {
    return this.size;
  }

  // Getter method to check if the queue is empty
  get isEmpty(): boolean {
    return this.size === 0;
  }

  // Adds an element to the rear of the queue
  enqueue(val: T): number {
    const newNode = new QueueNode(val);

    if (this.last === null) {
      // If the queue is empty, set both the front and rear to the new node
      this.first = newNode;
      this.last = newNode;
    } else {
      // Otherwise, add the new node to the rear and update the rear pointer
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size++;

    return this.size; // Return the new size of the queue
  }

  // Removes and returns the front element of the queue
  dequeue(): T | undefined {
    if (this.first === null) {
      throw new Error("Queue underflow: Cannot dequeue from an empty queue.");
    }

    const removedNode = this.first;

    if (this.first === this.last) {
      // If there was only one element in the queue, update the rear pointer
      this.last = null;
    }

    // Update the front pointer and decrease the size
    this.first = removedNode.next;
    this.size--;

    return removedNode.val; // Return the value of the removed element
  }

  // Returns the value of the front element without removing it
  peek(): T | undefined {
    if (this.first === null) return undefined;
    return this.first.val;
  }

  // Removes all elements from the queue
  clear(): void {
    this.first = null;   // Reset the front pointer
    this.last = null;    // Reset the rear pointer
    this.size = 0;       // Reset the size to 0
  }

  // Converts the queue to an array, maintaining the order of elements
  toArray(): T[] {
    const result: T[] = [];
    let current = this.first;
    while (current !== null) {
      result.push(current.val); // Add each element to the result array
      current = current.next;
    }
    return result;
  }
}