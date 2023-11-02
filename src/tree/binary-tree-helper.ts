import BTNode from './binary-tree-node';
import Queue from '../queue/queue';

export type TraversalFn<T> = (node: BTNode<T>) => BTNode<T> | T | number;
export type MatchFn<T> = (node: BTNode<T>) => boolean;

export class BinaryTreeHelper {
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
    const leftDepth = BinaryTreeHelper.maxDepth(targetNode.left); // Depth of the left subtree
    const rightDepth = BinaryTreeHelper.maxDepth(targetNode.right); // Depth of the right subtree

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
      if (rootNode.left) visited.push(...BinaryTreeHelper.dfsPreOrder(rootNode.left, fn));
      if (rootNode.right) visited.push(...BinaryTreeHelper.dfsPreOrder(rootNode.right, fn));
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
      if (rootNode.left) visited.push(...BinaryTreeHelper.dfsPostOrder(rootNode.left, fn));
      if (rootNode.right) visited.push(...BinaryTreeHelper.dfsPostOrder(rootNode.right, fn));

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
      if (rootNode.left) visited.push(...BinaryTreeHelper.dfsInOrder(rootNode.left, fn));

      // Process the current node's value using the callback function and add it to the visited array
      visited.push(fn(rootNode));

      // Recursively traverse the right subtree in an in-order manner
      if (rootNode.right) visited.push(...BinaryTreeHelper.dfsInOrder(rootNode.right, fn));
    }

    return visited;
  }

  /**
   *  Finds a node in the binary tree based on a custom match function, using either BFS or DFS.
   *  Time complexity: 0(n)
   */
  static findNode<T>(rootNode: BTNode<T> | null, matchFn: MatchFn<T>, type: 'dfs' | 'bfs' = 'dfs'): BTNode<T> | null {
    if (type === 'bfs') {
      return BinaryTreeHelper.findNodeBFS(rootNode, matchFn);
    }
    return BinaryTreeHelper.findNodeDFS(rootNode, matchFn)
  }

  /**
   * Finds a node in the binary tree based on a custom match function using Depth-First Search (DFS).
   * Time complexity: O(n)
   */
  static findNodeDFS<T>(rootNode: BTNode<T> | null, matchFn: MatchFn<T>): BTNode<T> | null {
    if (rootNode === null || matchFn(rootNode)) {
      return rootNode;
    }

    const leftNode = BinaryTreeHelper.findNodeDFS(rootNode.left, matchFn);
    const rightNode = BinaryTreeHelper.findNodeDFS(rootNode.right, matchFn);

    return leftNode || rightNode;
  }

  /**
   * Finds a node in the binary tree based on a custom match function using Breadth-First Search (BFS).
   * Time complexity: O(n)
   */
  static findNodeBFS<T>(rootNode: BTNode<T> | null, matchFn: MatchFn<T>): BTNode<T> | null {
    if (rootNode === null) {
      return null;
    }

    const queue: Queue<BTNode<T>> = new Queue();
    queue.enqueue(rootNode)

    while (queue.size > 0) {
      const currentNode = queue.dequeue();

      if (matchFn(currentNode)) {
        return currentNode;
      }

      if (currentNode.left) {
        queue.enqueue(currentNode.left);
      }

      if (currentNode.right) {
        queue.enqueue(currentNode.right);
      }
    }

    return null;
  }

  /**
   * Inserts a new node into the binary tree using level-order (BFS) traversal for insertion.
   * Time complexity: O(n)
   */
  static insert<T>(rootNode: BTNode<T> | null, key: number, val: T): BTNode<T> {
    const newNode = new BTNode(key, val);

    if (rootNode === null) {
      return newNode;
    }

    const queue: Queue<BTNode<T>> = new Queue();
    queue.enqueue(rootNode);

    while (queue.size) {
      const currentNode = queue.dequeue();

      if (currentNode.left === null) {
        currentNode.left = newNode;
        return rootNode;
      }
      queue.enqueue(currentNode.left);

      if (currentNode.right === null) {
        currentNode.right = newNode;
        return rootNode;
      }
      queue.enqueue(currentNode.right);
    }

    return rootNode;
  }

  /**
   * Deletes the node with the given key from the binary tree by replacing it with the bottom-most and rightmost node.
   * Time complexity: O(n)
   */
  static remove<T>(root: BTNode<T> | null, key: number): [BTNode<T> | null, boolean] {
    if (!root) {
      return [null, false]; // If the tree is empty, there's nothing to remove
    }

    // Check if the root is the only node and matches the key
    if (root.left === null && root.right === null && root.key === key) {
      return [null, true]; // If the root is the only node and matches the key, delete it
    }

    const queue: Queue<BTNode<T>> = new Queue();
    queue.enqueue(root);

    let keyNode: BTNode<T> | null = null; // Node to be removed
    let deepestNode: BTNode<T> | null = null; // Deepest node in the tree
    let parentOfDeepestNode: BTNode<T> | null = null; // Parent of the deepest node

    // Find the key node and the deepest node in the tree
    while (queue.size) {
      const currentNode = queue.dequeue();

      if (currentNode.left) {
        queue.enqueue(currentNode.left);
        parentOfDeepestNode = currentNode;
        deepestNode = currentNode.left;
      }

      if (currentNode.right) {
        queue.enqueue(currentNode.right);
        parentOfDeepestNode = currentNode;
        deepestNode = currentNode.right;
      }

      if (currentNode.key === key) {
        keyNode = currentNode;
      }
    }

    if (!keyNode) {
      return [root, false]; // If the key doesn't exist in the tree, there's nothing to remove
    }

    // Replace the key node with the deepest node (if they are different)
    if (deepestNode !== keyNode) {
      keyNode.key = deepestNode.key;
      keyNode.val = deepestNode.val;
    }

    // Disconnect the deepest node from its parent
    if (parentOfDeepestNode.left === deepestNode) {
      parentOfDeepestNode.left = null;
    } else if (parentOfDeepestNode.right === deepestNode) {
      parentOfDeepestNode.right = null;
    }

    return [root, true]; // Return the updated tree and a boolean indicating successful removal
  }
}