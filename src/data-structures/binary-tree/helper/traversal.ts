import { BTNode } from '../node/node';
import {Key, MatchFn, TraversalFn} from '@/types/binary-tree';
import Queue from '../../queue/queue';
import { TraversalOrder } from "@/enums/binary-tree";

/**
 * Helper class for binary tree traversal operations.
 */
export class TraversalHelper {
  /**
   * Map of traversal orders to their respective iterator functions.
   */
  private static iteratorMap = {
    [TraversalOrder.PreOrder]: TraversalHelper.preOrderIterator,
    [TraversalOrder.InOrder]: TraversalHelper.inOrderIterator,
    [TraversalOrder.PostOrder]: TraversalHelper.postOrderIterator,
    [TraversalOrder.LevelOrder]: TraversalHelper.levelOrderIterator
  }
  
  /**
   * Gets an iterator for traversing the binary tree based on the specified order.
   * @template K - The type of the key (number or string).
   * @template V - The type of the value stored in the node.
   * @param {BTNode<K, V> | null} root - The root node of the binary tree.
   * @param {TraversalOrder} [order=TraversalOrder.InOrder] - The order in which nodes should be traversed
   * (default: InOrder).
   * @returns {Generator<BTNode<K, V>, void, void>} The iterator for the specified traversal order.
   *
   * @timecomplexity O(n), where n is the number of nodes in the binary tree.
   * @spacecomplexity
   * - O(h) for depth-first traversals, where h is the height of the binary tree.
   * - O(w) for breadth-first traversal, where w is the maximum width of the binary tree.
   * @description
   * This method returns a generator function that iterates through the binary tree nodes based on the specified order.
   */
  static getIterator<K extends Key, V>(
    root: BTNode<K, V> | null,
    order: TraversalOrder = TraversalOrder.InOrder
  ): Generator<BTNode<K, V>, void, void> {
    return TraversalHelper.iteratorMap[order](root)
  }
  
  /**
   * Executes a provided function once for each node in the binary tree, in a specified order.
   * @template K - The type of the key (number or string).
   * @template V - The type of the value stored in the node.
   * @param {BTNode<K, V> | null} root - The root node of the binary tree.
   * @param {TraversalFn<K, V>} traversalFn - The function to be executed for each node.
   * @param {TraversalOrder} [order=TraversalOrder.InOrder] - The order in which nodes should be traversed
   * (default: InOrder).
   *
   * @timecomplexity O(n), where n is the number of nodes in the binary tree.
   * @spacecomplexity
   * - O(h) for depth-first traversals, where h is the height of the binary tree.
   * - O(w) for breadth-first traversal, where w is the maximum width of the binary tree.
   * @description
   * This method uses a generator function to iterate through the binary tree nodes based on the specified order.
   * It then applies the provided function to each node's value, key, and the entire node object.
   */
  static forEach<K extends Key, V>(root: BTNode<K, V> | null, traversalFn: TraversalFn<K, V>, order?: TraversalOrder): void {
    // @ts-ignore
    for (const n of TraversalHelper.getIterator(root, order)) {
      traversalFn(n.val, n.key, n);
    }
  }
  
  /**
   * Finds the first node in the binary tree that matches a specified condition, in a specified order.
   * @template K - The type of the key (number or string).
   * @template V - The type of the value stored in the node.
   * @param {BTNode<K, V> | null} root - The root node of the binary tree.
   * @param {MatchFn<K, V>} matchFn - The condition for matching a node.
   * @param {TraversalOrder} [order=TraversalOrder.InOrder] - The order in which nodes should be traversed
   * (default: InOrder).
   * @returns {BTNode<K, V> | null} The first matching node, or null if no match is found.
   *
   * @timecomplexity O(n), where n is the number of nodes in the binary tree.
   * @spacecomplexity
   * - O(h) for depth-first traversals, where h is the height of the binary tree.
   * - O(w) for breadth-first traversal, where w is the maximum width of the binary tree.
   */
  static findNode<K extends Key, V>(root: BTNode<K, V> | null, matchFn: MatchFn<K, V>, order?: TraversalOrder): BTNode<K, V> | null {
    // @ts-ignore
    for (const n of TraversalHelper.getIterator(root, order)) {
      if (matchFn(n.val, n.key, n)) {
        return n;
      }
    }
    return null;
  }
  
  /**
   * Finds the value of the first node in the binary tree that matches a specified condition, in a specified order.
   * @template K - The type of the key (number or string).
   * @template V - The type of the value stored in the node.
   * @param {BTNode<K, V> | null} root - The root node of the binary tree.
   * @param {MatchFn<K, V>} matchFn - The condition for matching a node.
   * @param {TraversalOrder} [order=TraversalOrder.InOrder] - The order in which nodes should be traversed
   * (default: InOrder).
   * @returns {V | undefined} The value of the first matching node, or undefined if no match is found.
   *
   * @timecomplexity O(n), where n is the number of nodes in the binary tree.
   * @spacecomplexity
   * - O(h) for depth-first traversals, where h is the height of the binary tree.
   * - O(w) for breadth-first traversal, where w is the maximum width of the binary tree.
   */
  static findValue<K extends Key, V>(root: BTNode<K, V> | null, matchFn: MatchFn<K, V>, order?: TraversalOrder ): V | undefined {
    // @ts-ignore
    for (const n of TraversalHelper.getIterator(root, order)) {
      if (matchFn(n.val, n.key, n)) {
        return n.val;
      }
    }
    return undefined;
  }
  
  /**
   * Checks if at least one node in the binary tree satisfies a specified condition, in a specified order.
   * @template K - The type of the key (number or string).
   * @template V - The type of the value stored in the node.
   * @param {BTNode<K, V> | null} root - The root node of the binary tree.
   * @param {MatchFn<K, V>} matchFn - The condition for matching a node.
   * @param {TraversalOrder} [order=TraversalOrder.InOrder] - The order in which nodes should be traversed
   * (default: InOrder).
   * @returns {boolean} True if at least one node matches the condition, false otherwise.
   *
   * @timecomplexity O(n), where n is the number of nodes in the binary tree.
   * @spacecomplexity
   * - O(h) for depth-first traversals, where h is the height of the binary tree.
   * - O(w) for breadth-first traversal, where w is the maximum width of the binary tree.
   */
  static some<K extends Key, V>(root: BTNode<K, V> | null, matchFn: MatchFn<K, V>, order?: TraversalOrder): boolean {
    // @ts-ignore
    for (const n of TraversalHelper.getIterator(root, order)) {
      if (matchFn(n.val, n.key, n)) {
        return true;
      }
    }
    return false;
  }
  
  /**
   * Checks if every node in the binary tree satisfies a specified condition, in a specified order.
   * @template K - The type of the key (number or string).
   * @template V - The type of the value stored in the node.
   * @param {BTNode<K, V> | null} root - The root node of the binary tree.
   * @param {MatchFn<K, V>} matchFn - The condition for matching a node.
   * @param {TraversalOrder} [order=TraversalOrder.InOrder] - The order in which nodes should be traversed
   * (default: InOrder).
   * @returns {boolean} True if every node matches the condition, false otherwise.
   *
   * @timecomplexity O(n), where n is the number of nodes in the binary tree.
   * @spacecomplexity
   * - O(h) for depth-first traversals, where h is the height of the binary tree.
   * - O(w) for breadth-first traversal, where w is the maximum width of the binary tree.
   */
  static every<K extends Key, V>(root: BTNode<K, V> | null, matchFn: MatchFn<K, V>, order?: TraversalOrder): boolean {
    // @ts-ignore
    for (const n of TraversalHelper.getIterator(root, order)) {
      if (!matchFn(n.val, n.key, n)) {
        return false;
      }
    }
    return true;
  }
  
  /**
   * Generates an iterator for traversing the binary tree in level order.
   * @template K - The type of the key (number or string).
   * @template V - The type of the value stored in the node.
   * @param {BTNode<K, V> | null} root - The root node of the binary tree.
   * @returns {Generator<BTNode<K, V>, void, void>} The iterator for level order traversal.
   *
   * @timecomplexity O(N), where N is the number of nodes in the binary tree.
   * @spacecomplexity O(W), where W is the maximum width of the binary tree.
   */
  private static *levelOrderIterator<K extends Key, V>(root: BTNode<K, V> | null): Generator<BTNode<K, V>, void, void> {
    const queue: Queue<BTNode<K, V>> = new Queue();
    if (root !== null) {
      queue.enqueue(root);
    }
    while (queue.size) {
      const currentNode = queue.dequeue();
      yield currentNode;
      if (currentNode.left !== null) {
        queue.enqueue(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.enqueue(currentNode.right);
      }
    }
  }
  
  /**
   * Generates an iterator for traversing the binary tree in pre-order.
   * @template K - The type of the key (number or string).
   * @template V - The type of the value stored in the node.
   * @param {BTNode<K, V> | null} root - The root node of the binary tree.
   * @returns {Generator<BTNode<K, V>, void, void>} The iterator for pre-order traversal.
   *
   * @timecomplexity O(n), where n is the number of nodes in the binary tree.
   * @spacecomplexity O(w), where w is the maximum width of the binary tree.
   */
  private static *preOrderIterator<K extends Key, V>(root: BTNode<K, V> | null): Generator<BTNode<K, V>, void, void> {
    if (root !== null) {
      yield root;
      // @ts-ignore
      yield* TraversalHelper.preOrderIterator(root.left);
      // @ts-ignore
      yield* TraversalHelper.preOrderIterator(root.right);
    }
  }
  
  /**
   * Generates an iterator for traversing the binary tree in in-order.
   * @template K - The type of the key (number or string).
   * @template V - The type of the value stored in the node.
   * @param {BTNode<K, V> | null} root - The root node of the binary tree.
   * @returns {Generator<BTNode<K, V>, void, void>} The iterator for in-order traversal.
   *
   * @timecomplexity O(n), where n is the number of nodes in the binary tree.
   * @spacecomplexity O(h), where h is the height of the binary tree.
   */
  private static *inOrderIterator<K extends Key, V>(root: BTNode<K, V> | null): Generator<BTNode<K, V>, void, void> {
    if (root !== null) {
      // @ts-ignore
      yield* TraversalHelper.inOrderIterator(root.left);
      yield root;
      // @ts-ignore
      yield* TraversalHelper.inOrderIterator(root.right);
    }
  }
  
  /**
   * Generates an iterator for traversing the binary tree in post-order.
   * @template K - The type of the key (number or string).
   * @template V - The type of the value stored in the node.
   * @param {BTNode<K, V> | null} root - The root node of the binary tree.
   * @returns {Generator<BTNode<K, V>, void, void>} The iterator for post-order traversal.
   *
   * @timecomplexity O(n), where n is the number of nodes in the binary tree.
   * @spacecomplexity O(h), where h is the height of the binary tree.
   */
  private static *postOrderIterator<K extends Key, V>(root: BTNode<K, V> | null): Generator<BTNode<K, V>, void, void> {
    if (root !== null) {
      // @ts-ignore
      yield* TraversalHelper.postOrderIterator(root.left);
      // @ts-ignore
      yield* TraversalHelper.postOrderIterator(root.right);
      yield root;
    }
  }
}