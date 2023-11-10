/**
 * Represents a node in a linked list.
 * @template V - Type of the value held by the node.
 * @template N - Type of the reference to the next node.
 */
export abstract class LLNode<V, N> {
  abstract val: V;
  abstract next: N | null;
}

/**
 * Represents a base linked list.
 * @template V - Type of the value held by the list.
 * @template N - Type of the reference to the nodes in the list.
 */
export abstract class BaseLinkedList<V, N> {
  protected _head: N | null;
  protected _tail: N | null;
  protected _length: number;

  protected constructor() {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  /**
   * Get the reference to the head node of the list.
   * @returns {N | null} - Reference to the head node.
   */
  get head(): N | null {
    return this._head;
  }

  /**
   * Get the reference to the tail node of the list.
   * @returns {N | null} - Reference to the tail node.
   */
  get tail(): N | null {
    return this._tail;
  }

  /**
   * Get the size of the list.
   * @returns {number} - The size of the list.
   */
  get size(): number {
    return this._length;
  }

  /**
   * Check if the list is empty.
   * @returns {boolean} - Indicates whether the list is empty or not.
   */
  get isEmpty(): boolean {
    return this.size === 0;
  }

  /**
   * Add a new node with the provided value to the end of the list.
   * @param {V} val - Value to be added to the list.
   * @returns {BaseLinkedList<V, N>} - Updated list.
   */
  abstract push(val: V): BaseLinkedList<V, N>;

  /**
   * Remove and return the value from the end of the list.
   * @returns {V | undefined} - Removed value.
   */
  abstract pop(): V | undefined;

  /**
   * Remove and return the value from the beginning of the list.
   * @returns {V | undefined} - Removed value.
   */
  abstract shift(): V | undefined;

  /**
   * Add a new node with the provided value to the beginning of the list.
   * @param {V} val - Value to be added to the beginning of the list.
   * @returns {BaseLinkedList<V, N>} - Updated list.
   */
  abstract unshift(val: V): BaseLinkedList<V, N>;

  /**
   * Get the value at the specified index.
   * @param {number} index - Index of the value to retrieve.
   * @returns {V | undefined} - Retrieved value.
   */
  abstract at(index: number): V | undefined;

  /**
   * Get the node at the specified index.
   * @param {number} index - Index of the node to retrieve.
   * @returns {N | null} - Retrieved node.
   */
  abstract nodeAt(index: number): N | null;

  /**
   * Set the value at the specified index.
   * @param {number} index - Index where the value needs to be set.
   * @param {V} val - Value to be set.
   * @returns {boolean} - Indicates if the value was successfully set or not.
   */
  abstract setAt(index: number, val: V): boolean;

  /**
   * Insert a value at the specified index.
   * @param {number} index - Index where the value needs to be inserted.
   * @param {V} val - Value to be inserted.
   * @returns {boolean} - Indicates if the value was successfully inserted or not.
   */
  abstract insertAt(index: number, val: V): boolean;

  /**
   * Delete the value at the specified index.
   * @param {number} index - Index where the value needs to be deleted.
   * @returns {V | undefined} - Deleted value.
   */
  abstract deleteAt(index: number): V | undefined;

  /**
   * Reverse the order of the nodes in the list.
   * @returns {BaseLinkedList<V, N>} - Reversed list.
   */
  abstract reverse(): BaseLinkedList<V, N>;

  /**
   * Clears the linked list by resetting its properties.
   * @returns {void}
   * @timecomplexity O(1) - Constant time as it directly resets the properties.
   * @spacecomplexity O(1) - Constant space is used regardless of the list size.
   */
  clear(): void {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  /**
   * Checks if the provided index is a valid index within the list.
   * @param {number} index - Index to be checked.
   * @returns {boolean} - Indicates if the index is valid.
   */
  protected isValidIndex(index: number): boolean {
    return index >= 0 && index < this._length;
  }
}