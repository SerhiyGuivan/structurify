import {BTMutationHelper} from "@/data-structures/binary-tree/helper/bt-mutation";
import {BTNode} from "@/data-structures/binary-tree/node/node";
import {TraversalOrder} from "@/enums/binary-tree";
import {MockTree} from "../mock/mock-tree";

describe('BTMutationHelper', () => {
  describe('add', () => {
    it('should add a new node to the tree', () => {
      expect(BTMutationHelper.add<number, string>(MockTree.completeTree(), 5, 'E')).toEqual([MockTree.fullTree(), true]);
    });
    
    it('should add a new node to the empty tree', () => {
      expect(BTMutationHelper.add<number, string>(null, 1, 'A')).toEqual([new BTNode(1, 'A'), true]);
    });
  })
  describe('addMany', () => {
    it('should return a tree with the size of added nodes for empty tree (null)', () => {
      const [root, size] = BTMutationHelper.addMany<number, string>(null, [[1, 'A'], [2, 'B'], [3, 'C'], [4, 'D'], [5, 'E']]);
      expect(root).toEqual(MockTree.fullTree());
      expect(size).toBe(5)
    })
    
    it('should return a tree with the size of added nodes for complete tree', () => {
      const [root, size] = BTMutationHelper.addMany<number, string>(MockTree.completeTree(), [[5, 'E'], [6, 'F'], [7, 'G'] ]);
      expect(root).toEqual(MockTree.perfectTree());
      expect(size).toBe(3)
    })
    
    it('should return a tree with the size of added nodes for balanced tree', () => {
      const [root, size] = BTMutationHelper.addMany<number, string>(MockTree.balancedTree(), [[4, 'D'], [5, 'E'], [6, 'F']]);
      expect(root).toEqual(MockTree.perfectTree());
      expect(size).toBe(3)
    })
    
    it('should return a tree with the size of added nodes for unbalanced tree', () => {
      const [root, size] = BTMutationHelper.addMany<number, string>(MockTree.tree(), [
        [6, 'F'], [8, 'H'], [9, 'I'], [10, 'J'], [11, 'K'], [12, 'L'], [13, 'M'], [15, 'O']
      ]);
      expect(root).toEqual(MockTree.perfectTree2());
      expect(size).toBe(8);
    })
  })
  describe('set', () => {
    it ('should change value of node', () => {
      const tree = MockTree.perfectTree2();
      expect(BTMutationHelper.set<number, string>(tree, 5, 'X')).toBe(true);
      expect(tree.left.right.val).toBe('X');
      
      expect(BTMutationHelper.set<number, string>(tree, 7, 'Y', TraversalOrder.LevelOrder)).toBe(true);
      expect(tree.right.right.val).toBe('Y');
      
      expect(BTMutationHelper.set<number, string>(tree, 11, 'Z', TraversalOrder.PreOrder)).toBe(true);
      expect(tree.left.right.right.val).toBe('Z');
    })
    it('should return false for non-existing node', () => {
      const tree = MockTree.perfectTree2();
      expect(BTMutationHelper.set<number, string>(tree, 16, 'X')).toBe(false)
    })
  })
  describe('delete', () => {
    it('should return [null, false] when deleting from an empty tree', () => {
      expect(BTMutationHelper.delete(null, 1)).toEqual([null, false]);
    });
    
    it('should return [null, true] when deleting the only node from the tree', () => {
      expect(BTMutationHelper.delete(new BTNode(1, 'A'), 1)).toEqual([null, true]);
    });
    
    it('should return [MockTree.perfectTree(), false] when deleting a non-existent key from a perfect tree', () => {
      expect(BTMutationHelper.delete(MockTree.perfectTree(), 20)).toEqual([MockTree.perfectTree(), false]);
    });
    
    it('should return [MockTree.completeTree(), true] when deleting an existing key from a full tree', () => {
      expect(BTMutationHelper.delete(MockTree.fullTree(), 5)).toEqual([MockTree.completeTree(), true]);
    });
  })
})