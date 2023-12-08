import {BSTHelper, numericCompare} from "@/data-structures/binary-tree/helper/bst";
import {BTNode} from "@/data-structures/binary-tree/node/node";
import {MockTree} from "../mock/mock-tree";

describe('BSTHelper', () => {
  const bstTree = MockTree.bstTree();
  describe('get', () => {
    it('should return value', () => {
      expect(BSTHelper.get(bstTree, 5, numericCompare)).toBe('F');
    })
    it('should return undefined', () => {
      expect(BSTHelper.get(bstTree, 8, numericCompare)).toBeUndefined();
    });
  })
  describe('node', () => {
    it('should return value', () => {
      expect(BSTHelper.node(bstTree, 4, numericCompare)).toBe(bstTree.right.left);
    })
    it('should return undefined', () => {
      expect(BSTHelper.node(bstTree, 8, numericCompare)).toBeNull();
    });
  })
  describe('has', () => {
    it('should return true', () => {
      expect(BSTHelper.has(bstTree, 5, numericCompare)).toBe(true);
    })
    it('should return false', () => {
      expect(BSTHelper.has(bstTree, 8, numericCompare)).toBe(false);
    });
  })
  
  describe('set', () => {
    it('should return true', () => {
      expect(BSTHelper.has(bstTree, 5, numericCompare)).toBe(true);
    })
    it('should return false', () => {
      expect(BSTHelper.has(bstTree, 8, numericCompare)).toBe(false);
    });
  })
  
  describe('add', () => {
    it('should return [node, true]', () => {
      expect(BSTHelper.add(null, 7, 'A', numericCompare)).toEqual([new BTNode(7, 'A'), true])
    })
    it('should return [node, true] for multiple add', () => {
      const [root] = BSTHelper.add(null, 3, 'D', numericCompare);
      BSTHelper.add(root, 5, 'F', numericCompare);
      BSTHelper.add(root, 1, 'B', numericCompare);
      BSTHelper.add(root, 0, 'A', numericCompare);
      BSTHelper.add(root, 2, 'C', numericCompare);
      BSTHelper.add(root, 6, 'G', numericCompare);
      BSTHelper.add(root, 4, 'E', numericCompare);
      expect(root).toEqual(MockTree.bstTree());
    })
    it('should return [node, false] for duplicate key', () => {
      const [root] = BSTHelper.add(null, 7, 'A', numericCompare);
      expect(BSTHelper.add(root, 7, 'A', numericCompare)).toEqual([new BTNode(7, 'A'), false])
    })
  })
  describe('set', () => {
    it('should return true and change value', () => {
      const tree = MockTree.bstTree();
      expect(BSTHelper.set(tree, 2, 'X', numericCompare)).toBe(true)
      expect(tree.left.right.val).toBe('X');
    })
    it('should return false for non-existing node', () => {
      const tree = MockTree.bstTree();
      expect(BSTHelper.set(tree, 8, 'X', numericCompare)).toBe(false)
    })
  })
  describe('delete', () => {
    it('on delete leaf from tree', () => {
      expect(BSTHelper.delete(MockTree.bstTree(), 4, numericCompare)).toEqual([MockTree.bstTreeOnDeleted4(), true]);
    })
    it('on delete from tree with 1 child', () => {
      expect(BSTHelper.delete(MockTree.bstTreeOnDeleted1(), 2, numericCompare)).toEqual([MockTree.bstTreeOnDeleted1and2(), true]);
    })
    it('on delete root in bst', () => {
      expect(BSTHelper.delete(MockTree.bstTree(), 3, numericCompare)).toEqual([MockTree.bstTreeOnDeleted3(), true]);
    })
    
    it('on delete from subtree with 2 child in bst', () => {
      expect(BSTHelper.delete(MockTree.bstTree(), 1, numericCompare)).toEqual([MockTree.bstTreeOnDeleted1(), true]);
    })

    it('shouldn\'t  delete on node not found', () => {
      expect(BSTHelper.delete(MockTree.bstTree(), 10, numericCompare)).toEqual([MockTree.bstTree(), false]);
    })
  })
  
  describe('fromSortedEntries', () => {
    it('', () => {
      expect(BSTHelper.fromSortedEntries([[0, 'A'], [1, 'B'], [2, 'C'], [3, 'D'], [4, 'E'], [5, 'F'], [6, 'G']], 0, 6)).toEqual(MockTree.bstTree());
    })
  })
})

