import {TraversalOrder} from '../../enums/binary-tree/index';
import {Entries, Key} from '../../types/binary-tree/index';
import {BinaryTreeBase} from './base/binary-tree-base';
import {CalcHelper} from "./helper/calc";
import {BTNode} from './node/node';
import {BTMutationHelper} from './helper/bt-mutation';

/**
 * Represents a binary tree.
 *
 * @extends {BinaryTreeBase<K, V>}
 * @template K - The type of the keys (number or string) stored in the binary tree nodes.
 * @template V - The type of the value stored in the binary tree nodes.
 */
export default class BinaryTree<K extends Key = number, V = any> extends BinaryTreeBase<K, V>{
  /**
   * Constructs a new instance of the BinaryTree class.
   * @param {BTNode<K, V> | null} [root] - The root node of the binary tree.
   *                                       If not provided, the tree will be initialized as empty.
   * @param {number} [size] - The size of the binary tree.
   *                          If not provided, the size will be calculated based on the root node.
   */
  constructor(root?: BTNode<K, V> | null, size?: number) {
    super();
    if (root) {
      this.setRoot(root);
      this.setSize(size ?? CalcHelper.calcSize<K, V>(root));
    }
  }
  
  /**
   * Creates a new BinaryTree instance from an array of entries using level-order (BFS) traversal for insertion.
   * @template K - The type of the key (number or string).
   * @template V - The type of the value stored in the node.
   * @param {Entries<K, V>} entries - The entries to initialize the binary tree.
   * @returns {BinaryTree<K, V>} - A new binary tree instance.
   *
   * @timecomplexity O(n), where n is the number of nodes in the binary tree.
   * @spacecomplexity O(w), where w is the maximum width of the binary tree.
   */
  static fromEntries<K extends Key, V>(entries: Entries<K, V>): BinaryTree<K, V> {
    const [root, count] = BTMutationHelper.addMany<K, V>(null, entries);
    return new BinaryTree(root, count);
  }
  
  /**
   * Gets the value associated with the specified key in the binary tree, employing the chosen traversal order.
   * @param {number | string} key - The key to search for.
   * @param {TraversalOrder} [order] - The order of traversal (default: InOrder).
   * @returns {V | undefined} - The value associated with the key, or undefined if not found.
   *
   * @timecomplexity O(n), where n is the number of nodes in the binary tree.
   * @spacecomplexity
   * - O(h) for depth-first traversals, where h is the height of the binary tree.
   * - O(w) for breadth-first traversal, where w is the maximum width of the binary tree.
   */
  get(key: K, order?: TraversalOrder): V | undefined {
    return this.findValue((_v, k) => k === key, order);
  }
  
  /**
   * Gets the node with the specified key in the binary tree, employing the chosen traversal order.
   * @param {K} key - The key to search for.
   * @param {TraversalOrder} [order] - The order of traversal (default: InOrder).
   * @returns {BTNode<K, V>} - The node with the specified key.
   *
   * @timecomplexity O(n), where n is the number of nodes in the binary tree.
   * @spacecomplexity
   * - O(h) for depth-first traversals, where h is the height of the binary tree.
   * - O(w) for breadth-first traversal, where w is the maximum width of the binary tree.
   */
  node(key: K, order?: TraversalOrder): BTNode<K, V> {
    return this.findNode((_v, k) => k === key, order);
  }
  
  /**
   * Checks if the binary tree contains a node with the specified key, employing the chosen traversal order.
   * @param {K} key - The key to check for.
   * @param {TraversalOrder} [order] - The order of traversal (default: InOrder).
   * @returns {boolean} - True if the binary tree contains a node with the specified key, false otherwise.
   *
   * @timecomplexity O(n), where n is the number of nodes in the binary tree.
   * @spacecomplexity
   * - O(h) for depth-first traversals, where h is the height of the binary tree.
   * - O(w) for breadth-first traversal, where w is the maximum width of the binary tree.
   */
  has(key: K, order?: TraversalOrder): boolean {
    return this.some((_v, k) => k === key, order);
  }
  
  /**
   * Sets the value associated with the specified key in the binary tree, employing the chosen traversal order.
   * @param {K} key - The key to set.
   * @param {V} val - The value to associate with the key.
   * @param {TraversalOrder} [order] - The order of traversal (default: InOrder).
   * @returns {boolean} - True if the key was successfully set, false otherwise.
   *
   * @timecomplexity O(n), where n is the number of nodes in the binary tree.
   * @spacecomplexity
   * - O(h) for depth-first traversals, where h is the height of the binary tree.
   * - O(w) for breadth-first traversal, where w is the maximum width of the binary tree.
   */
  set(key: K, val: V, order?: TraversalOrder): boolean {
    return BTMutationHelper.set<K, V>(this.root, key, val, order);
  }
  
  /**
   * Adds a new node with the given key and value to the binary tree, employing level-order (BFS) traversal for insertion.
   * @param {K} key - The key of the new node.
   * @param {V} val - The value of the new node.
   * @returns {void}
   *
   * @timecomplexity O(n), where n is the number of nodes in the binary tree.
   * @spacecomplexity O(w), where w is the maximum width of the binary tree.
   */
  add(key: K, val: V): void {
    const [root, isSuccess] = BTMutationHelper.add<K, V>(this.root, key, val);
    if (isSuccess) {
      this.setRoot(root);
      this.setSize(this.size + 1);
    }
  }
  
  /**
   * Adds multiple nodes with the given keys and values to the binary tree, employing level-order (BFS) traversal for insertion.
   * @param {Entries<K, V>} entries - An array of key-value pairs to be added to the binary tree.
   * @returns {void}
   *
   * @timecomplexity O(n), where n is the total number of nodes (both existing nodes in the tree and the nodes to be added).
   * @spacecomplexity O(w), where w is the maximum width of the binary tree.
   */
  addMany(entries: Entries<K, V>): void {
    const [root, count] = BTMutationHelper.addMany<K, V>(this.root, entries);
    if (count > 0) {
      this.setRoot(root);
      this.setSize(this.size + count);
    }
  }
  
  /**
   * Deletes the node with the specified key from the binary tree.
   * It replaces the node with the deepest rightmost node and then removes the deepest rightmost node.
   * @param {K} key - The key of the node to be deleted.
   * @returns {boolean} - `true` if the node with the given key was found and deleted, `false` otherwise.
   *
   * @timecomplexity O(n), where n is the number of nodes in the binary tree.
   * @spacecomplexity O(w), where w is the maximum width of the binary tree.
   */
  delete(key: K): boolean {
    const [root, isSuccess] = BTMutationHelper.delete<K, V>(this.root, key);
    if (isSuccess) {
      this.setRoot(root);
      this.setSize(this.size - 1);
    }
    return isSuccess;
  }
}