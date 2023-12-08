import {CompareHelper} from "@/data-structures/binary-tree/helper/compare";
import {MockTree} from "../mock/mock-tree";

describe('CompareHelper', () => {
  describe('isEqual', () => {
    it('should be true', () => {
      expect(CompareHelper.isEqual<number, string>(MockTree.tree(),  MockTree.tree())).toBe(true)
    })
    it('should be false', () => {
      expect(CompareHelper.isEqual<number, string>(MockTree.tree(),  MockTree.tree2())).toBe(false)
    })
  })
  describe('isPerfect', () => {
    it('should be true', () => {
      expect(CompareHelper.isPerfect<number, string>(MockTree.perfectTree())).toBe(true);
    });
    it('should be false', () => {
      expect(CompareHelper.isPerfect<number, string>(MockTree.tree())).toBe(false);
      expect(CompareHelper.isPerfect<number, string>(MockTree.fullTree())).toBe(false);
      expect(CompareHelper.isFull<number, string>(MockTree.completeTree())).toBe(false);
      expect(CompareHelper.isBalanced<number, string>(MockTree.balancedTree())).toBe(true);
    });
  })
  describe('isFull', () => {
    it('should be true', () => {
      expect(CompareHelper.isFull<number, string>(MockTree.perfectTree())).toBe(true);
      expect(CompareHelper.isFull<number, string>(MockTree.fullTree())).toBe(true);
    });
    it('should be false', () => {
      expect(CompareHelper.isFull<number, string>(MockTree.tree())).toBe(false);
      expect(CompareHelper.isFull<number, string>(MockTree.completeTree())).toBe(false);
      expect(CompareHelper.isBalanced<number, string>(MockTree.balancedTree())).toBe(true);
    });
  })
  describe('isComplete', () => {
    it('should be true', () => {
      expect(CompareHelper.isComplete<number, string>(MockTree.perfectTree())).toBe(true);
      expect(CompareHelper.isComplete<number, string>(MockTree.fullTree())).toBe(true);
      expect(CompareHelper.isComplete<number, string>(MockTree.completeTree())).toBe(true);
    });
    it('should be false', () => {
      expect(CompareHelper.isBalanced<number, string>(MockTree.balancedTree())).toBe(true);
      expect(CompareHelper.isComplete<number, string>(MockTree.tree())).toBe(false);
    });
  })
  
  describe('isBalanced', () => {
    it('should be true', () => {
      expect(CompareHelper.isBalanced<number, string>(MockTree.perfectTree())).toBe(true);
      expect(CompareHelper.isBalanced<number, string>(MockTree.fullTree())).toBe(true);
      expect(CompareHelper.isBalanced<number, string>(MockTree.completeTree())).toBe(true);
      expect(CompareHelper.isBalanced<number, string>(MockTree.balancedTree())).toBe(true);
    });
    it('should be false', () => {
      expect(CompareHelper.isBalanced<number, string>(MockTree.tree())).toBe(false);
    });
  })
})