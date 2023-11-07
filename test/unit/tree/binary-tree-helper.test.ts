import { BinaryTreeHelper } from '../../../src/tree/binary-tree-helper';
import BTNode from '../../../src/tree/binary-tree-node';

describe('BinaryTreeHelper', () => {
  describe('find | findBFS | findDFS static method', () => {
    const matchFn = (node: BTNode<number>) => node.key === 5;
    const notFoundMatchFn = (node: BTNode<number>) => node.key === 10

    const root = new BTNode(1, 100);
    root.left = new BTNode(2, 200);
    root.right = new BTNode(3, 300);
    root.left.left = new BTNode(4, 400);
    root.left.right = new BTNode(5, 500);
    root.right.left = new BTNode(6, 600);
    root.right.right = new BTNode(7, 700);

    it('Find Node using BFS via find Method', () => {
      const result = BinaryTreeHelper.find(root, matchFn, 'bfs');
      expect(result?.val).toBe(500);

      const notFound = BinaryTreeHelper.find(root, notFoundMatchFn);
      expect(notFound).toBe(null);
    });

    it('Find Node using BFS via findBFS Method', () => {
      const result = BinaryTreeHelper.findBFS(root, matchFn);
      expect(result?.key).toBe(5);

      const notFound = BinaryTreeHelper.findBFS(root, notFoundMatchFn);
      expect(notFound).toBe(null);
    });

    it('Find Node using DFS via findDFS Method', () => {
      const result = BinaryTreeHelper.findDFS(root, matchFn);
      expect(result?.key).toBe(5);

      const notFound = BinaryTreeHelper.findDFS(root, notFoundMatchFn);
      expect(notFound).toBe(null);
    });
  });

  describe('remove static method', () => {
    it('should remove a node from the binary tree', () => {

      const root = new BTNode(1, 10);
      root.left = new BTNode(2, 20);
      root.right = new BTNode(3, 30);
      root.left.left = new BTNode(4, 40);
      root.left.right = new BTNode(5, 50);
      root.right.left = new BTNode(6, 60);
      root.right.right = new BTNode(7, 70);

      let resultRoot = BinaryTreeHelper.remove(root, 3);

      //      10       |      10
      //     /  \      |     /  \
      //    20  30     |    20  70
      //   / \  / \    |   / \  /
      //  40 50 60 70  |  40 50 60

      expect(resultRoot?.key).toBe(1);
      expect(resultRoot?.val).toBe(10);

      expect(resultRoot?.left?.key).toBe(2);
      expect(resultRoot?.left?.val).toBe(20);
      expect(resultRoot?.right?.key).toBe(7);
      expect(resultRoot?.right?.val).toBe(70);

      expect(resultRoot?.left?.left?.key).toBe(4);
      expect(resultRoot?.left?.left?.val).toBe(40);
      expect(resultRoot?.left?.right?.key).toBe(5);
      expect(resultRoot?.left?.right?.val).toBe(50);
      expect(resultRoot?.right?.left?.key).toBe(6);
      expect(resultRoot?.right?.left?.val).toBe(60);
      expect(resultRoot?.right?.right).toBe(null);

      resultRoot = BinaryTreeHelper.remove(root, 6);

      //      10       |      10
      //     /  \      |     /  \
      //    20  30     |    20  70
      //   / \  /      |   / \
      //  40 50 60     |  40 50

      expect(resultRoot?.key).toBe(1);
      expect(resultRoot?.val).toBe(10);

      expect(resultRoot?.left?.key).toBe(2);
      expect(resultRoot?.left?.val).toBe(20);
      expect(resultRoot?.right?.key).toBe(7);
      expect(resultRoot?.right?.val).toBe(70);

      expect(resultRoot?.left?.left?.key).toBe(4);
      expect(resultRoot?.left?.left?.val).toBe(40);
      expect(resultRoot?.left?.right?.key).toBe(5);
      expect(resultRoot?.left?.right?.val).toBe(50);
      expect(resultRoot?.right?.left).toBe(null);
      expect(resultRoot?.right?.right).toBe(null);

      resultRoot = BinaryTreeHelper.remove(root, 7);

      //      10       |      10
      //     /  \      |     /  \
      //    20  70     |    20  50
      //   / \         |   /
      //  40 50        |  40

      expect(resultRoot?.key).toBe(1);
      expect(resultRoot?.val).toBe(10);

      expect(resultRoot?.left?.key).toBe(2);
      expect(resultRoot?.left?.val).toBe(20);
      expect(resultRoot?.right?.key).toBe(5);
      expect(resultRoot?.right?.val).toBe(50);

      expect(resultRoot?.left?.left?.key).toBe(4);
      expect(resultRoot?.left?.left?.val).toBe(40);
      expect(resultRoot?.left?.right).toBe(null);
      expect(resultRoot?.right?.left).toBe(null);
      expect(resultRoot?.right?.right).toBe(null);

      resultRoot = BinaryTreeHelper.remove(root, 2);

      //      10       |      10
      //     /  \      |     /  \
      //    20  50     |    40  50
      //   /           |
      //  40           |

      expect(resultRoot?.key).toBe(1);
      expect(resultRoot?.val).toBe(10);

      expect(resultRoot?.left?.key).toBe(4);
      expect(resultRoot?.left?.val).toBe(40);
      expect(resultRoot?.right?.key).toBe(5);
      expect(resultRoot?.right?.val).toBe(50);

      expect(resultRoot?.left?.left).toBe(null);
      expect(resultRoot?.left?.right).toBe(null);
      expect(resultRoot?.right?.left).toBe(null);
      expect(resultRoot?.right?.right).toBe(null)

      resultRoot = BinaryTreeHelper.remove(root, 4);

      //      10       |      10
      //     /  \      |     /
      //    40  50     |    50

      expect(resultRoot?.key).toBe(1);
      expect(resultRoot?.val).toBe(10);

      expect(resultRoot?.left?.key).toBe(5);
      expect(resultRoot?.left?.val).toBe(50);
      expect(resultRoot?.right).toBe(null);

      expect(resultRoot?.left?.left).toBe(null);
      expect(resultRoot?.left?.right).toBe(null);

      resultRoot = BinaryTreeHelper.remove(root, 1);

      //      10       |      50
      //     /         |
      //    50         |

      expect(resultRoot?.key).toBe(5);
      expect(resultRoot?.val).toBe(50);

      expect(resultRoot?.left).toBe(null);
      expect(resultRoot?.right).toBe(null);

      resultRoot = BinaryTreeHelper.remove(root, 5);

      //      50       |      0

      expect(resultRoot).toBe(null);
    });

    it('removing from an empty tree throws an error', () => {
      expect(() => {
        BinaryTreeHelper.remove(null, 1); // Trying to insert a node with the same key
      }).toThrow('Tree is empty: Cannot remove from an empty tree');
    });

    it('removing from an binary tree when key is not found throws an error', () => {
      const root = new BTNode(1, 100);
      root.left = new BTNode(2, 200);
      root.right = new BTNode(3, 300);

      expect(() => {
        BinaryTreeHelper.remove(root, 5)
      }).toThrow('Node with key 5 not found. Cannot remove node with key 5.')
    });

  });
  describe('insert static method', () => {
    it('should insert a node correctly into an empty tree', () => {
      const root = null;

      const result = BinaryTreeHelper.insert(root, 1, 10)

      expect(result?.key).toBe(1);
      expect(result?.val).toBe(10);
    });

    it('should insert nodes correctly into a non-empty tree', () => {
      let root= new BTNode(1, 100);
      root.left = new BTNode(2, 200);
      root.right = new BTNode(3, 300);

      root = BinaryTreeHelper.insert<number>(root, 4, 400);
      root = BinaryTreeHelper.insert<number>(root, 5, 500);
      root = BinaryTreeHelper.insert<number>(root, 6, 600);
      root = BinaryTreeHelper.insert<number>(root, 7, 700);
      root = BinaryTreeHelper.insert<number>(root, 8, 800);

      expect(root?.left?.left?.key).toBe(4);
      expect(root?.left?.left?.val).toBe(400);
      expect(root?.left?.right?.key).toBe(5);
      expect(root?.left?.right?.val).toBe(500);

      expect(root?.right?.left?.key).toBe(6);
      expect(root?.right?.left?.val).toBe(600);
      expect(root?.right?.right?.key).toBe(7);
      expect(root?.right?.right?.val).toBe(700);

      expect(root?.left?.left?.left?.key).toBe(8);
      expect(root?.left?.left?.left?.val).toBe(800);
    });
  });

});