class StackNode<T> {
  val: T
  next: StackNode<T> | null
  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

export default class Stack<T> {
  private _top: StackNode<T> | null
  private _size: number
  constructor() {
    this._top = null;
    this._size = 0;
  }

  get size(): number {
    return this._size;
  }

  isEmpty(): boolean {
    return this._size === 0;
  }

  // Pushes a new element onto the stack.
  push(val: T): number {
    const newNode = new StackNode(val);

    if (this._top === null) {
      this._top = newNode;
    } else {
      newNode.next = this._top
      this._top = newNode;
    }

    return ++this._size;
  }

  // Removes and returns the top element from the stack.
  // Throws an error if the stack is empty.
  pop(): T {
    if (this._top === null) {
      throw new Error("Stack is empty!");
    }

    const removedNode = this._top;

    this._top = removedNode.next;

    this._size--;

    return removedNode.val

  }

  // Removes all elements from the stack.
  clear(): void {
    this._top = null;
    this._size = 0;
  }

  // Returns the top element of the stack without removing it.
  // Returns undefined if the stack is empty.
  peek(): T | undefined {
    return this._top?.val;
  }

  // Converts the stack to an array with the top element as the last element in the array.
  toArray(): T[] {
    const arr: T[]= [];
    let currentNode = this._top;
    while (currentNode) {
      arr.push(currentNode.val)
      currentNode = currentNode.next;
    }
    return arr.reverse();
  }
}