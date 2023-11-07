import BTNode from './binary-tree-node';
import Queue from '../queue/queue';

export type TraversalFn<T> = (node: BTNode<T>) => BTNode<T> | T | number;

export class BaseBinaryTreeHelper {
  /**
   * Calculates the maximum number of nodes for a binary tree given its height.
   * Time complexity: O(1)
   */
  static maxNodesAtDepth(depth: number): number {
    if (depth <= 0 || !Number.isInteger(depth)) {
      throw new Error('Number of levels must be Integer and greater than 0');
    }
    return Math.pow(2, depth) - 1;
  }

  /**
   * Calculates the minimum height of a binary tree required to accommodate a specific number of nodes.
   * Time complexity: O(1)
   */
  static minDepthAtNodesSize(size: number): number {
    if (size <= 0 || !Number.isInteger(size)) {
      throw new Error('Number of nodes must be Integer and greater than 0');
    }
    return Math.floor(Math.log2(size + 1));
  }

  /**
   * Calculates the minimum height required for a binary tree with a given number of leaves.
   * Time complexity: O(1)
   */
  static minDepthAtLeavesSize(leaves: number): number {
    if (leaves <= 0 || !Number.isInteger(leaves)) {
      throw new Error('Number of leaves must be Integer and greater than 0');
    }

    return Math.floor(Math.log2(leaves)) + 1;
  }

  /**
   * Calculates the maximum depth of a binary tree using a depth-first approach.
   * Time complexity: O(n)
   */
  static maxDepth<T>(targetNode: BTNode<T> | null): number {
    if (targetNode === null) {
      return 0; // Base case: If the node is null, return 0 (depth is 0)
    }

    // Recursively calculate the depth of the left and right subtrees
    const leftDepth = BaseBinaryTreeHelper.maxDepth(targetNode.left); // Depth of the left subtree
    const rightDepth = BaseBinaryTreeHelper.maxDepth(targetNode.right); // Depth of the right subtree

    // Return the maximum depth between the left and right subtrees plus 1 (for the current node)
    return Math.max(leftDepth, rightDepth) + 1;
  }

  /**
   * Performs a breadth-first traversal in a binary tree, applying a callback function to each node's value.
   * Time complexity: O(n)
   */
  static bfs<T>(
    targetNode: BTNode<T> | null,
    fn: TraversalFn<T> = (node) => node.val
  ): ReturnType<TraversalFn<T>>[] {
    const queue: Queue<BTNode<T>> = new Queue();
    const visited: ReturnType<TraversalFn<T>>[] = [];

    // Check if the tree is empty; if so, return an empty visited array
    if (targetNode === null) {
      return visited;
    }

    queue.enqueue(targetNode);

    // Perform a breadth-first traversal in the tree
    while (queue.size) {
      const currentNode = queue.dequeue();

      if (currentNode) {
        // Process the current node's value using the callback function and add it to the visited array
        visited.push(fn(currentNode));

        // Enqueue the left child if it exists for further traversal
        if (currentNode.left !== null) {
          queue.enqueue(currentNode.left);
        }

        // Enqueue the right child if it exists for further traversal
        if (currentNode.right !== null) {
          queue.enqueue(currentNode.right);
        }
      }
    }

    return visited;
  }

  /**
   * Performs a depth-first pre-order traversal in a binary tree, processing each node's value using a provided callback function.
   * Time complexity: O(n)
   */
  static dfsPreOrder<T>(
    rootNode: BTNode<T> | null,
    fn: TraversalFn<T> = (node) => node.val
  ): ReturnType<TraversalFn<T>>[] {
    const visited: ReturnType<TraversalFn<T>>[] = [];

    if (rootNode !== null) {
      // Process the current node's value using the callback function and add it to the visited array
      visited.push(fn(rootNode));

      // Recursively traverse the left subtree, then the right subtree in a pre-order manner
      if (rootNode.left) visited.push(...BaseBinaryTreeHelper.dfsPreOrder(rootNode.left, fn));
      if (rootNode.right) visited.push(...BaseBinaryTreeHelper.dfsPreOrder(rootNode.right, fn));
    }

    return visited;
  }

  /**
   * Performs a depth-first post-order traversal in a binary tree, processing each node's value using a provided callback function.
   * Time complexity: O(n)
   */
  static dfsPostOrder<T>(
    rootNode: BTNode<T> | null,
    fn: TraversalFn<T> = (node) => node.val
  ): ReturnType<TraversalFn<T>>[] {
    const visited: ReturnType<TraversalFn<T>>[] = [];

    if (rootNode !== null) {
      // Recursively traverse the left subtree, then the right subtree in a post-order manner
      if (rootNode.left) visited.push(...BaseBinaryTreeHelper.dfsPostOrder(rootNode.left, fn));
      if (rootNode.right) visited.push(...BaseBinaryTreeHelper.dfsPostOrder(rootNode.right, fn));

      // Process the current node's value using the callback function and add it to the visited array
      visited.push(fn(rootNode));
    }

    return visited;
  }

  /**
   * Performs a depth-first in-order traversal in a binary tree, processing each node's value using a provided callback function.
   * Time complexity: O(n)
   */
  static dfsInOrder<T>(
    rootNode: BTNode<T> | null,
    fn: TraversalFn<T> = (node) => node.val
  ): ReturnType<TraversalFn<T>>[] {
    const visited: ReturnType<TraversalFn<T>>[] = [];

    if (rootNode !== null) {
      // Recursively traverse the left subtree in an in-order manner
      if (rootNode.left) visited.push(...BaseBinaryTreeHelper.dfsInOrder(rootNode.left, fn));

      // Process the current node's value using the callback function and add it to the visited array
      visited.push(fn(rootNode));

      // Recursively traverse the right subtree in an in-order manner
      if (rootNode.right) visited.push(...BaseBinaryTreeHelper.dfsInOrder(rootNode.right, fn));
    }

    return visited;
  }
}