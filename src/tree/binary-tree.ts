import BTNode from './binary-tree-node';
import Queue from '../queue/queue';

type traversalCallback<T> = (val: T, key: number) => T;
export default class BinaryTree<T> {
  private root: BTNode<T> | null
  private length: number
  constructor() {
    this.root = null;
    this.length = 0;
  }
  get rootNode(): BTNode<T> | null {
    return this.root;
  }

  get size() {
    return this.length
  }

  get isEmpty(): boolean {
    return this.size === 0
  }

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
  static maxDepth<T>(node: BTNode<T> | null): number {

    if (node === null) {
      return 0; // Base case: If the node is null, return 0 (depth is 0)
    }

    // Recursively calculate the depth of the left and right subtrees
    const leftDepth = BinaryTree.maxDepth(node.left); // Depth of the left subtree
    const rightDepth = BinaryTree.maxDepth(node.right); // Depth of the right subtree

    // Return the maximum depth between the left and right subtrees plus 1 (for the current node)
    return Math.max(leftDepth, rightDepth) + 1;
  }

  /**
   * Performs a breadth-first traversal in a binary tree, applying a callback function to each node's value.
   * Time complexity: O(n)
   */
  static traversalBreadthFirst<T>(node: BTNode<T> | null, cb: traversalCallback<T>): T[] {
    const queue: Queue<BTNode<T>> = new Queue();
    const visited: T[] = [];

    // Check if the tree is empty; if so, return an empty visited array
    if (node === null) {
      return visited;
    }

    queue.enqueue(node);

    // Perform a breadth-first traversal in the tree
    while (queue.size) {
      const currentNode = queue.dequeue();

      if (currentNode) {
        // Process the current node's value using the callback function and add it to the visited array
        visited.push(cb(currentNode.val, node.key));

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
  static traversalDepthFirstPreOrder<T>(node: BTNode<T> | null, cb: traversalCallback<T>): T[] {
    const visited: T[] = [];

    if (node !== null) {
      // Process the current node's value using the callback function and add it to the visited array
      visited.push(cb(node.val, node.key));

      // Recursively traverse the left subtree, then the right subtree in a pre-order manner
      if (node.left) visited.push(...BinaryTree.traversalDepthFirstPreOrder(node.left, cb));
      if (node.right) visited.push(...BinaryTree.traversalDepthFirstPreOrder(node.right, cb));
    }

    return visited;
  }

  /**
   * Performs a depth-first post-order traversal in a binary tree, processing each node's value using a provided callback function.
   * Time complexity: O(n)
   */
  static traversalDepthFirstPostOrder<T>(node: BTNode<T> | null, cb: traversalCallback<T>): T[] {
    const visited: T[] = [];

    if (node !== null) {
      // Recursively traverse the left subtree, then the right subtree in a post-order manner
      if (node.left) visited.push(...BinaryTree.traversalDepthFirstPostOrder(node.left, cb));
      if (node.right) visited.push(...BinaryTree.traversalDepthFirstPostOrder(node.right, cb));

      // Process the current node's value using the callback function and add it to the visited array
      visited.push(cb(node.val, node.key));
    }

    return visited;
  }

  /**
   * Performs a depth-first in-order traversal in a binary tree, processing each node's value using a provided callback function.
   * Time complexity: O(n)
   */
  static traversalDepthFirstInOrder<T>(node: BTNode<T> | null, cb: traversalCallback<T>): T[] {
    const visited: T[] = [];

    if (node !== null) {
      // Recursively traverse the left subtree in an in-order manner
      if (node.left) visited.push(...BinaryTree.traversalDepthFirstInOrder(node.left, cb));

      // Process the current node's value using the callback function and add it to the visited array
      visited.push(cb(node.val, node.key));

      // Recursively traverse the right subtree in an in-order manner
      if (node.right) visited.push(...BinaryTree.traversalDepthFirstInOrder(node.right, cb));
    }

    return visited;
  }

  /**
   * Invokes the static get depth method on the binary tree starting from the root node..
   * Time complexity: O(n)
   */
  maxDepth(): number {
    return BinaryTree.maxDepth(this.root);
  }

  /**
   * Invokes the static breadth-first traversal method on the binary tree starting from the root node.
   */
  traversalBreadthFirst<N>(cb: traversalCallback<T>): T[] {
    return BinaryTree.traversalBreadthFirst(this.root, cb);
  }

  /**
   * Invokes the static depth-first pre-order traversal method on the binary tree starting from the root node.
   */
  traversalDepthFirstPreOrder<N>(cb: traversalCallback<T>): T[] {
    return BinaryTree.traversalDepthFirstPreOrder(this.root, cb)
  }

  /**
   * Invokes the static depth-first post-order traversal method on the binary tree starting from the root node.
   */
  traversalDepthFirstPostOrder<N>(cb: traversalCallback<T>): T[] {
    return BinaryTree.traversalDepthFirstPostOrder(this.root, cb)
  }

  /**
   * Invokes the static depth-first in-order traversal method on the binary tree starting from the root node.
   */
  traversalDepthFirstInOrder<N>(cb: traversalCallback<T>): T[] {
    return BinaryTree.traversalDepthFirstInOrder(this.root, cb)
  }

  /**
   * Inserts a new node into the binary tree using level-order (BFS) traversal for insertion.
   * If the tree is empty, the new node becomes the root.
   * Otherwise, it traverses the tree level by level, finding the first available position to insert the new node.
   * Time complexity: O(n)
   */
  insert(key: number, val: T): void {

    const node = new BTNode(key, val);

    // If the tree is empty, make the new node the root
    if (!this.root) {
      this.root = node;
      this.length = 1;
      return;
    }

    const queue: Queue<BTNode<T>> = new Queue();

    queue.enqueue(this.root);

    // Traverse the tree in level-order (BFS) to find the insertion point
    while (queue.size) {
      const current = queue.dequeue();

      // Check and insert the new node as the left child if the current node's left child is null
      if (current.left === null) {
        current.left = node;
        this.length++;
        break;
      }
      // Check and insert the new node as the right child if the left child is not null and the right child is null
      else if (current.right === null) {
        current.right = node;
        this.length++;
        break;
      }

      // If both children are occupied, enqueue the children for further traversal
      queue.enqueue(current.left)
      queue.enqueue(current.right);
    }
  }

  /**
   * Deletes the node with the given key from the binary tree by replacing it with the bottom-most and rightmost node.
   * Time complexity: O(n)
   */
  delete(key: number): void {
    if (!this.root) {
      return;
    }

    if (this.root.key === key && this.root.left === null && this.root.right === null) {
      this.root = null;
      this.length--;
      return;
    }

    let keyNode: BTNode<T> | null = null;
    let deepestNode: BTNode<T> | null = null;
    let deepestNodeParent: BTNode<T> | null = null; // To track the parent of the deepest node
    let temp: BTNode<T> | null = null;

    const queue = new Queue<BTNode<T>>();
    queue.enqueue(this.root)

    // Traverse the tree to find the node to be deleted and identify the deepest node for replacement
    while (queue.size > 0) {
      temp = queue.dequeue();

      // Check if the current node's key matches the key to be deleted
      if (temp.key === key) {
        keyNode = temp; // Store the node to be deleted
      }

      if (temp.left) {
        queue.enqueue(temp.left);

        if (temp.left.left === null && temp.left.right === null) {
          deepestNode = temp.left; // Identify the deepest node for replacement
          deepestNodeParent = temp;
        }
      }

      if (temp.right) {
        queue.enqueue(temp.right);

        if (temp.right.left === null && temp.right.right === null) {
          deepestNode = temp.right; // Identify the deepest node for replacement
          deepestNodeParent = temp;
        }
      }
    }

    if (!keyNode) {
      return; // Node with the given key not found
    }

    if (deepestNode) {
      // Replace keyNode with deepestNode
      keyNode.key = deepestNode.key;
      keyNode.val = deepestNode.val;

      // Remove the deepest node
      if (deepestNodeParent) {
        if (deepestNodeParent.left === deepestNode) {
          deepestNodeParent.left = null;
        } else if (deepestNodeParent.right === deepestNode) {
          deepestNodeParent.right = null;
        }
      }
    }

    this.length--; // Decrement the size after deletion
  }

  /**
   * Empties the binary tree by removing all nodes and resetting the size to zero.
   * Time complexity: O(1)
   */
  clear(): void {
    this.root = null;
    this.length = 0;
  }
}