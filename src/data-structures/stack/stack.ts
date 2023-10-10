class StackNode<T> {
  val: T;
  next: StackNode<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

export default class Stack<T> {
  private topNode: StackNode<T> | null;
  private size: number;

  constructor() {
    this.topNode = null;
    this.size = 0;
  }

  get getSize(): number {
    return this.size;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  // Pushes a new element onto the stack.
  push(val: T): void {
    const newNode = new StackNode(val);

    if (this.topNode === null) {
      this.topNode = newNode;
    } else {
      newNode.next = this.topNode;
      this.topNode = newNode;
    }

    this.size++;
  }

  // Removes and returns the top element from the stack.
  // Throws an error if the stack is empty.
  pop(): T {
    if (this.topNode === null) {
      throw new Error("Stack underflow: Cannot pop from an empty stack.");
    }

    const removedNode = this.topNode;

    this.topNode = removedNode.next;

    this.size--;

    return removedNode.val;
  }

  // Removes all elements from the stack.
  clear(): void {
    this.topNode = null;
    this.size = 0;
  }

  // Returns the top element of the stack without removing it.
  // Returns undefined if the stack is empty.
  peek(): T | undefined {
    return this.topNode?.val;
  }

  // Converts the stack to an array with the top element as the first element in the array.
  toArray(): T[] {
    const arr: T[] = [];
    let currentNode = this.topNode;
    while (currentNode) {
      arr.push(currentNode.val);
      currentNode = currentNode.next;
    }
    return arr.reverse();
  }
}
