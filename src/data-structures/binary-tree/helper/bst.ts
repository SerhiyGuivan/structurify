import {BSTComparator, Entries, Key} from "@/types/binary-tree/index";
import {BTNode} from "@/data-structures/binary-tree/node/node";

export const numericCompare: BSTComparator<number> = (a, b) => a - b;
export const strCompare: BSTComparator<string> = (a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' });

/**
 * Helper class for Binary Search Tree operations.
 */
export class BSTHelper {
  /**
   * Get the value associated with a key in the BST.
   * @template K - Key type
   * @template V - Value type
   * @param {BTNode<K, V>} root - Root node of the BST
   * @param {K} key - Key to search for
   * @param {BSTComparator<K>} comparator - Function to compare keys
   * @returns {V | undefined} - Value associated with the key, or undefined if not found
   
   * @timecomplexity O(log n) - Logarithmic time complexity as it navigates through a balanced binary search tree.
   * @spacecomplexity O(1) - Constant space complexity, as no additional space is used relative to the input size.
   */
  static get<K extends Key, V>(root: BTNode<K, V>, key: K, comparator: BSTComparator<K>): V | undefined {
    return BSTHelper.node<K, V>(root, key, comparator)?.val;
  }
  
  /**
   * Get the node associated with a key in the BST.
   * @template K - Key type
   * @template V - Value type
   * @param {BTNode<K, V>} root - Root node of the BST
   * @param {K} key - Key to search for
   * @param {BSTComparator<K>} comparator - Function to compare keys
   * @returns {BTNode<K, V> | null} - Node associated with the key, or null if not found
   
   * @timecomplexity O(log n) - Logarithmic time complexity as it navigates through a balanced binary search tree.
   * @spacecomplexity O(1) - Constant space complexity, as no additional space is used relative to the input size.
   */
  static node<K extends Key, V>(root: BTNode<K, V>, key: K, comparator: BSTComparator<K>): BTNode<K, V> | null {
    if (root === null) {
      return null;
    }
    
    const compareResult = comparator(key, root.key);
    
    if (compareResult === 0) {
      return root;
    }
    if (compareResult < 0) {
      return BSTHelper.node(root.left, key, comparator);
    }
    return BSTHelper.node(root.right, key, comparator);
  }
  
  /**
   * Check if a key exists in the BST.
   * @template K - Key type
   * @template V - Value type
   * @param {BTNode<K, V>} root - Root node of the BST
   * @param {K} key - Key to search for
   * @param {BSTComparator<K>} comparator - Function to compare keys
   * @returns {boolean} - True if the key exists, false otherwise
   
   * @timecomplexity O(log n) - Logarithmic time complexity as it navigates through a balanced binary search tree.
   * @spacecomplexity O(1) - Constant space complexity, as no additional space is used relative to the input size.
   */
  static has<K extends Key, V>(root: BTNode<K, V>, key: K, comparator: BSTComparator<K>): boolean {
    return !!BSTHelper.node<K, V>(root, key, comparator);
  }
  
  /**
   * Create a balanced BST from sorted entries.
   * @template K - Key type
   * @template V - Value type
   * @param {Entries<K, V>} entries - Array of entries sorted by key
   * @param {number} start - Start index of the current range
   * @param {number} end - End index of the current range
   * @returns {BTNode<K, V> | null} - Root node of the resulting BST
  
   * @timecomplexity O(n) - Linear time complexity as it visits each entry once.
   * @spacecomplexity O(log n) - Logarithmic space complexity due to the recursive nature of the function.
   */
  static fromSortedEntries<K extends Key, V>(entries: Entries<K, V>, start: number, end: number ): BTNode<K, V> | null {
    if (start > end) {
      return null;
    }
    
    const mid = Math.floor((start + end) / 2);
    const node = new BTNode<K, V>(...entries[mid]);
    
    node.left = BSTHelper.fromSortedEntries<K, V>(entries, start, mid - 1);
    node.right = BSTHelper.fromSortedEntries<K, V>(entries, mid + 1, end);
    return node;
  }
  
  /**
   * Set the value associated with a key in the BST.
   * @template K - Key type
   * @template V - Value type
   * @param {BTNode<K, V>} root - Root node of the BST
   * @param {K} key - Key to set the value for
   * @param {V} val - Value to set
   * @param {BSTComparator<K>} comparator - Function to compare keys
   * @returns {boolean} - True if the key was found and value set, false otherwise
   
   * @timecomplexity O(log n) - Logarithmic time complexity as it navigates through a balanced binary search tree.
   * @spacecomplexity O(1) - Constant space complexity, as no additional space is used relative to the input size.
   */
  static set<K extends Key, V>(root: BTNode<K, V>, key: K, val: V, comparator: BSTComparator<K>): boolean {
    const node = BSTHelper.node<K, V>(root, key, comparator);
    if (node !== null) {
      node.val = val;
      return true;
    }
    return false;
  }
  
  /**
   * Add a new node with the given key and value to the BST.
   * @template K - Key type
   * @template V - Value type
   * @param {BTNode<K, V>} root - Root node of the BST
   * @param {K} key - Key to add
   * @param {V} val - Value to associate with the key
   * @param {BSTComparator<K>} comparator - Function to compare keys
   * @returns {[BTNode<K, V>, boolean]} - Tuple containing the root of the updated BST and a boolean indicating success
   * @timecomplexity O(log n) - Logarithmic time complexity as it navigates through a balanced binary search tree.
   * @spacecomplexity O(log n) - Logarithmic space complexity due to the recursive nature of the function.
   */
  static add<K extends Key, V>(root: BTNode<K, V>, key: K, val: V, comparator: BSTComparator<K>): [BTNode<K, V>, boolean] {
    if (root === null) {
      return [new BTNode<K, V>(key, val), true];
    }
    
    const compareResult = comparator(key, root.key);
    
    if (compareResult < 0) {
      const [node, isSuccess] = BSTHelper.add(root.left, key, val, comparator);
      root.left = node;
      return [root, isSuccess];
    } else if (compareResult > 0) {
      const [node, isSuccess] = BSTHelper.add(root.right, key, val, comparator);
      root.right = node;
      return [root, isSuccess];
    } else {
      console.warn('Duplicate key, do not added')
      return [root, false];
    }
  }
  
  /**
   * Delete a node with the given key from the BST.
   * @template K - Key type
   * @template V - Value type
   * @param {BTNode<K, V> | null} root - Root node of the BST
   * @param {K} key - Key to delete
   * @param {BSTComparator<K>} comparator - Function to compare keys
   * @param {boolean} deleted - Flag indicating whether a node has already been deleted
   * @returns {[BTNode<K, V> | null, boolean]} - Tuple containing the root of the updated BST and a boolean indicating success
  
   * @timecomplexity O(log n) - Logarithmic time complexity as it navigates through a balanced binary search tree.
   * @spacecomplexity O(log n) - Logarithmic space complexity due to the recursive nature of the function.
   */
  static delete<K extends Key, V>(root: BTNode<K, V> | null, key: K, comparator: BSTComparator<K>, deleted: boolean = false): [BTNode<K, V> | null, boolean] {
    if (root === null) {
      return [null, deleted];
    }
    
    const comparisonResult = comparator(key, root.key);
    
    if (comparisonResult < 0) {
      const [left,isDeleted ] = BSTHelper.delete(root.left, key, comparator, deleted)
      deleted = isDeleted;
      root.left = left;
    } else if (comparisonResult > 0) {
      const [right, isDeleted] = BSTHelper.delete(root.right, key, comparator, deleted)
      deleted = isDeleted;
      root.right = right;
    } else {
      // Node to be deleted found
      deleted = true;
      
      // Case 1: Node with only one child or no child
      if (root.left === null) {
        return [root.right, deleted];
      } else if (root.right === null) {
        return [root.left, deleted];
      }
      
      // Case 3: Node with two children
      const successor = BSTHelper.mostLeft(root.right);
      
      root.key = successor.key
      root.val = successor.val
      
      const [right] = BSTHelper.delete(root.right, root.key, comparator, deleted);
      root.right = right;
    }
    
    return [root, deleted];
  }
  
  /**
   * Find the leftmost node in the BST.
   * @template K - Key type
   * @template V - Value type
   * @param {BTNode<K, V> | null} root - Root node of the BST
   * @returns {BTNode<K, V> | null} - The leftmost node in the BST
   * @timecomplexity O(log n) - Logarithmic time complexity as it navigates through the left side of a balanced binary search tree.
   * @spacecomplexity O(1) - Constant space complexity, as no additional space is used relative to the input size.
   */
  private static mostLeft<K extends Key, V>(root: BTNode<K, V> | null): BTNode<K, V> | null {
    let currentNode = root;
    
    while (currentNode && currentNode?.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }
}