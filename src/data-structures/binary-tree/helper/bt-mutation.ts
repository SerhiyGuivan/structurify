import Queue from '../../queue/queue';
import {Entries, Key} from '@/types/binary-tree';
import {BTNode} from '../node/node';
import {TraversalHelper} from './traversal';

import {TraversalOrder} from '@/enums/binary-tree';

/**
 * Helper class for mutating a binary tree.
 */
export class BTMutationHelper {
  /**
   * Adds a new node with the given key and value to the binary tree using level-order (BFS) traversal for insertion.
   * @template K - The type of the key (number or string).
   * @template V - The type of the value stored in the node.
   * @param {BTNode<K, V>} root - The root node of the binary tree.
   * @param {K} key - The key of the new node to be added.
   * @param {V} val - The value of the new node to be added.
   * @returns {[BTNode<K, V>, boolean]} - Returns a tuple with the updated root node and a boolean indicating success.
   *                                   The boolean is true if the node was successfully added, false otherwise.
   * @timecomplexity O(n), where n is the number of nodes in the binary tree.
   * @spacecomplexity O(w), where w is the maximum width of the binary tree.
   * @description
   * This method adds a new node with the given key and value to the binary tree.
   * If the tree is empty, the new node becomes the root. Otherwise, it adds the node to the first
   * available position using level order traversal.
   */
  static add<K extends Key, V>(root: BTNode<K, V>, key: K, val: V): [BTNode<K, V>, boolean] {
    const newNode = new BTNode(key, val);
    
    if (root === null) {
      return [newNode, true];
    }
    // @ts-ignore
    for (const n of TraversalHelper.getIterator<K, V>(root, TraversalOrder.LevelOrder)) {
      if (n.left === null) {
        n.left = newNode;
        return [root, true];
      }
      if (n.right === null) {
        n.right = newNode;
        return [root, true];
      }
    }
  }
  
  /**
   * Adds multiple entries to a binary tree in a breadth-first manner.
   * @template K - The type of the key (number or string).
   * @template V - The type of the value stored in the node.
   * @param {BTNode<K, V>} [root=null] - The root of the binary tree. If not provided, a new tree will be created.
   * @param {Entries<K, V>} entries - The array of entries to add to the binary tree.
   * @returns {[BTNode<K, V>, number]} - A tuple containing the root of the modified binary tree and the number of nodes added.
   *
   * @timecomplexity O(n), where n is the total number of nodes (both existing nodes in the tree and the nodes to be added).
   * @spacecomplexity O(w), where w is the maximum width of the binary tree.
   * @description
   * This method adds multiple entries to a binary tree using a breadth-first traversal approach.
   * If the root is not provided, a new binary tree will be created. The entries are added level by level,
   * filling the left child before moving to the right child. The method returns a tuple containing the root
   * of the modified binary tree and the number of nodes added.
   */
  static addMany<K extends Key, V>(root: BTNode<K, V>, entries: Entries<K, V>): [BTNode<K, V>, number] {
    let count: number = 0;
    
    if (entries.length === 0) {
      return [root, count];
    }
    
    const queue: Queue<BTNode<K, V>> = new Queue();
    let index = 0;
    
    if (root === null) {
      root = new BTNode(...entries[index]);
      index++;
      count++
    }
    
    queue.enqueue(root);
    
    while (index < entries.length && queue.size > 0) {
      const currentNode = queue.dequeue();
      
      if (currentNode.left === null) {
        currentNode.left = new BTNode(...entries[index]);
        index++;
        count++
      }
      
      queue.enqueue(currentNode.left);
      
      if (index < entries.length && currentNode.right === null) {
        currentNode.right = new BTNode(...entries[index]);
        index++;
        count++
      }
      
      queue.enqueue(currentNode.right);
    }
    
    return [root, count];
  }
  
  /**
   * Sets the value of the node with the specified key in the binary tree using the specified traversal order.
   * @template K - The type of the key (number or string).
   * @template V - The type of the value stored in the node.
   * @param {BTNode<K, V>} [root=null] - The root of the binary tree
   * @param {K} key - The key of the node to be updated.
   * @param {V} val - The new value for the node.
   * @param {TraversalOrder} [order] - The order of traversal (default: InOrder).
   * @returns {boolean} - `true` if the node with the given key was found and updated, `false` otherwise.
   *
   * @timecomplexity O(n), where n is the number of nodes in the binary tree.
   * @spacecomplexity
   * - O(h) for depth-first traversals, where h is the height of the binary tree.
   * - O(w) for breadth-first traversal, where w is the maximum width of the binary tree.
   * @description This method sets the value of the node with the specified key in the binary tree.
   * It uses a specified traversal order to find the node.
   */
  static set<K extends Key, V>(root: BTNode<K, V>, key: K, val: V, order?: TraversalOrder): boolean {
    const node = TraversalHelper.findNode<K, V>(root, (_v, k) => k === key, order);
    if (node !== null) {
      node.val = val;
      return true;
    }
    return false
  }
  
  /**
   * Deletes a node with the specified key from a binary tree.
   * @template K - The type of the key (number or string).
   * @template V - The type of the value stored in the node.
   * @param {BTNode<K, V>} root - The root node of the binary tree.
   * @param {K} key - The key of the node to be deleted.
   * @returns {[BTNode<K, V> | null, boolean]} - Returns a tuple with the updated root node and a boolean indicating success.
   *                                           The boolean is true if the node was successfully deleted, false otherwise.
   * @timecomplexity O(n), where n is the number of nodes in the binary tree.
   * @spacecomplexity O(w), where w is the maximum width of the binary tree.
   * @description This method deletes the node with the specified key from the binary tree.
   * It replaces the node with the deepest rightmost node and then removes the deepest rightmost node.
   */
  static delete<K extends Key, V>(root: BTNode<K, V>, key: K): [BTNode<K, V> | null, boolean] {
    if (root === null) {
      return [null, false];
    }
    
    if (root.left === null && root.right === null && root.key === key) {
      return [null, true];
    }
    
    let keyNode: BTNode<K, V> | null = null;
    let parentDeepestRightMostNode: BTNode<K, V> | null = null;
    let deepestRightMostNode: BTNode<K, V> | null = null;
    
    // Traverse the tree in level order to find the node with the specified key and the deepest rightmost node.
    // @ts-ignore
    for (const n of TraversalHelper.getIterator<K, V>(root, TraversalOrder.LevelOrder)) {
      if (n.key === key){
        keyNode = n
      }
      if (n.left !== null || n.right !== null) {
        parentDeepestRightMostNode = n;
      }
      deepestRightMostNode = n;
    }
    
    // If the node with the specified key is not found, return false.
    if (!keyNode) {
      return [root, false];
    }
    
    // Replace the key node with the deepest node (if they are different)
    if (deepestRightMostNode !== keyNode) {
      keyNode.key = deepestRightMostNode.key;
      keyNode.val = deepestRightMostNode.val;
    }
    
    // Disconnect the deepest node from its parent
    if (parentDeepestRightMostNode.left === deepestRightMostNode) {
      parentDeepestRightMostNode.left = null;
    } else if (parentDeepestRightMostNode.right === deepestRightMostNode) {
      parentDeepestRightMostNode.right = null;
    }
    
    return [root, true];
  }
}