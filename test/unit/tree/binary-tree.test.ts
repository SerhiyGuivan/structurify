import BTNode from '../../../src/tree/binary-tree-node';
import BinaryTree from '../../../src/tree/binary-tree';

describe('BinaryTree', () => {
  describe('maxNodesAtDepth static method', () => {
    it('should return the correct number of nodes for valid depths', () => {
      expect(BinaryTree.maxNodesAtDepth(1)).toBe(1);
      expect(BinaryTree.maxNodesAtDepth(2)).toBe(3);
      expect(BinaryTree.maxNodesAtDepth(3)).toBe(7);
      expect(BinaryTree.maxNodesAtDepth(4)).toBe(15);
    });

    it('should throw an error for invalid depths', () => {
      expect(() => BinaryTree.maxNodesAtDepth(-1)).toThrow('Number of levels must be Integer and greater than 0');
      expect(() => BinaryTree.maxNodesAtDepth(1.5)).toThrow('Number of levels must be Integer and greater than 0');
    });
  });

  describe('minDepthAtNodesSize static method', () => {
    it('should return the correct depth for valid node sizes', () => {
      expect(BinaryTree.minDepthAtNodesSize(1)).toBe(1);
      expect(BinaryTree.minDepthAtNodesSize(3)).toBe(2);
      expect(BinaryTree.minDepthAtNodesSize(7)).toBe(3);
      expect(BinaryTree.minDepthAtNodesSize(15)).toBe(4);
    });

    it('should throw an error for invalid node sizes', () => {
      expect(() => BinaryTree.minDepthAtNodesSize(-1)).toThrow('Number of nodes must be Integer and greater than 0');
      expect(() => BinaryTree.minDepthAtNodesSize(1.5)).toThrow('Number of nodes must be Integer and greater than 0');
    });
  });

  describe('minDepthAtLeavesSize static method', () => {
    it('should return the correct depth for valid leaf counts', () => {
      expect(BinaryTree.minDepthAtLeavesSize(1)).toBe(1);
      expect(BinaryTree.minDepthAtLeavesSize(2)).toBe(2);
      expect(BinaryTree.minDepthAtLeavesSize(3)).toBe(2);
      expect(BinaryTree.minDepthAtLeavesSize(7)).toBe(3);
    });

    it('should throw an error for invalid leaf counts', () => {
      expect(() => BinaryTree.minDepthAtLeavesSize(-1)).toThrow('Number of leaves must be Integer and greater than 0');
      expect(() => BinaryTree.minDepthAtLeavesSize(1.5)).toThrow('Number of leaves must be Integer and greater than 0');
    });
  });

  describe('maxDepth static method', () => {
    it('should return the correct depth for various binary trees', () => {
      const tree = new BTNode(1, 'A')

      expect(BinaryTree.maxDepth(tree)).toBe(1);

      tree.left = new BTNode(2, 'B')
      tree.right = new BTNode(3, 'C')

      expect(BinaryTree.maxDepth(tree)).toBe(2);

      tree.left.left = new BTNode(4, 'D')
      tree.left.left.left = new BTNode(5, 'F')

      expect(BinaryTree.maxDepth(tree)).toBe(4);

    });

    it('should handle null nodes correctly', () => {
      expect(BinaryTree.maxDepth(null)).toBe(0);
    });
  });

  describe('traversalBreadthFirst static method', () => {
    it('should traverse the tree in a breadth-first manner and return the correct values', () => {
      const tree = new BTNode(1, 1);
      tree.left = new BTNode(2, 2);
      tree.right = new BTNode(3, 3);
      tree.left.left = new BTNode(4, 4);
      tree.left.right = new BTNode(5, 5);
      tree.right.left = new BTNode(6, 6);
      tree.right.right = new BTNode(7, 7);

      const result = BinaryTree.traversalBreadthFirst(tree, (value: number) => value * 2);
      const expectedValues = [2, 4, 6, 8, 10, 12, 14];

      expect(result).toEqual(expectedValues);
    });

    it('should handle empty trees correctly', () => {
      const emptyTree = null;
      const result = BinaryTree.traversalBreadthFirst<number>(emptyTree, (value) => value);

      expect(result).toEqual([]);
    });
  });

  describe('traversalDepthFirstPreOrder static method', () => {
    it('should perform a depth-first pre-order traversal and process each node value with the callback', () => {
      const tree = new BTNode(1, 1);
      tree.left = new BTNode(2, 2);
      tree.right = new BTNode(3, 3);
      tree.left.left = new BTNode(4, 4);
      tree.left.right = new BTNode(5, 5);
      tree.right.left = new BTNode(6, 6);
      tree.right.right = new BTNode(7, 7);

      const result = BinaryTree.traversalDepthFirstPreOrder<number>(tree, (value: number) => value * 2);
      const expectedValues = [2, 4, 8, 10, 6, 12, 14];

      expect(result).toEqual(expectedValues);
    });

    it('should handle an empty tree correctly', () => {
      const emptyTree = null;
      const result = BinaryTree.traversalDepthFirstPreOrder<number>(emptyTree, (value) => value);

      expect(result).toEqual([]);
    });
  });

  describe('traversalDepthFirstInOrder static method', () => {
    it('should perform a depth-first in-order traversal and process each node value with the callback', () => {
      const tree  = new BTNode(1, 1);
      tree.left = new BTNode(2, 2);
      tree.right = new BTNode(3, 3);
      tree.left.left = new BTNode(4, 4);
      tree.left.right = new BTNode(5, 5);
      tree.right.left = new BTNode(6, 6);
      tree.right.right = new BTNode(7, 7);

      const result = BinaryTree.traversalDepthFirstInOrder<number>(tree, (value: number) => value * 2);
      const expectedValues = [8, 4, 10, 2, 12, 6, 14];

      expect(result).toEqual(expectedValues);
    });

    it('should handle an empty tree correctly', () => {
      const emptyTree = null;
      const result = BinaryTree.traversalDepthFirstInOrder<number>(emptyTree, (value) => value);

      expect(result).toEqual([]);
    });
  });
  describe('insert method', () => {
    it('should insert a node correctly into an empty tree', () => {
      const tree = new BinaryTree<number>();
      tree.insert(1, 100);

      expect(tree.rootNode?.key).toBe(1);
      expect(tree.rootNode?.val).toBe(100);
      expect(tree.size).toBe(1);
    });

    it('should insert nodes correctly into a non-empty tree', () => {
      const tree = new BinaryTree<number>();
      tree.insert(1, 100);
      tree.insert(2, 200);
      tree.insert(3, 300);
      tree.insert(4, 400);

      expect(tree.rootNode?.left?.key).toBe(2);
      expect(tree.rootNode?.left?.val).toBe(200);
      expect(tree.rootNode?.right?.key).toBe(3);
      expect(tree.rootNode?.right?.val).toBe(300);
      expect(tree.rootNode?.left?.left?.key).toBe(4);
      expect(tree.rootNode?.left?.left?.val).toBe(400);
      expect(tree.size).toBe(4);
    });
  });

  describe('delete method', () => {
    it('should delete a node from the binary tree and adjust size correctly', () => {
      const tree = new BinaryTree<number>();

      tree.insert(1, 10);
      tree.insert(2, 20);
      tree.insert(3, 30);
      tree.insert(4, 40);
      tree.insert(5, 50);
      tree.insert(6, 60);
      tree.insert(7, 70);

      // Tree structure:
      //        10
      //       /  \
      //      20  30
      //     / \  / \
      //    40 50 60 70

      expect(tree.size).toBe(7); // Verify initial size before deletion
      expect(tree.traversalBreadthFirst( val => val)).toEqual([10, 20, 30, 40, 50, 60, 70]);

      tree.delete(3);

      // Tree structure:
      //        10
      //       /  \
      //      20  70
      //     / \  /
      //    40 50 60

      expect(tree.size).toBe(6);
      expect(tree.traversalBreadthFirst( val => val)).toEqual([10, 20, 70, 40, 50, 60]);

      tree.delete(2); // Deleting node with key 2

      expect(tree.size).toBe(5);
      expect(tree.traversalBreadthFirst( val => val)).toEqual([10, 60, 70, 40, 50]);

      tree.delete(7);
      tree.delete(1);
      tree.delete(6);
      tree.delete(4);

      expect(tree.size).toBe(1);
      expect(tree.traversalBreadthFirst( val => val)).toEqual([50]);

      tree.delete(5);

      expect(tree.size).toBe(0);
      expect(tree.traversalBreadthFirst( val => val)).toEqual([]);

    });

    it('should handle deleting from an empty tree', () => {
      const tree = new BinaryTree<string>();

      expect(tree.size).toBe(0);

      tree.delete(5);

      expect(tree.size).toBe(0);
    });
  });

  describe('maxDepth  method', () => {
    it('should return the correct depth for various binary trees', () => {
      const tree = new BinaryTree<number>()
      tree.insert(1, 1);

      expect(tree.maxDepth()).toBe(1);

      tree.insert(2, 20);
      tree.insert(3, 30);

      expect(tree.maxDepth()).toBe(2);

      tree.insert(4, 40);
      tree.insert(5, 500);
      tree.insert(6, 6);

      expect(tree.maxDepth()).toBe(3);

    });

    it('should handle null nodes correctly', () => {
      const tree = new BinaryTree<number>()
      expect(tree.maxDepth()).toBe(0);
    });
  });

  describe('traversalBreadthFirst static method', () => {
    it('should traverse the tree in a breadth-first manner and return the correct values', () => {
      const tree = new BinaryTree<number>()
      tree.insert(1, 1)
      tree.insert(2, 2)
      tree.insert(3, 3)
      tree.insert(4, 4)
      tree.insert(5, 5)
      tree.insert(6, 6)
      tree.insert(7, 7)

      const result = tree.traversalBreadthFirst((value: number) => value * 2);
      const expectedValues = [2, 4, 6, 8, 10, 12, 14];

      expect(result).toEqual(expectedValues);
    });

    it('should handle empty trees correctly', () => {
      const tree = new BinaryTree<number>()
      const result = tree.traversalBreadthFirst( (value) => value);

      expect(result).toEqual([]);
    });
  });

  describe('traversalDepthFirstPreOrder static method', () => {
    it('should perform a depth-first pre-order traversal and process each node value with the callback', () => {
      const tree = new BinaryTree<number>()
      tree.insert(1, 1)
      tree.insert(2, 2)
      tree.insert(3, 3)
      tree.insert(4, 4)
      tree.insert(5, 5)
      tree.insert(6, 6)
      tree.insert(7, 7)

      const result = tree.traversalDepthFirstPreOrder((value: number) => value * 2);
      const expectedValues = [2, 4, 8, 10, 6, 12, 14];

      expect(result).toEqual(expectedValues);
    });

    it('should handle an empty tree correctly', () => {
      const tree = new BinaryTree<number>()
      const result = tree.traversalDepthFirstPreOrder( (value) => value);

      expect(result).toEqual([]);
    });
  });

  describe('traversalDepthFirstInOrder static method', () => {
    it('should perform a depth-first in-order traversal and process each node value with the callback', () => {
      const tree = new BinaryTree<number>()
      tree.insert(1, 1)
      tree.insert(2, 2)
      tree.insert(3, 3)
      tree.insert(4, 4)
      tree.insert(5, 5)
      tree.insert(6, 6)
      tree.insert(7, 7)

      const result = tree.traversalDepthFirstInOrder((value: number) => value * 2);
      const expectedValues = [8, 4, 10, 2, 12, 6, 14];

      expect(result).toEqual(expectedValues);
    });

    it('should handle an empty tree correctly', () => {
      const tree = new BinaryTree<number>()
      const result = tree.traversalDepthFirstInOrder( (value) => value);

      expect(result).toEqual([]);
    });
  });

});
