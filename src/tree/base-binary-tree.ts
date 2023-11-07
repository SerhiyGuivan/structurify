import { BaseBinaryTreeHelper, TraversalFn } from './base-binary-tree-helper';
import BTNode from './binary-tree-node';

export abstract class BaseBinaryTree<T> {
  protected root: BTNode<T> | null
  protected length: number
  protected constructor() {
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
    return BaseBinaryTreeHelper.maxDepth(this.root);
  }

  /**
   * Invokes the static breadth-first traversal method on the binary tree starting from the root node.
   * Time complexity: O(n)
   */
  bfs(fn: TraversalFn<T>): ReturnType<TraversalFn<T>>[] {
    return BaseBinaryTreeHelper.bfs<T>(this.root, fn);
  }

  /**
   * Invokes the static depth-first pre-order traversal method on the binary tree starting from the root node.
   * Time complexity: O(n)
   */
  dfsPreOrder(fn: TraversalFn<T>): ReturnType<TraversalFn<T>>[] {
    return BaseBinaryTreeHelper.dfsPreOrder<T>(this.root, fn)
  }

  /**
   * Invokes the static depth-first post-order traversal method on the binary tree starting from the root node.
   * Time complexity: O(n)
   */
  dfsPostOrder(fn: TraversalFn<T>): ReturnType<TraversalFn<T>>[] {
    return BaseBinaryTreeHelper.dfsPostOrder<T>(this.root, fn)
  }

  /**
   * Invokes the static depth-first in-order traversal method on the binary tree starting from the root node.
   * Time complexity: O(n)
   */
  dfsInOrder(fn: TraversalFn<T>): ReturnType<TraversalFn<T>>[] {
    return BaseBinaryTreeHelper.dfsInOrder<T>(this.root, fn)
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