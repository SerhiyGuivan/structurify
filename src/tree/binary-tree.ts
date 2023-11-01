import { BinaryTreeHelper, TraversalFn, MatchFn } from './binary-tree-helper';
import BTNode from './binary-tree-node';
import Queue from '../queue/queue';

export default class BinaryTree<T> {
  protected root: BTNode<T> | null
  protected length: number
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
   * Invokes the static max depth method on the binary tree starting from the root node
   * Time complexity: O(n)
   */
  maxDepth(): number {
    return BinaryTreeHelper.maxDepth(this.root);
  }

  /**
   * Invokes the static breadth-first traversal method on the binary tree starting from the root node.
   * Time complexity: O(n)
   */
  bfs(fn: TraversalFn<T>): ReturnType<TraversalFn<T>>[] {
    return BinaryTreeHelper.bfs<T>(this.root, fn);
  }

  /**
   * Invokes the static depth-first pre-order traversal method on the binary tree starting from the root node.
   * Time complexity: O(n)
   */
  dfsPreOrder(fn: TraversalFn<T>): ReturnType<TraversalFn<T>>[] {
    return BinaryTreeHelper.dfsPreOrder<T>(this.root, fn)
  }

  /**
   * Invokes the static depth-first post-order traversal method on the binary tree starting from the root node.
   * Time complexity: O(n)
   */
  dfsPostOrder(fn: TraversalFn<T>): ReturnType<TraversalFn<T>>[] {
    return BinaryTreeHelper.dfsPostOrder<T>(this.root, fn)
  }

  /**
   * Invokes the static depth-first in-order traversal method on the binary tree starting from the root node.
   * Time complexity: O(n)
   */
  dfsInOrder(fn: TraversalFn<T>): ReturnType<TraversalFn<T>>[] {
    return BinaryTreeHelper.dfsInOrder<T>(this.root, fn)
  }

  /**
   * Invokes the static findNode method on the binary tree starting from the root node.
   * Time complexity: O(n)
   */
  findNode(fn: MatchFn<T>, type: 'dfs' | 'bfs' = 'dfs'): BTNode<T> {
    return BinaryTreeHelper.findNode<T>(this.rootNode, fn, type)
  }

  /**
   * Inserts a new node into the binary tree using level-order (BFS) traversal for insertion.
   * Time complexity: O(n)
   */
  insert(key: number, val: T): void {
    this.root = BinaryTreeHelper.insert<T>(this.root, key, val)
    this.length++;
  }

  /**
   * Deletes the node with the given key from the binary tree by replacing it with the bottom-most and rightmost node.
   * Time complexity: O(n)
   */
  remove(key: number): void {
    const [root, success] = BinaryTreeHelper.remove<T>(this.root, key);
    if (success) {
      this.root = root;
      this.length--;
    }
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