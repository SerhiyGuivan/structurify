import { BinarySearchTreeHelper, BSTComparator } from './binary-search-tree-helper';
import BTNode from './binary-tree-node';
import { BaseBinaryTree } from "./base-binary-tree";

export default class BinarySearchTree<T> extends BaseBinaryTree<T>{
  comparator: BSTComparator;
  constructor(comparator: BSTComparator) {
    super()
    this.comparator = comparator;
  }

  insert(key: number, val: T): void {
    this.root = BinarySearchTreeHelper.insert<T>(this.root, key, val, this.comparator);
    this.length++;
  }
  get(key: number): BTNode<T> | null {
    return BinarySearchTreeHelper.get<T>(this.root, key);
  }

}