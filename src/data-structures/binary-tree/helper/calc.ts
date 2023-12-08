import {Key} from "@/types/binary-tree";
import { BTNode } from '../node/node';

/**
 * Helper class for performing calculations related to binary trees.
 */
export class CalcHelper {
  /**
   * Calculates the maximum number of nodes at a given depth in a binary tree.
   * @param {number} depth - The depth of the binary tree.
   * @returns {number} - The maximum number of nodes at the specified depth.
   *
   * @timecomplexity O(1)
   * @spacecomplexity O(1)
   * @description This function calculates the maximum number of nodes at a given depth in a binary tree
   * using the formula 2^depth - 1.
   */
  static maxNodesAtDepth(depth: number): number {
    if (depth <= 0 || !Number.isInteger(depth)) {
      throw new Error('Number of levels must be Integer and greater than 0');
    }
    return Math.pow(2, depth) - 1;
  }
  
  /**
   * Calculates the minimum depth of a binary tree required to achieve a certain number of nodes.
   * @param {number} size - The number of nodes in the binary tree.
   * @returns {number} - The minimum depth required to have the specified number of nodes.
   *
   * @timecomplexity O(1)
   * @spacecomplexity O(1)
   * @description This function calculates the minimum depth of a binary tree required to achieve
   * a certain number of nodes using the formula floor(log2(size + 1)).
   */
  static minDepthAtNodesSize(size: number): number {
    if (size <= 0 || !Number.isInteger(size)) {
      throw new Error('Number of nodes must be Integer and greater than 0');
    }
    return Math.floor(Math.log2(size + 1));
  }
  
  /**
   * Calculates the minimum depth of a binary tree required to have a certain number of leaves.
   * @param {number} leaves - The number of leaves in the binary tree.
   * @returns {number} - The minimum depth required to have the specified number of leaves.
   *
   * @timecomplexity O(1)
   * @spacecomplexity O(1)
   * @description This function calculates the minimum depth of a binary tree required to have
   * a certain number of leaves using the formula floor(log2(leaves)) + 1.
   */
  static minDepthAtLeavesSize(leaves: number): number {
    if (leaves <= 0 || !Number.isInteger(leaves)) {
      throw new Error('Number of leaves must be Integer and greater than 0');
    }
    return Math.floor(Math.log2(leaves)) + 1;
  }
  
  /**
   * Calculates the maximum depth of a binary tree.
   * @template K - The type of the key (number or string).
   * @template V - The type of the value stored in the node.
   * @param {BTNode<K, V> | null} root - The root node of the binary tree.
   * @returns {number} - The maximum depth of the binary tree.
   *
   * @timecomplexity O(n), where n is the number of nodes in the binary tree.
   * @spacecomplexity O(h), where h is the height of the binary tree.
   * @description This function calculates the maximum depth of a binary tree recursively by
   * considering the maximum depth of the left and right subtrees.
   */
  static maxDepth<K extends Key, V>(root: BTNode<K, V> | null): number {
    if (root === null) {
      return 0;
    }
    const leftDepth = CalcHelper.maxDepth(root.left);
    const rightDepth = CalcHelper.maxDepth(root.right);
    return Math.max(leftDepth, rightDepth) + 1;
  }
  
  /**
   * Calculates the total number of nodes in a binary tree.
   * @template K - The type of the key (number or string).
   * @template V - The type of the value stored in the node.
   * @param {BTNode<K, V> | null} root - The root node of the binary tree.
   * @returns {number} - The total number of nodes in the binary tree.
   *
   * @timecomplexity O(n), where n is the number of nodes in the binary tree.
   * @spacecomplexity O(h), where h is the height of the binary tree.
   * @description This function calculates the total number of nodes in a binary tree
   * by summing the nodes in the left and right subtrees, including the root.
   */
  static calcSize<K extends Key, V>(root: BTNode<K, V> | null): number {
    if (root === null) {
      return 0;
    }
    return 1 + CalcHelper.calcSize<K, V>(root.left) + CalcHelper.calcSize(root.right);
  }
}