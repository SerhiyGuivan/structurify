import Queue from "@/data-structures/queue/queue";
import {Key} from "@/types/binary-tree";
import {BTNode} from "../node/node";
import {CalcHelper} from "./calc";

/**
 * Helper class for comparing binary trees.
 */
export class CompareHelper {
  /**
   * Checks if two binary trees are equal.
   * @template K - The type of the key (number or string).
   * @template V - The type of the value stored in the node.
   * @param {BTNode<K, V> | null} root - The root of the first binary tree.
   * @param {BTNode<K, V> | null} targetRoot - The root of the second binary tree.
   * @returns {boolean} True if the trees are equal, false otherwise.
   *
   * @timecomplexity O(min(n, m)), where n and m are the number of nodes in the two binary trees.
   * @spacecomplexity O(min(h1, h2)), where h1 and h2 are the heights of the two binary trees.
   */
  static isEqual<K extends Key, V>(root: BTNode<K, V> | null, targetRoot: BTNode<K, V> | null): boolean {
    if (root === null && targetRoot === null) {
      return true;
    }
    if (root === null || targetRoot === null) {
      return false;
    }
    if (root.val !== targetRoot.val) {
      return false;
    }
    return CompareHelper.isEqual<K, V>(root.left, targetRoot.left) &&
      CompareHelper.isEqual<K, V>(root.right, targetRoot.right)
  }
  
  /**
   * Checks if a binary tree is perfect.
   * A binary tree is considered perfect if all nodes have exactly two children, and all leaf nodes are at the same level.
   * @template K - The type of the key (number or string).
   * @template V - The type of the value stored in the node.
   * @param {BTNode<K, V>} root - The root of the binary tree.
   * @returns {boolean} True if the tree is perfect, false otherwise.
   *
   * @timecomplexity O(n), where n is the number of nodes in the binary tree.
   * @spacecomplexity O(h), where h is the height of the binary tree.
   * @description
   * This method determines if a binary tree is perfect by checking whether all leaf nodes are at the same level
   * and each non-leaf node has exactly two children. It calculates the depth of the tree and then recursively
   * verifies the perfect binary tree conditions.
   */
  static isPerfect<K extends Key, V>(root: BTNode<K, V>): boolean {
    const depth = CalcHelper.maxDepth<K, V>(root);
    return CompareHelper.isPerfectRecursive(root, depth, 0);
  }
  
  /**
   * Checks if the given binary tree is full.
   * A binary tree is considered full if each node has either 0 or 2 children.
   * @template K - The type of the key (number or string).
   * @template V - The type of the value stored in the node.
   * @param {BTNode<K, V> | null} root - The root node of the binary tree.
   * @returns {boolean} - True if the binary tree is full, false otherwise.
   *
   * @timecomplexity O(n), where n is the number of nodes in the binary tree.
   * @spacecomplexity O(h), where h is the height of the binary tree.
   */
  static isFull<K extends Key, V>(root: BTNode<K, V> | null): boolean {
    if (!root) {
      return true;
    }
    // Check if the node has either 0 or 2 children
    if ((root.left === null && root.right !== null) || (root.left !== null && root.right === null)) {
      return false;
    }
    return CompareHelper.isFull(root.left) && CompareHelper.isFull(root.right);
  }
  
  /**
   * Checks if the given binary tree is complete.
   * A binary tree is considered complete if all levels, except possibly the last,
   * are completely filled, and all nodes are as left as possible.
   * @template K - The type of the key (number or string).
   * @template V - The type of the value stored in the node.
   * @param {BTNode<K, V> | null} root - The root node of the binary tree.
   * @returns {boolean} - True if the binary tree is complete, false otherwise.
   *
   * @timecomplexity O(n), where n is the number of nodes in the binary tree.
   * @spacecomplexity O(w), where w is the width of the binary tree (the maximum number of nodes at any level).
   */
  static isComplete<K extends Key, V>(root: BTNode<K, V> | null): boolean {
    if (!root) {
      return true;
    }
    const queue = new Queue<BTNode<K, V>>();
    queue.enqueue(root)
    let encounteredNull = false;
    while (queue.size > 0) {
      const currentNode = queue.dequeue();
      if (!currentNode) {
        encounteredNull = true;
      } else {
        if (encounteredNull) {
          // If a null node is encountered after non-null nodes, the tree is not complete
          return false;
        }
        queue.enqueue(currentNode.left);
        queue.enqueue(currentNode.right);
      }
    }
    return true;
  }
  
  /**
   * Checks if the given binary tree is balanced.
   * A binary tree is considered balanced if the height of the two subtrees of any node
   * never differs by more than one.
   *
   * @template K - The type of the key (number or string).
   * @template V - The type of the value stored in the node.
   * @param {BTNode<K, V> | null} root - The root node of the binary tree.
   * @returns {boolean} - True if the binary tree is balanced, false otherwise.
   *
   * @timecomplexity O(n), where n is the number of nodes in the binary tree.
   * @spacecomplexity O(h), where h is the height of the binary tree.
   */
  static isBalanced<K extends Key, V>(root: BTNode<K, V> | null): boolean {
    if (!root) {
      return true;
    }
    const leftHeight = CalcHelper.maxDepth<K, V>(root.left);
    const rightHeight = CalcHelper.maxDepth<K, V>(root.right);
    // Check if the height difference is within the allowed range
    if (Math.abs(leftHeight - rightHeight) <= 1) {
      return CompareHelper.isBalanced(root.left) && CompareHelper.isBalanced(root.right);
    }
    // If the height difference is greater than 1, the tree is not balanced
    return false;
  }
  
  /**
   * Recursive helper function for checking if a binary tree is perfect.
   * @template K - The type of the key (number or string).
   * @template V - The type of the value stored in the node.
   * @param {BTNode<K, V> | null} root - The root node of the binary tree.
   * @param {number} depth - The depth of the binary tree.
   * @param {number} currentLevel - The current level of the tree.
   * @returns {boolean} True if the tree is perfect, false otherwise.
   */
  private static isPerfectRecursive<K extends Key, V>(root: BTNode<K, V> | null, depth: number, currentLevel: number): boolean {
    if (root === null) {
      return true;
    }
    if (root.left === null && root.right === null) {
      return depth === currentLevel + 1;
    }
    if (root.left === null || root.right === null) {
      return false;
    }
    return (
      CompareHelper.isPerfectRecursive(root.left, depth, currentLevel + 1) &&
      CompareHelper.isPerfectRecursive(root.right, depth, currentLevel + 1)
    );
  }
}