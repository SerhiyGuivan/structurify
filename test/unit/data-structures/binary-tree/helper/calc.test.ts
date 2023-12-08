import { CalcHelper } from '@/data-structures/binary-tree/helper/calc';
import {MockTree} from "../mock/mock-tree";
describe('CalcHelper', () => {
  describe('maxNodesAtDepth', () => {
    it('should return the correct number of nodes for valid depths', () => {
      expect(CalcHelper.maxNodesAtDepth(1)).toBe(1);
      expect(CalcHelper.maxNodesAtDepth(2)).toBe(3);
      expect(CalcHelper.maxNodesAtDepth(3)).toBe(7);
      expect(CalcHelper.maxNodesAtDepth(4)).toBe(15);
    });
    it('should throw an error for invalid depths', () => {
      expect(() => CalcHelper.maxNodesAtDepth(-1)).toThrow('Number of levels must be Integer and greater than 0');
      expect(() => CalcHelper.maxNodesAtDepth(1.5)).toThrow('Number of levels must be Integer and greater than 0');
    });
  });
  describe('minDepthAtNodesSize', () => {
    it('should return the correct depth for valid node sizes', () => {
      expect(CalcHelper.minDepthAtNodesSize(1)).toBe(1);
      expect(CalcHelper.minDepthAtNodesSize(3)).toBe(2);
      expect(CalcHelper.minDepthAtNodesSize(7)).toBe(3);
      expect(CalcHelper.minDepthAtNodesSize(15)).toBe(4);
    });
    it('should throw an error for invalid node sizes', () => {
      expect(() => CalcHelper.minDepthAtNodesSize(-1)).toThrow('Number of nodes must be Integer and greater than 0');
      expect(() => CalcHelper.minDepthAtNodesSize(1.5)).toThrow('Number of nodes must be Integer and greater than 0');
    });
  });
  describe('minDepthAtLeavesSize', () => {
    it('should return the correct depth for valid leaf counts', () => {
      expect(CalcHelper.minDepthAtLeavesSize(1)).toBe(1);
      expect(CalcHelper.minDepthAtLeavesSize(2)).toBe(2);
      expect(CalcHelper.minDepthAtLeavesSize(3)).toBe(2);
      expect(CalcHelper.minDepthAtLeavesSize(7)).toBe(3);
    });
    it('should throw an error for invalid leaf counts', () => {
      expect(() => CalcHelper.minDepthAtLeavesSize(-1)).toThrow('Number of leaves must be Integer and greater than 0');
      expect(() => CalcHelper.minDepthAtLeavesSize(1.5)).toThrow('Number of leaves must be Integer and greater than 0');
    });
  });
  describe('maxDepth', () => {
    it('should return the correct depth', () => {
      expect(CalcHelper.maxDepth(MockTree.tree2())).toBe(4);
    });
    it('should handle null nodes correctly', () => {
      expect(CalcHelper.maxDepth(null)).toBe(0);
    });
  });
  describe('calcSize', () => {
    it('should return the correct size ', () => {
      expect(CalcHelper.calcSize(MockTree.tree2())).toBe(7);
    })
    it('should handle null nodes correctly', () => {
      expect(CalcHelper.calcSize(null)).toBe(0);
    });
  })
});