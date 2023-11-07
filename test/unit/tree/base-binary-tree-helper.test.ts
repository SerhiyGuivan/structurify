import { BaseBinaryTreeHelper } from '../../../src/tree/base-binary-tree-helper';
import BTNode from '../../../src/tree/binary-tree-node';

describe('BaseBinaryTreeHelper', () => {
  describe('maxNodesAtDepth static method', () => {
    it('should return the correct number of nodes for valid depths', () => {
      expect(BaseBinaryTreeHelper.maxNodesAtDepth(1)).toBe(1);
      expect(BaseBinaryTreeHelper.maxNodesAtDepth(2)).toBe(3);
      expect(BaseBinaryTreeHelper.maxNodesAtDepth(3)).toBe(7);
      expect(BaseBinaryTreeHelper.maxNodesAtDepth(4)).toBe(15);
    });

    it('should throw an error for invalid depths', () => {
      expect(() => BaseBinaryTreeHelper.maxNodesAtDepth(-1)).toThrow('Number of levels must be Integer and greater than 0');
      expect(() => BaseBinaryTreeHelper.maxNodesAtDepth(1.5)).toThrow('Number of levels must be Integer and greater than 0');
    });
  });

  describe('minDepthAtNodesSize static method', () => {
    it('should return the correct depth for valid node sizes', () => {
      expect(BaseBinaryTreeHelper.minDepthAtNodesSize(1)).toBe(1);
      expect(BaseBinaryTreeHelper.minDepthAtNodesSize(3)).toBe(2);
      expect(BaseBinaryTreeHelper.minDepthAtNodesSize(7)).toBe(3);
      expect(BaseBinaryTreeHelper.minDepthAtNodesSize(15)).toBe(4);
    });

    it('should throw an error for invalid node sizes', () => {
      expect(() => BaseBinaryTreeHelper.minDepthAtNodesSize(-1)).toThrow('Number of nodes must be Integer and greater than 0');
      expect(() => BaseBinaryTreeHelper.minDepthAtNodesSize(1.5)).toThrow('Number of nodes must be Integer and greater than 0');
    });
  });

  describe('minDepthAtLeavesSize static method', () => {
    it('should return the correct depth for valid leaf counts', () => {
      expect(BaseBinaryTreeHelper.minDepthAtLeavesSize(1)).toBe(1);
      expect(BaseBinaryTreeHelper.minDepthAtLeavesSize(2)).toBe(2);
      expect(BaseBinaryTreeHelper.minDepthAtLeavesSize(3)).toBe(2);
      expect(BaseBinaryTreeHelper.minDepthAtLeavesSize(7)).toBe(3);
    });

    it('should throw an error for invalid leaf counts', () => {
      expect(() => BaseBinaryTreeHelper.minDepthAtLeavesSize(-1)).toThrow('Number of leaves must be Integer and greater than 0');
      expect(() => BaseBinaryTreeHelper.minDepthAtLeavesSize(1.5)).toThrow('Number of leaves must be Integer and greater than 0');
    });
  });

  describe('maxDepth static method', () => {
    it('should return the correct depth for various binary trees', () => {
      const tree = new BTNode(1, 'A')

      expect(BaseBinaryTreeHelper.maxDepth(tree)).toBe(1);

      tree.left = new BTNode(2, 'B')
      tree.right = new BTNode(3, 'C')

      expect(BaseBinaryTreeHelper.maxDepth(tree)).toBe(2);

      tree.left.left = new BTNode(4, 'D')
      tree.left.left.left = new BTNode(5, 'F')

      expect(BaseBinaryTreeHelper.maxDepth(tree)).toBe(4);

    });

    it('should handle null nodes correctly', () => {
      expect(BaseBinaryTreeHelper.maxDepth(null)).toBe(0);
    });
  });

  describe('traversal static methods', () => {
    const tree = new BTNode(1, 1);
    tree.left = new BTNode(2, 2);
    tree.right = new BTNode(3, 3);
    tree.left.left = new BTNode(4, 4);
    tree.left.right = new BTNode(5, 5);
    tree.right.left = new BTNode(6, 6);
    tree.right.right = new BTNode(7, 7);

    describe('bfs static method', () => {
      it('should traverse the tree in a breadth-first manner and return the correct values', () => {
        const result = BaseBinaryTreeHelper.bfs<number>(tree, (node) => node.val * 2);
        const expectedValues = [2, 4, 6, 8, 10, 12, 14];

        expect(result).toEqual(expectedValues);
      });

      it('should handle empty trees correctly', () => {
        const emptyTree = null;
        const result = BaseBinaryTreeHelper.bfs<number>(emptyTree, (node) => node);

        expect(result).toEqual([]);
      });
    });

    describe('dfsPreOrder static method', () => {
      it('should perform a depth-first pre-order traversal and process each node value with the callback', () => {
        const result = BaseBinaryTreeHelper.dfsPreOrder<number>(tree, (node) => node.val * 2);
        const expectedValues = [2, 4, 8, 10, 6, 12, 14];

        expect(result).toEqual(expectedValues);
      });

      it('should handle an empty tree correctly', () => {
        const emptyTree = null;
        const result = BaseBinaryTreeHelper.dfsPreOrder<number>(emptyTree, (node) => node);

        expect(result).toEqual([]);
      });
    });

    describe('dfsPostOrder static method', () => {
      it('should perform a depth-first post-order traversal and process each node value with the callback', () => {
        const result = BaseBinaryTreeHelper.dfsPostOrder<number>(tree, (node) => node.val * 2);
        const expectedValues = [8, 10, 4, 12, 14, 6, 2];

        expect(result).toEqual(expectedValues);
      });

      it('should handle an empty tree correctly', () => {
        const emptyTree = null;
        const result = BaseBinaryTreeHelper.dfsPostOrder<number>(emptyTree, (node) => node);

        expect(result).toEqual([]);
      });
    });

    describe('dfsInOrder static method', () => {
      it('should perform a depth-first in-order traversal and process each node value with the callback', () => {
        const result = BaseBinaryTreeHelper.dfsInOrder<number>(tree, (node) => node.val * 2);
        const expectedValues = [8, 4, 10, 2, 12, 6, 14];

        expect(result).toEqual(expectedValues);
      });

      it('should handle an empty tree correctly', () => {
        const emptyTree = null;
        const result = BaseBinaryTreeHelper.dfsInOrder<number>(emptyTree, (node) => node);

        expect(result).toEqual([]);
      });
    });

  })
});