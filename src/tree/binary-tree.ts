import { BaseBinaryTree } from './base-binary-tree';
import { BinaryTreeHelper, MatchFn } from './binary-tree-helper';
import BTNode from './binary-tree-node';

export default class BinaryTree<T> extends BaseBinaryTree<T>{
  constructor() {
    super();
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
   * Finds a node in the binary tree using a matching function and search type.
   * Time complexity: O(n)
   */
  find(fn: MatchFn<T>, type: 'dfs' | 'bfs' = 'dfs'): BTNode<T> | null {
    return BinaryTreeHelper.find<T>(this.rootNode, fn, type);
  }

  /**
   * Deletes the node with the given key from the binary tree by replacing it with the bottom-most and rightmost node.
   * Time complexity: O(n)
   */
  remove(key: number): void {
    this.root = BinaryTreeHelper.remove<T>(this.root, key);
    this.length--;
  }
}