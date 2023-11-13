import BinaryTree from '../../../src/binary-tree/binary-tree';

describe('BinaryTree', () => {
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

  describe('find method', () => {
    const tree = new BinaryTree<number | string>();
    tree.insert(1, 'a')
    tree.insert(2, 'b')
    tree.insert(3, 500)

    it('Find Node using BFS via find Method', () => {
      const result = tree.find( (node) => node.val === 'a', 'bfs');
      expect(result?.key).toBe(1);
    });

    it('Find Node using DFS via find Method', () => {
      const result = tree.find( (node) => node.val === 500, 'dfs');
      expect(result?.key).toBe(3);
    });
  });

  describe('remove method', () => {
    it('should remove a node from the binary tree and adjust size correctly', () => {
      const tree = new BinaryTree<number>();

      tree.insert(1, 10);
      tree.insert(2, 20);
      tree.insert(3, 30);

      tree.remove(3);

      expect(tree.rootNode?.key).toBe(1)
      expect(tree.rootNode?.val).toBe(10)
      expect(tree.rootNode?.left?.key).toBe(2);
      expect(tree.rootNode?.left?.val).toBe(20);
      expect(tree.rootNode?.right).toBe(null);

      expect(tree.bfs( node => node.val)).toEqual([10, 20]);
      expect(tree.size).toBe(2);

      tree.remove(1);

      expect(tree.rootNode?.key).toBe(2)
      expect(tree.rootNode?.val).toBe(20)
      expect(tree.rootNode?.left).toBe(null);
      expect(tree.rootNode?.right).toBe(null);

      expect(tree.size).toBe(1);
      expect(tree.bfs( node => node.val)).toEqual([20]);

      tree.remove(2);

      expect(tree.rootNode).toBe(null)

      expect(tree.size).toBe(0);
      expect(tree.bfs( node => node.val)).toEqual([]);
    });

    it('removing from an empty tree throws Error', () => {
      const tree = new BinaryTree<string>();

      expect(tree.size).toBe(0);

      expect(() => {
        tree.remove(5);
      }).toThrow('Tree is empty: Cannot remove from an empty tree')

    });

    it('removing from an binary tree when key is not found throws an error', () => {
      const tree = new BinaryTree<number>();
      tree.insert(1, 100)
      tree.insert(2, 200)

      expect(() => {
        tree.remove( 5)
      }).toThrow('Node with key 5 not found. Cannot remove node with key 5.')
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

  describe('traversal methods', () => {
    const tree = new BinaryTree<number>()
    tree.insert(1, 1)
    tree.insert(2, 2)
    tree.insert(3, 3)
    tree.insert(4, 4)
    tree.insert(5, 5)
    tree.insert(6, 6)
    tree.insert(7, 7)

    describe('bfs method', () => {
      it('should traverse the tree in a breadth-first manner and return the correct values', () => {
        const result = tree.bfs((node) => node.val * 2);
        const expectedValues = [2, 4, 6, 8, 10, 12, 14];

        expect(result).toEqual(expectedValues);
      });

      it('should handle empty trees correctly', () => {
        const tree = new BinaryTree<number>()
        const result = tree.bfs( (node) => node);

        expect(result).toEqual([]);
      });
    })

    describe('dfsPreOrder method', () => {
      it('should perform a depth-first pre-order traversal and process each node value with the callback', () => {
        const result = tree.dfsPreOrder((node) => node.val * 2);
        const expectedValues = [2, 4, 8, 10, 6, 12, 14];

        expect(result).toEqual(expectedValues);
      });

      it('should handle an empty tree correctly', () => {
        const tree = new BinaryTree<number>()
        const result = tree.dfsPreOrder( (node) => node);

        expect(result).toEqual([]);
      });
    });

    describe('dfsPostOrder method', () => {
      it('should perform a depth-first post-order traversal and process each node value with the callback', () => {
        const result = tree.dfsPostOrder((node) => node.val * 2);
        const expectedValues = [8, 10, 4, 12, 14, 6, 2];

        expect(result).toEqual(expectedValues);
      });

      it('should handle an empty tree correctly', () => {
        const tree = new BinaryTree<number>()
        const result = tree.dfsPostOrder( (node) => node);

        expect(result).toEqual([]);
      });
    });

    describe('dfsInOrder method', () => {
      it('should perform a depth-first in-order traversal and process each node value with the callback', () => {

        const result = tree.dfsInOrder((node) => node.val * 2);
        const expectedValues = [8, 4, 10, 2, 12, 6, 14];

        expect(result).toEqual(expectedValues);
      });

      it('should handle an empty tree correctly', () => {
        const tree = new BinaryTree<number>()
        const result = tree.dfsInOrder( (node) => node);

        expect(result).toEqual([]);
      });
    });
  });

  describe('clear method', () => {
    it('should clear the binary tree and set size to 0', () => {
      const tree = new BinaryTree<number>();

      tree.insert(1, 10);
      tree.insert(2, 20);
      tree.insert(3, 30);

      expect(tree.size).toBe(3);

      tree.clear(); // Clear the tree

      expect(tree.size).toBe(0);
      expect(tree.rootNode).toBeNull();
    });

    it('should handle clearing an empty tree', () => {
      const tree = new BinaryTree<string>();

      expect(tree.size).toBe(0);

      tree.clear();

      expect(tree.size).toBe(0);
      expect(tree.rootNode).toBeNull();
    });
  });

});
