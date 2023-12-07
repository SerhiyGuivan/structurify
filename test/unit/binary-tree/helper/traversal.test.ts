import {BTNode} from '../../../../src/binary-tree/node/node';
import {TraversalHelper} from "../../../../src/binary-tree/helper/traversal";
import {TraversalOrder} from "../../../../src/enums/binary-tree";
import {MockTree} from "../mock/mock-tree";

describe('TraversalHelper', () => {
  const tree = MockTree.tree();
  describe('getIterator', () => {
    describe('level-order', () => {
      it ('should iterate through the nodes in a binary tree using breadth-first search (BFS) level-order traversal.', () => {
        const iterator = TraversalHelper.getIterator<number, string>(tree, TraversalOrder.LevelOrder);
        expect(iterator.next().value).toEqual(tree);
        expect(iterator.next().value).toEqual(tree.left);
        expect(iterator.next().value).toEqual(tree.right);
        expect(iterator.next().value).toEqual(tree.left.left);
        expect(iterator.next().value).toEqual(tree.left.right);
        expect(iterator.next().value).toEqual(tree.right.right);
        expect(iterator.next().value).toEqual(tree.right.right.left);
      })
    })
    describe('pre-order', () => {
      it ('should iterate through the nodes in a binary tree using depth-first search (DFS) pre-order traversal.', () => {
        const iterator = TraversalHelper.getIterator<number,string>(tree, TraversalOrder.PreOrder);
        expect(iterator.next().value).toBe(tree);
        expect(iterator.next().value).toBe(tree.left);
        expect(iterator.next().value).toBe(tree.left.left);
        expect(iterator.next().value).toBe(tree.left.right);
        expect(iterator.next().value).toBe(tree.right);
        expect(iterator.next().value).toBe(tree.right.right);
        expect(iterator.next().value).toBe(tree.right.right.left);
      })
    })
    describe('in-order', () => {
      it ('should iterate through the nodes in a binary tree using depth-first search (DFS) in-order traversal.', () => {
        const iterator = TraversalHelper.getIterator<number, string>(tree, TraversalOrder.InOrder);
        expect(iterator.next().value).toBe(tree.left.left);
        expect(iterator.next().value).toBe(tree.left);
        expect(iterator.next().value).toBe(tree.left.right);
        expect(iterator.next().value).toBe(tree);
        expect(iterator.next().value).toBe(tree.right);
        expect(iterator.next().value).toBe(tree.right.right.left);
        expect(iterator.next().value).toBe(tree.right.right);
        
      })
    })
    describe('post-order', () => {
      it ('should iterate through the nodes in a binary tree using depth-first search (DFS) post-order traversal.', () => {
        const iterator = TraversalHelper.getIterator<number, string>(tree, TraversalOrder.PostOrder);
        expect(iterator.next().value).toBe(tree.left.left);
        expect(iterator.next().value).toBe(tree.left.right);
        expect(iterator.next().value).toBe(tree.left);
        expect(iterator.next().value).toBe(tree.right.right.left);
        expect(iterator.next().value).toBe(tree.right.right);
        expect(iterator.next().value).toBe(tree.right);
        expect(iterator.next().value).toBe(tree);
      })
    })
  })
  describe('forEach', () => {
    let arr: [number, string, BTNode<number, string>][];
    const traversalFn = (val: string, key: number, node: BTNode<number, string>): void => {
      arr.push([key, val, node])
    }
    beforeEach(() => {
      arr = []
    })
    describe('level-order', () => {
      it('should traverse the tree in level order and execute the callback for each node', () => {
        TraversalHelper.forEach<number, string>(tree, traversalFn, TraversalOrder.LevelOrder);
        expect(arr).toEqual([
          [1, 'A', tree],
          [2, 'B', tree.left],
          [3, 'C', tree.right],
          [4, 'D', tree.left.left],
          [5, 'E', tree.left.right],
          [7, 'G', tree.right.right],
          [14, 'N', tree.right.right.left],
        ]);
      });
    });
    describe('pre-order', () => {
      it('should traverse the tree in pre-order and execute the callback for each node', () => {
        TraversalHelper.forEach<number, string>(tree, traversalFn, TraversalOrder.PreOrder);
        expect(arr).toEqual([
          [1, 'A', tree],
          [2, 'B', tree.left],
          [4, 'D', tree.left.left],
          [5, 'E', tree.left.right],
          [3, 'C', tree.right],
          [7, 'G', tree.right.right],
          [14, 'N', tree.right.right.left],
        ]);
      });
    });
    describe('in-order', () => {
      it('should traverse the tree in in-order and execute the callback for each node', () => {
        TraversalHelper.forEach<number, string>(tree, traversalFn, TraversalOrder.InOrder);
        expect(arr).toEqual([
          [4, 'D', tree.left.left],
          [2, 'B', tree.left],
          [5, 'E', tree.left.right],
          [1, 'A', tree],
          [3, 'C', tree.right],
          [14, 'N', tree.right.right.left],
          [7, 'G', tree.right.right],
        ]);
      });
    });
    describe('post-order', () => {
      it('should traverse the tree in post-order and execute the callback for each node', () => {
        TraversalHelper.forEach<number, string>(tree, traversalFn, TraversalOrder.PostOrder);
        expect(arr).toEqual([
          [4, 'D', tree.left.left],
          [5, 'E', tree.left.right],
          [2, 'B', tree.left],
          [14, 'N', tree.right.right.left],
          [7, 'G', tree.right.right],
          [3, 'C', tree.right],
          [1, 'A', tree],
        ]);
      });
    });
  })
  describe('findNode', () => {
    it ('should return the correct node when searching in a binary tree',  () => {
      expect(TraversalHelper
        .findNode<number, string>(tree, (val) => val === 'D', TraversalOrder.LevelOrder)).toBe(tree.left.left);
      expect(TraversalHelper
        .findNode<number, string>(tree, (val, key) => key === 7, TraversalOrder.PostOrder)).toBe(tree.right.right);
      expect(TraversalHelper
        .findNode<number, string>(tree, (val, key, node) => node === tree.left.right, TraversalOrder.PreOrder)).toBe(tree.left.right);
    })

    it('should return null when searching for a node that is not present', () => {
      expect(TraversalHelper
        .findNode<number, string>(tree, (val) => val === 'X', TraversalOrder.InOrder)).toBeNull();
    })
  })
  describe('findValue', () => {
    it ('should return the correct value when searching in a binary tree',  () => {
      expect(TraversalHelper
        .findValue<number, string>(tree, (val) => val === 'D', TraversalOrder.LevelOrder)).toBe('D');
      expect(TraversalHelper
        .findValue<number, string>(tree, (val, key) => key === 7, TraversalOrder.PostOrder)).toBe('G');
      expect(TraversalHelper
        .findValue<number, string>(tree, (val, key, node) => node === tree.left.right, TraversalOrder.PreOrder)).toBe('E');
    })
    
    it('should return undefined when searching for a node that is not present', () => {
      expect(TraversalHelper
        .findValue<number, string>(tree, (val) => val === 'X', TraversalOrder.InOrder)).toBeUndefined();
    })
  })
  describe('some', () => {
    it('should return true when finding a matching value', () => {
      expect(TraversalHelper
        .some<number, string>(tree, (val) => val === 'D', TraversalOrder.LevelOrder)).toBe(true);
      expect(TraversalHelper
        .some<number, string>(tree, (val, key) => key === 7, TraversalOrder.PostOrder)).toBe(true);
      expect(TraversalHelper
        .some<number, string>(tree, (val, key, node) => node === tree.left.right, TraversalOrder.PreOrder)).toBe(true);
    })
    it('should return false when no matching value is found', () => {
      expect(TraversalHelper
        .some<number, string>(tree, (val) => val === 'X', TraversalOrder.InOrder)).toBeFalsy();
    })
  })
  describe('every', () => {
    it('should return true if all nodes are matching condition', () => {
      expect(TraversalHelper
        .every<number, string>(tree, (val) => val.length === 1, TraversalOrder.LevelOrder)).toBe(true);
      expect(TraversalHelper
        .every<number, string>(tree, (val, key) => key > 0, TraversalOrder.PostOrder)).toBe(true);
      expect(TraversalHelper
        .every<number, string>(tree, (val, key, node) => node instanceof BTNode, TraversalOrder.PreOrder)).toBe(true);
    })
    it('should return false if at least one node doesn\'t match the condition', () => {
      expect(TraversalHelper
        .every<number, string>(tree, (val) => val === 'C', TraversalOrder.InOrder)).toBeFalsy();
    })
  })
})