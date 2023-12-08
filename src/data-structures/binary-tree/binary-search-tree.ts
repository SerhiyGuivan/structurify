import {BSTComparator, Entries, Key} from '@/types/binary-tree/index';
import {BinaryTreeBase} from './base/binary-tree-base';
import {BSTHelper, numericCompare} from './helper/bst';
import {CalcHelper} from './helper/calc';
import {BTNode} from "./node/node";

/**
 * Represents a binary search tree.
 * @template K - The type of the keys (number or string) stored in the binary tree nodes.
 * @template V - The type of the value stored in the binary tree nodes.
 */
export default class BinarySearchTree<K extends Key = number, V = any> extends BinaryTreeBase<K, V>{
  private readonly comparator: BSTComparator<K>
  
  /**
   * Constructor for BinarySearchTree.
   * @param {BSTComparator<K>} [comparator] - The comparator function for keys of the binary search tree.
   *                                          If not provided, the default comparator is (a, b) => a - b.
   * @param {BTNode<K, V> | null} [bstRoot] - The root node of the binary search tree.
   *                                          If not provided, the tree will be initialized as empty.
   * @param {number} [size] - The size of the binary search tree.
   *                          If not provided, the size will be calculated based on the root node.
   */
  constructor(comparator?: BSTComparator<K>, bstRoot?: BTNode<K, V>, size?: number) {
    super()
    this.comparator = comparator || numericCompare as BSTComparator<K>;
    if (bstRoot) {
      this.setRoot(bstRoot);
      this.setSize(size ?? CalcHelper.calcSize<K, V>(bstRoot));
    }
  }
  
  /**
   * Create a BinarySearchTree from an array of entries.
   * @template K - The type of the keys (number or string) stored in the binary tree nodes.
   * @template V - The type of the value stored in the binary tree nodes.
   * @param {Entries<K, V>} entries - Array of key-value entries.
   * @param {BSTComparator<K>} [comparator] - The comparator function for keys of the binary search tree.
   *                                          If not provided, the default comparator is (a, b) => a - b.
   * @returns {BinarySearchTree<K, V>} - BinarySearchTree instance.
   * @timecomplexity O(n log n) - Time complexity of adding many entries individually is O(n log n)
   * @spacecomplexity O(n) - Linear space complexity as each entry creates a node in the tree.
   */
  static fromEntries<K extends Key = number, V = any>(entries: Entries<K, V>, comparator?: BSTComparator<K>): BinarySearchTree<K, V> {
    const bst= new BinarySearchTree<K, V>(comparator);
    bst.addMany(entries);
    return bst;
  }
  
  /**
   * Create a BinarySearchTree from an array of sorted entries.
   * @template K - The type of the keys (number or string) stored in the binary tree nodes.
   * @template V - The type of the value stored in the binary tree nodes.
   * @param {Entries<K, V>} entries - Array of key-value entries.
   * @param {BSTComparator<K>} [comparator] - The comparator function for keys of the binary search tree.
   *                                          If not provided, the default comparator is (a, b) => a - b.
   * @returns {BinarySearchTree<number, V>} - BinarySearchTree instance.
   * @timecomplexity O(n) - Linear time complexity, where n is the number of numeric entries.
   * @spacecomplexity O(log n) - Logarithmic space complexity due to the recursive nature of the function.
   */
  static fromSortedEntries<K extends Key, V>(entries: Entries<K, V>, comparator?: BSTComparator<K>): BinarySearchTree<K, V> {
    const bstRoot = BSTHelper.fromSortedEntries<K, V>(entries, 0, entries.length - 1)
    const size = entries.length;
    if (bstRoot) {
      return new BinarySearchTree<K, V>(comparator, bstRoot, size);
    }
  }
  
  /**
   * Get the value associated with a key in the BST.
   * @param {K} key - Key to search for.
   * @returns {V | undefined} - Value associated with the key, or undefined if not found.
   * @timecomplexity O(log n) - Logarithmic time complexity as it navigates through a balanced binary search tree.
   * @spacecomplexity O(1) - Constant space complexity, as no additional space is used relative to the input size.
   */
  get(key: K): V | undefined {
    return BSTHelper.get<K, V>(this.root, key, this.comparator);
  }
  
  /**
   * Get the node associated with a key in the BST.
   * @param {K} key - Key to search for.
   * @returns {BTNode<K, V> | null} - Node associated with the key, or null if not found.
   * @timecomplexity O(log n) - Logarithmic time complexity as it navigates through a balanced binary search tree.
   * @spacecomplexity O(1) - Constant space complexity, as no additional space is used relative to the input size.
   */
  node(key: K): BTNode<K, V> | null {
    return BSTHelper.node<K, V>(this.root, key, this.comparator);
  }
  
  /**
   * Check if a key exists in the BST.
   * @param {K} key - Key to check.
   * @returns {boolean} - True if the key exists, false otherwise.
   * @timecomplexity O(log n) - Logarithmic time complexity as it navigates through a balanced binary search tree.
   * @spacecomplexity O(1) - Constant space complexity, as no additional space is used relative to the input size.
   */
  has(key: K): boolean {
    return BSTHelper.has<K, V>(this.root, key, this.comparator);
  }
  
  /**
   * Add a new node with the given key and value to the BST.
   * @param {K} key - Key to add.
   * @param {V} val - Value to associate with the key.
   * @returns {boolean} - True if the node was added successfully, false if the key already exists.
   * @timecomplexity O(log n) - Logarithmic time complexity as it navigates through a balanced binary search tree.
   * @spacecomplexity O(log n) - Logarithmic space complexity due to the recursive nature of the function.
   */
  add(key: K, val: V): boolean {
    const [root, isSuccess] = BSTHelper.add<K, V>(this.root, key, val, this.comparator);
    if (isSuccess) {
      this.setRoot(root);
      this.setSize(this.size + 1)
    }
    return isSuccess;
  }
  
  /**
   * Adds multiple nodes with the given keys and values to the BST.
   * @param {Entries<K, V>} entries - Array of key-value entries to add.
   * @returns {number} - Number of entries successfully added.
   * @timecomplexity O(n log n) - Time complexity of adding many entries individually is O(n log n)
   * @spacecomplexity O(log n) - Logarithmic space complexity due to the recursive nature of the function.
   */
  addMany(entries: Entries<K, V>): number {
    let count: number = 0;
    for (let [key, val] of entries) {
      count = this.add(key, val) ? count + 1 : count;
    }
    return count;
  }
  
  /**
   * Set the value associated with a key in the BST.
   * @param {K} key - Key to set the value for
   * @param {V} val - Value to set
   * @returns {boolean} - True if the key was found and value set, false otherwise
   * @timecomplexity O(log n) - Logarithmic time complexity as it navigates through a balanced binary search tree.
   * @spacecomplexity O(1) - Constant space complexity, as no additional space is used relative to the input size.
   */
  set(key: K, val: V): boolean {
    return BSTHelper.set(this.root, key, val, this.comparator);
  }
  
  /**
   * Delete a node with the given key from the BST using InOrder successor.
   * @param {K} key - Key to delete.
   * @returns {boolean} - True if the node was successfully deleted, false if the key was not found.
   * @timecomplexity O(log n) - Logarithmic time complexity as it navigates through a balanced binary search tree.
   * @spacecomplexity O(log n) - Logarithmic space complexity due to the recursive nature of the function.
   */
  delete(key: K): boolean {
    const [root, isDeleted] = BSTHelper.delete<K, V>(this.root, key, this.comparator);
    if (isDeleted) {
      this.setRoot(root);
      this.setSize(this.size - 1)
    }
    return isDeleted;
  }
}