import { BinaryTreeHelper } from '../../../src/tree/binary-tree-helper';
import BTNode from '../../../src/tree/binary-tree-node';

describe('BinaryTreeHelper', () => {
  describe('maxNodesAtDepth static method', () => {
    it('should return the correct number of nodes for valid depths', () => {
      expect(BinaryTreeHelper.maxNodesAtDepth(1)).toBe(1);
      expect(BinaryTreeHelper.maxNodesAtDepth(2)).toBe(3);
      expect(BinaryTreeHelper.maxNodesAtDepth(3)).toBe(7);
      expect(BinaryTreeHelper.maxNodesAtDepth(4)).toBe(15);
    });

    it('should throw an error for invalid depths', () => {
      expect(() => BinaryTreeHelper.maxNodesAtDepth(-1)).toThrow('Number of levels must be Integer and greater than 0');
      expect(() => BinaryTreeHelper.maxNodesAtDepth(1.5)).toThrow('Number of levels must be Integer and greater than 0');
    });
  });

  describe('minDepthAtNodesSize static method', () => {
    it('should return the correct depth for valid node sizes', () => {
      expect(BinaryTreeHelper.minDepthAtNodesSize(1)).toBe(1);
      expect(BinaryTreeHelper.minDepthAtNodesSize(3)).toBe(2);
      expect(BinaryTreeHelper.minDepthAtNodesSize(7)).toBe(3);
      expect(BinaryTreeHelper.minDepthAtNodesSize(15)).toBe(4);
    });

    it('should throw an error for invalid node sizes', () => {
      expect(() => BinaryTreeHelper.minDepthAtNodesSize(-1)).toThrow('Number of nodes must be Integer and greater than 0');
      expect(() => BinaryTreeHelper.minDepthAtNodesSize(1.5)).toThrow('Number of nodes must be Integer and greater than 0');
    });
  });

  describe('minDepthAtLeavesSize static method', () => {
    it('should return the correct depth for valid leaf counts', () => {
      expect(BinaryTreeHelper.minDepthAtLeavesSize(1)).toBe(1);
      expect(BinaryTreeHelper.minDepthAtLeavesSize(2)).toBe(2);
      expect(BinaryTreeHelper.minDepthAtLeavesSize(3)).toBe(2);
      expect(BinaryTreeHelper.minDepthAtLeavesSize(7)).toBe(3);
    });

    it('should throw an error for invalid leaf counts', () => {
      expect(() => BinaryTreeHelper.minDepthAtLeavesSize(-1)).toThrow('Number of leaves must be Integer and greater than 0');
      expect(() => BinaryTreeHelper.minDepthAtLeavesSize(1.5)).toThrow('Number of leaves must be Integer and greater than 0');
    });
  });

  describe('maxDepth static method', () => {
    it('should return the correct depth for various binary trees', () => {
      const tree = new BTNode(1, 'A')

      expect(BinaryTreeHelper.maxDepth(tree)).toBe(1);

      tree.left = new BTNode(2, 'B')
      tree.right = new BTNode(3, 'C')

      expect(BinaryTreeHelper.maxDepth(tree)).toBe(2);

      tree.left.left = new BTNode(4, 'D')
      tree.left.left.left = new BTNode(5, 'F')

      expect(BinaryTreeHelper.maxDepth(tree)).toBe(4);

    });

    it('should handle null nodes correctly', () => {
      expect(BinaryTreeHelper.maxDepth(null)).toBe(0);
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
        const result = BinaryTreeHelper.bfs<number>(tree, (node) => node.val * 2);
        const expectedValues = [2, 4, 6, 8, 10, 12, 14];

        expect(result).toEqual(expectedValues);
      });

      it('should handle empty trees correctly', () => {
        const emptyTree = null;
        const result = BinaryTreeHelper.bfs<number>(emptyTree, (node) => node);

        expect(result).toEqual([]);
      });
    });

    describe('dfsPreOrder static method', () => {
      it('should perform a depth-first pre-order traversal and process each node value with the callback', () => {
        const result = BinaryTreeHelper.dfsPreOrder<number>(tree, (node) => node.val * 2);
        const expectedValues = [2, 4, 8, 10, 6, 12, 14];

        expect(result).toEqual(expectedValues);
      });

      it('should handle an empty tree correctly', () => {
        const emptyTree = null;
        const result = BinaryTreeHelper.dfsPreOrder<number>(emptyTree, (node) => node);

        expect(result).toEqual([]);
      });
    });

    describe('dfsPostOrder static method', () => {
      it('should perform a depth-first post-order traversal and process each node value with the callback', () => {
        const result = BinaryTreeHelper.dfsPostOrder<number>(tree, (node) => node.val * 2);
        const expectedValues = [8, 10, 4, 12, 14, 6, 2];

        expect(result).toEqual(expectedValues);
      });

      it('should handle an empty tree correctly', () => {
        const emptyTree = null;
        const result = BinaryTreeHelper.dfsPostOrder<number>(emptyTree, (node) => node);

        expect(result).toEqual([]);
      });
    });

    describe('dfsInOrder static method', () => {
      it('should perform a depth-first in-order traversal and process each node value with the callback', () => {
        const result = BinaryTreeHelper.dfsInOrder<number>(tree, (node) => node.val * 2);
        const expectedValues = [8, 4, 10, 2, 12, 6, 14];

        expect(result).toEqual(expectedValues);
      });

      it('should handle an empty tree correctly', () => {
        const emptyTree = null;
        const result = BinaryTreeHelper.dfsInOrder<number>(emptyTree, (node) => node);

        expect(result).toEqual([]);
      });
    });

  })

  describe('findNode | findNodeBFS | findNodeDFS static method', () => {
    const matchFn = (node: BTNode<number>) => node.key === 5;

    const root = new BTNode(1, 100);
    root.left = new BTNode(2, 200);
    root.right = new BTNode(3, 300);
    root.left.left = new BTNode(4, 400);
    root.left.right = new BTNode(5, 500);
    root.right.left = new BTNode(6, 600);
    root.right.right = new BTNode(7, 700);

    it('Find Node using BFS via findNode Method', () => {
      const result = BinaryTreeHelper.findNode(root, matchFn, 'bfs');
      expect(result?.val).toBe(500);
    });

    it('Find Node using BFS via findNodeBFS Method', () => {
      const result = BinaryTreeHelper.findNodeBFS(root, matchFn);
      expect(result?.key).toBe(5);
    });

    it('Find Node using DFS via findNodeDFS Method', () => {
      const result = BinaryTreeHelper.findNodeDFS(root, matchFn);
      expect(result?.key).toBe(5);
    });
  });

  describe('delete static method', () => {
    it('should delete a node from the binary tree', () => {

      const root = new BTNode(1, 10);
      root.left = new BTNode(2, 20);
      root.right = new BTNode(3, 30);
      root.left.left = new BTNode(4, 40);
      root.left.right = new BTNode(5, 50);
      root.right.left = new BTNode(6, 60);
      root.right.right = new BTNode(7, 70);

      let [resultRoot, isRemoved] = BinaryTreeHelper.remove(root, 3);

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

      expect(BinaryTreeHelper.bfs(resultRoot, node => node.val)).toEqual([10, 20, 70, 40, 50, 60]);

      expect(isRemoved).toBe(true);

      [resultRoot, isRemoved] = BinaryTreeHelper.remove(root, 6);

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

      expect(BinaryTreeHelper.bfs(resultRoot, node => node.val)).toEqual([10, 20, 70, 40, 50]);
      expect(isRemoved).toBe(true);

      [resultRoot, isRemoved] = BinaryTreeHelper.remove(root, 7);

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

      expect(BinaryTreeHelper.bfs(resultRoot, node => node.val)).toEqual([10, 20, 50, 40]);
      expect(isRemoved).toBe(true);

      [resultRoot, isRemoved] = BinaryTreeHelper.remove(root, 2);

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

      expect(BinaryTreeHelper.bfs(resultRoot, node => node.val)).toEqual([10, 40, 50]);
      expect(isRemoved).toBe(true);

      [resultRoot, isRemoved] = BinaryTreeHelper.remove(root, 4);

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

      expect(BinaryTreeHelper.bfs(resultRoot, node => node.val)).toEqual([10, 50]);
      expect(isRemoved).toBe(true);

      [resultRoot, isRemoved] = BinaryTreeHelper.remove(root, 1);

      //      10       |      50
      //     /         |
      //    50         |

      expect(resultRoot?.key).toBe(5);
      expect(resultRoot?.val).toBe(50);

      expect(resultRoot?.left).toBe(null);
      expect(resultRoot?.right).toBe(null);

      expect(BinaryTreeHelper.bfs(resultRoot, node => node.val)).toEqual([50]);
      expect(isRemoved).toBe(true);

      [resultRoot, isRemoved] = BinaryTreeHelper.remove(root, 5);

      //      50       |      0

      expect(resultRoot).toBe(null);

      expect(BinaryTreeHelper.bfs(resultRoot, node => node.val)).toEqual([]);
      expect(isRemoved).toBe(true);

    });


    it('should handle deleting from an empty tree', () => {
      const [resultRoot, isRemoved] = BinaryTreeHelper.remove(null, 1);

      expect(resultRoot).toBe(null);
      expect(isRemoved).toBe(false);
    });

    it('should handle deleting from an binary tree when key is not found', () => {
      const root = new BTNode(1, 100);
      root.left = new BTNode(2, 200);
      root.right = new BTNode(3, 300);

      const [resultRoot, isRemoved] = BinaryTreeHelper.remove(root, 5);

      expect(resultRoot?.key).toBe(1);
      expect(resultRoot?.val).toBe(100);

      expect(resultRoot?.left?.key).toBe(2);
      expect(resultRoot?.left?.val).toBe(200);
      expect(resultRoot?.right?.key).toBe(3);
      expect(resultRoot?.right?.val).toBe(300);

      expect(isRemoved).toBe(false);
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