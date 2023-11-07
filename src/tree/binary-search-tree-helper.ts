import BTNode from './binary-tree-node';

export type BSTComparator = (a: number, b: number) => number;

export class BinarySearchTreeHelper {
  static insert<T>(
    rootNode: BTNode<T> | null,
    key: number, val: T,
    comparator: BSTComparator = (a, b) => a - b
  ): BTNode<T> {
    const newNode = new BTNode(key, val);

    if (rootNode === null) {
      return newNode;
    }

    let currentNode = rootNode;

    while (true) {
      const comparisonResult = comparator(currentNode.key, newNode.key);

      if (comparisonResult === 0) {
        throw new Error('Duplicate key: Cannot insert a node with an existing key');
      }

      if (comparisonResult > 0) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          break;
        }
        currentNode = currentNode.left;
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          break;
        }
        currentNode = currentNode.right;
      }
    }

    return rootNode;
  }

  static get<T>(
    rootNode: BTNode<T> | null,
    key: number
  ): BTNode<T> | null {
    let currentNode = rootNode;

    while (currentNode !== null) {

      if (key === currentNode.key) {
        return currentNode;
      }

      if (key < currentNode.key) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return null;
  }
}