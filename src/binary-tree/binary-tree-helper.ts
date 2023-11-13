import BTNode from './binary-tree-node';
import Queue from '../queue/queue';

export type MatchFn<T> = (node: BTNode<T>) => boolean;

export class BinaryTreeHelper {
  /**
   *  Finds a node in the binary tree based on a custom match function, using either BFS or DFS.
   *  Time complexity: 0(n)
   */
  static find<T>(rootNode: BTNode<T> | null, matchFn: MatchFn<T>, type: 'dfs' | 'bfs' = 'dfs'): BTNode<T> | null {
    if (type === 'bfs') {
      return BinaryTreeHelper.findBFS<T>(rootNode, matchFn);
    }
    return BinaryTreeHelper.findDFS<T>(rootNode, matchFn)
  }

  /**
   * Finds a node in the binary tree based on a custom match function using Depth-First Search (DFS).
   * Time complexity: O(n)
   */
  static findDFS<T>(rootNode: BTNode<T> | null, matchFn: MatchFn<T>): BTNode<T> | null {
    if (rootNode === null || matchFn(rootNode)) {
      return rootNode;
    }

    const leftNode = BinaryTreeHelper.findDFS<T>(rootNode.left, matchFn);
    const rightNode = BinaryTreeHelper.findDFS<T>(rootNode.right, matchFn);

    return leftNode || rightNode;
  }

  /**
   * Finds a node in the binary tree based on a custom match function using Breadth-First Search (BFS).
   * Time complexity: O(n)
   */
  static findBFS<T>(rootNode: BTNode<T> | null, matchFn: MatchFn<T>): BTNode<T> | null {
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
  static remove<T>(root: BTNode<T> | null, key: number): BTNode<T> | null {
    if (!root) {
      throw new Error('Tree is empty: Cannot remove from an empty tree') // If the tree is empty, there's nothing to remove
    }

    // Check if the root is the only node and matches the key
    if (root.left === null && root.right === null && root.key === key) {
      return null; // If the root is the only node and matches the key, delete it
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
      // If the key doesn't exist in the tree, there's nothing to remove
      throw new Error(`Node with key ${key} not found. Cannot remove node with key ${key}.`)
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

    // Return the updated tree
    return root;
  }
}