import { BinarySearchTreeHelper, BSTComparator} from '../../../src/binary-tree/binary-search-tree-helper';
import BTNode from '../../../src/binary-tree/binary-tree-node';

describe('BinarySearchTreeHelper', () => {
  describe('insert static method', () => {
    it('Inserting a node into an empty tree sets it as the root', () => {
      const tree = BinarySearchTreeHelper.insert(null, 10, 'someValue');
      expect(tree.key).toBe(10);
      expect(tree.left).toBeNull();
      expect(tree.right).toBeNull();
    });

    it('Inserting nodes and checking the structure', () => {
      let tree = new BTNode(10, 'Root');
      tree = BinarySearchTreeHelper.insert(tree, 5, 'Left');
      tree = BinarySearchTreeHelper.insert(tree, 15, 'Right');
      tree = BinarySearchTreeHelper.insert(tree, 2, 'Left Left');
      tree = BinarySearchTreeHelper.insert(tree, 7, 'Left Right');

      expect(tree.key).toBe(10);
      expect(tree.left.key).toBe(5);
      expect(tree.right.key).toBe(15);

      expect(tree.left.left.key).toBe(2);
      expect(tree.left.right.key).toBe(7);
    });

    it('Inserting nodes and checking the structure', () => {
      const comparator: BSTComparator = (a,b) => b - a;

      let tree = new BTNode(10, 'Root');
      tree = BinarySearchTreeHelper.insert(tree, 15, 'Left', comparator);
      tree = BinarySearchTreeHelper.insert(tree, 5, 'Right', comparator);
      tree = BinarySearchTreeHelper.insert(tree, 2, 'Right Right', comparator);
      tree = BinarySearchTreeHelper.insert(tree, 7, 'Right Left', comparator);

      expect(tree.key).toBe(10);
      expect(tree.left.key).toBe(15);
      expect(tree.right.key).toBe(5);

      expect(tree.right.right.key).toBe(2);
      expect(tree.right.left.key).toBe(7);
    });

    it('Inserting a node with a duplicate key throws an error', () => {
      const root = new BTNode(10, 'Root');
      BinarySearchTreeHelper.insert(root, 5, 'Left');
      expect(() => {
        BinarySearchTreeHelper.insert(root, 5, 'Duplicate'); // Trying to insert a node with the same key
      }).toThrow('Duplicate key: Cannot insert a node with an existing key');
    });
  });
  describe('get static method', () => {
    // Test cases for various scenarios

    // Test case when the tree is empty
    it('search in an empty tree should return null', () => {
      const rootNode = null;
      expect(BinarySearchTreeHelper.get(rootNode, 10)).toBeNull();
    });

    it('search for a key in the root node should return the root node', () => {
      const rootNode = new BTNode<string>(10, 'Root');
      expect(BinarySearchTreeHelper.get(rootNode, 10)).toBe(rootNode);
    });

    it('search for a key present in the left subtree should return the correct node', () => {
      const rootNode = new BTNode<string>(10, 'Root');
      rootNode.left = new BTNode<string>(5, 'Left');
      rootNode.right = new BTNode<string>(15, 'Right');
      rootNode.left.left = new BTNode<string>(3, 'Left Left');
      rootNode.left.right = new BTNode<string>(8, 'Left Right');
      rootNode.right.left = new BTNode<string>(12, 'Right Left');
      rootNode.right.right = new BTNode<string>(18, 'Right Right');

      const foundNode = BinarySearchTreeHelper.get(rootNode, 3);
      expect(foundNode.val).toBe('Left Left');
    });

    it('search for a key present in the right subtree should return the correct node', () => {
      const rootNode = new BTNode<string>(10, 'Root');
      rootNode.left = new BTNode<string>(5, 'Left');
      rootNode.right = new BTNode<string>(15, 'Right');
      rootNode.left.left = new BTNode<string>(3, 'Left Left');
      rootNode.left.right = new BTNode<string>(8, 'Left Right');
      rootNode.right.left = new BTNode<string>(12, 'Right Left');
      rootNode.right.right = new BTNode<string>(18, 'Right Right');

      const foundNode = BinarySearchTreeHelper.get(rootNode, 18);
      expect(foundNode.val).toBe('Right Right');
    });

    it('search for a key not present in the tree should return null', () => {
      const rootNode = new BTNode<string>(10, 'Root');
      rootNode.left = new BTNode<string>(5, 'Left');
      rootNode.right = new BTNode<string>(15, 'Right');
      rootNode.left.left = new BTNode<string>(3, 'Left Left');
      rootNode.left.right = new BTNode<string>(8, 'Left Right');
      rootNode.right.left = new BTNode<string>(12, 'Right Left');
      rootNode.right.right = new BTNode<string>(18, 'Right Right');

      expect(BinarySearchTreeHelper.get(rootNode, 20)).toBeNull();
    });
  });
})
