import {CompareHelper} from "../helper/compare";
import {BTNode} from '../node/node';
import {TraversalHelper} from '../helper/traversal';
import {CalcHelper} from '../helper/calc';

import {TraversalOrder} from '@/enums/binary-tree/index';
import {Key, MatchFn, TraversalFn} from '@/types/binary-tree/index';

/**
 * Represents an abstract base class for a binary tree structure with generic data.
 * @template K - The type of the keys (number or string) stored in the binary tree nodes.
 * @template V - The type of the value stored in the binary tree nodes.
 */
export abstract class BinaryTreeBase<K extends Key = number, V = any> {
  protected _root: BTNode<K, V> |  null;
  protected _size: number
  
  protected constructor() {
    this._root = null;
    this._size = 0;
  }
  
  /**
   * Gets the root node of the binary tree.
   * @returns {BTNode<K, V> | null} - The root node of the binary tree.
   */
  get root(): BTNode<K, V> | null {
    return this._root;
  }
  
  /**
   * Gets the number of nodes in the binary tree.
   * @returns {number} - The size of the binary tree.
   */
  get size(): number {
    return this._size;
  }
  
  /**
   * Checks if the binary tree is empty.
   * @returns {boolean} - `true` if the binary tree is empty, `false` otherwise.
   */
  get isEmpty(): boolean {
    return this._size === 0;
  }
  abstract get(key: K, order?: TraversalOrder): V | undefined
  abstract has(key: K, order?: TraversalOrder): boolean
  abstract set(key: K, val: V, order?: TraversalOrder): boolean
  abstract node(key: K): BTNode<K, V> | null
  abstract add(key: K, val: V): void
  abstract delete(key: K): void
  
  /**
   * Iterates over each node in the binary tree, in a specified order and applies a callback function.
   * @param {TraversalFn<K, V>} traversalFn - The callback function to apply to each node.
   * @param {TraversalOrder} [order] - The order of traversal (default: InOrder).
   * @returns {void}
   *
   * @timecomplexity O(n), where n is the number of nodes in the binary tree.
   * @spacecomplexity
   * - O(h) for depth-first traversals, where h is the height of the binary tree.
   * - O(w) for breadth-first traversal, where w is the maximum width of the binary tree.
   */
  forEach(traversalFn: TraversalFn<K, V>, order?: TraversalOrder): void {
    TraversalHelper.forEach<K, V>(this.root, traversalFn, order);
  }
  
  /**
   * Finds a node in the binary tree that matches a given condition using the specified traversal order.
   * @param {MatchFn<K, V>} matchFn - The condition to match nodes.
   * @param {TraversalOrder} [order] - The order of traversal (default: InOrder).
   * @returns {BTNode<K, V> | null} - The first node that matches the condition, or `null` if not found.
   *
   * @timecomplexity O(n), where n is the number of nodes in the binary tree.
   * @spacecomplexity
   * - O(h) for depth-first traversals, where h is the height of the binary tree.
   * - O(w) for breadth-first traversal, where w is the maximum width of the binary tree.
   */
  findNode(matchFn: MatchFn<K, V>, order?: TraversalOrder): BTNode<K, V> | null {
    return TraversalHelper.findNode<K, V>(this.root, matchFn, order)
  }
  
  /**
   * Finds the value in the binary tree that matches a given condition using the specified traversal order.
   * @param {MatchFn<K, V>} matchFn - The condition to match values.
   * @param {TraversalOrder} [order] - The order of traversal (default: InOrder).
   * @returns {V | undefined} - The first value that matches the condition, or `undefined` if not found.
   *
   * @timecomplexity O(n), where n is the number of nodes in the binary tree.
   * @spacecomplexity
   * - O(h) for depth-first traversals, where h is the height of the binary tree.
   * - O(w) for breadth-first traversal, where w is the maximum width of the binary tree.
   */
  findValue(matchFn: MatchFn<K, V>, order?: TraversalOrder): V | undefined {
    return TraversalHelper.findValue(this.root, matchFn, order);
  }
  
  /**
   * Checks if any node in the binary tree matches a given condition using the specified traversal order.
   * @param {MatchFn<K, V>} matchFn - The condition to match nodes.
   * @param {TraversalOrder} [order] - The order of traversal (default: InOrder).
   * @returns {boolean} - `true` if at least one node matches the condition, `false` otherwise.
   *
   * @timecomplexity O(n), where n is the number of nodes in the binary tree.
   * @spacecomplexity
   * - O(h) for depth-first traversals, where h is the height of the binary tree.
   * - O(w) for breadth-first traversal, where w is the maximum width of the binary tree.
   */
  some(matchFn: MatchFn<K, V>, order?: TraversalOrder): boolean {
    return TraversalHelper.some<K, V>(this.root, matchFn, order);
  }
  
  /**
   * Checks if all nodes in the binary tree match a given condition using the specified traversal order.
   * @param {MatchFn<K, V>} matchFn - The condition to match nodes.
   * @param {TraversalOrder} [order] - The order of traversal (default: InOrder).
   * @returns {boolean} - `true` if all nodes match the condition, `false` otherwise.
   *
   * @timecomplexity O(n), where n is the number of nodes in the binary tree.
   * @spacecomplexity
   * - O(h) for depth-first traversals, where h is the height of the binary tree.
   * - O(w) for breadth-first traversal, where w is the maximum width of the binary tree.
   */
  every(matchFn: MatchFn<K, V>, order?: TraversalOrder): boolean {
    return TraversalHelper.every<K, V>(this.root, matchFn, order);
  }
  
  /**
   * Clears the binary tree, removing all nodes.
   * @returns {void}
   *
   * @timecomplexity O(1)
   * @spacecomplexity O(1)
   */
  clear(): void {
    this.setRoot(null);
    this.setSize(0);
  }
  
  /**
   * Gets the maximum depth of the binary tree.
   * @returns {number} - The maximum depth of the binary tree.
   *
   * @timecomplexity O(n), where n is the number of nodes in the binary tree.
   * @spacecomplexity O(h), where h is the height of the binary tree.
   */
  maxDepth(): number {
    return CalcHelper.maxDepth(this.root);
  }
  
  /**
   * Checks if the binary tree is equal to another tree by comparing their structures.
   * @param {BTNode<K, V> | null} root - The root of the other binary tree.
   * @returns {boolean} - `true` if the binary trees are equal,
   *
   * @timecomplexity O(n), where n is the number of nodes in the binary tree.
   * @spacecomplexity O(h), where h is the height of the binary tree.
   */
  isEqual(root: BTNode<K, V> | null): boolean {
    return CompareHelper.isEqual<K, V>(this.root, root);
  }
  
  /**
   * Checks if the binary tree is perfect.
   * A binary tree is considered perfect if all nodes have exactly two children, and all leaf nodes are at the same level.
   * @returns {boolean} True if the tree is perfect, false otherwise.
   *
   * @timecomplexity O(n), where n is the number of nodes in the binary tree.
   * @spacecomplexity O(h), where h is the height of the binary tree.
   */
  isPerfect(): boolean {
    return CompareHelper.isPerfect(this.root);
  }
  
  /**
   * Checks if the binary tree is full.
   * A binary tree is considered full if each node has either 0 or 2 children.
   * @returns {boolean} - True if the binary tree is full, false otherwise.
   *
   * @timecomplexity O(n), where n is the number of nodes in the binary tree.
   * @spacecomplexity O(h), where h is the height of the binary tree.
   */
  isFull(): boolean {
    return CompareHelper.isFull<K, V>(this.root)
  }
  
  /**
   * Checks if the binary tree is complete.
   * A binary tree is considered complete if all levels, except possibly the last,
   * are completely filled, and all nodes are as left as possible.
   * @returns {boolean} - True if the binary tree is complete, false otherwise.
   *
   * @timecomplexity O(n), where n is the number of nodes in the binary tree.
   * @spacecomplexity O(w), where w is the maximum width of the binary tree.
   */
  isComplete(): boolean {
    return CompareHelper.isComplete<K, V>(this.root)
  }
  
  /**
   * Checks if the binary tree is balanced.
   * A binary tree is considered balanced if the height of the two subtrees of any node
   * never differs by more than one.
   * @returns {boolean} - True if the binary tree is balanced, false otherwise.
   *
   * @timecomplexity O(n), where n is the number of nodes in the binary tree.
   * @spacecomplexity O(h), where h is the height of the binary tree.
   */
  isBalanced(): boolean {
    return CompareHelper.isBalanced<K, V>(this.root)
  }
  
  /**
   * Generates an iterator for the keys in the binary tree using the specified traversal order.
   * @param {TraversalOrder} [order] - The order of traversal (default: InOrder).
   * @returns {Generator<K, void, void>} - An iterator for the keys in the binary tree.
   *
   * @timecomplexity O(n), where n is the number of nodes in the binary tree.
   * @spacecomplexity
   * - O(h) for depth-first traversals, where h is the height of the binary tree.
   * - O(w) for breadth-first traversal, where w is the maximum width of the binary tree.
   */
  *keys(order?: TraversalOrder): Generator<K, void, void> {
    // @ts-ignore
    for (const node of TraversalHelper.getIterator<K, V>(this.root, order)) {
      yield node.key
    }
  }
  
  /**
   * Generates an iterator for the values in the binary tree using the specified traversal order.
   * @param {TraversalOrder} [order] - The order of traversal (default: InOrder).
   * @returns {Generator<V, void, void>} - An iterator for the values in the binary tree.
   *
   * @timecomplexity O(n), where n is the number of nodes in the binary tree.
   * @spacecomplexity
   * - O(h) for depth-first traversals, where h is the height of the binary tree.
   * - O(w) for breadth-first traversal, where w is the maximum width of the binary tree.
   */
  *values(order?: TraversalOrder): Generator<V, void, void> {
    // @ts-ignore
    for (const node of TraversalHelper.getIterator<K, V>(this.root, order)) {
      yield node.val
    }
  }
  
  /**
   * Generates an iterator for the entries (key-value pairs) in the binary tree using the specified traversal order.
   * @param {TraversalOrder} [order] - The order of traversal (default: InOrder).
   * @returns {Generator<[K, V], void, void>} - An iterator for the entries in the binary tree.
   *
   * @timecomplexity O(n), where n is the number of nodes in the binary tree.
   * @spacecomplexity
   * - O(h) for depth-first traversals, where h is the height of the binary tree.
   * - O(w) for breadth-first traversal, where w is the maximum width of the binary tree.
   */
  *entries(order?: TraversalOrder): Generator<[K, V], void, void> {
    // @ts-ignore
    for (const node of TraversalHelper.getIterator<K, V>(this.root, order)) {
      yield [node.key, node.val]
    }
  }
  
  /**
   * Generates an iterator for the nodes in the binary tree using the specified traversal order.
   * @param {TraversalOrder} [order] - The order of traversal (default: InOrder).
   * @returns {Generator<BTNode<K, V>, void, void>} - An iterator for the nodes in the binary tree.
   *
   * @timecomplexity O(n), where n is the number of nodes in the binary tree.
   * @spacecomplexity
   * - O(h) for depth-first traversals, where h is the height of the binary tree.
   * - O(w) for breadth-first traversal, where w is the maximum width of the binary tree.
   */
  *nodes(order?: TraversalOrder): Generator<BTNode<K, V>, void, void> {
    // @ts-ignore
    for (const node of TraversalHelper.getIterator<K, V>(this.root, order)) {
      yield node
    }
  }
  protected setRoot(root: BTNode<K, V> | null): void {
    this._root = root;
  }
  protected setSize(number: number): void {
    this._size = number;
  }
}