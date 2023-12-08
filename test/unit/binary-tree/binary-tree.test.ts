import BinaryTree from '../../../src/binary-tree/binary-tree';
import {BTNode} from "../../../src/binary-tree/node/node";
import {TraversalOrder} from "../../../src/enums/binary-tree";
import {MockTree} from "./mock/mock-tree";

describe('BinaryTreeBase', () => {
  const binaryTree = BinaryTree.fromEntries<number, string>([
    [1, 'A'], [2, 'B'], [3, 'C'], [4, 'D'], [5, 'E'], [6, 'F'], [7, 'G'],
  ])
  describe('forEach', () => {
    let arr: [number, string, BTNode<number, string>][] = [];
    const traversalFn = (val: string, key: number, node: BTNode<number, string>): void => {
      arr.push([key, val, node])
    }
    beforeEach(() => {
      arr = []
    })
    describe('level-order', () => {
      it('should traverse the tree in level order and execute the callback for each node', () => {
        const arr: [number, string, BTNode<number, string>][] = [];
        const traversalFn = (val: string, key: number, node: BTNode<number, string>): void => {
          arr.push([key, val, node])
        }
        binaryTree.forEach(traversalFn, TraversalOrder.LevelOrder);
        expect(arr).toEqual([
          [1, 'A', binaryTree.root],
          [2, 'B', binaryTree.root.left],
          [3, 'C', binaryTree.root.right],
          [4, 'D', binaryTree.root.left.left],
          [5, 'E', binaryTree.root.left.right],
          [6, 'F', binaryTree.root.right.left],
          [7, 'G', binaryTree.root.right.right],
        ]);
      });
    });
    describe('pre-order', () => {
      it('should traverse the tree in pre-order and execute the callback for each node', () => {
        binaryTree.forEach(traversalFn, TraversalOrder.PreOrder);
        expect(arr).toEqual([
          [1, 'A', binaryTree.root],
          [2, 'B', binaryTree.root.left],
          [4, 'D', binaryTree.root.left.left],
          [5, 'E', binaryTree.root.left.right],
          [3, 'C', binaryTree.root.right],
          [6, 'F', binaryTree.root.right.left],
          [7, 'G', binaryTree.root.right.right],
        ]);
      });
    });
    describe('in-order', () => {
      it('should traverse the tree in in-order and execute the callback for each node', () => {
        binaryTree.forEach(traversalFn, TraversalOrder.InOrder);
        expect(arr).toEqual([
          [4, 'D', binaryTree.root.left.left],
          [2, 'B', binaryTree.root.left],
          [5, 'E', binaryTree.root.left.right],
          [1, 'A', binaryTree.root],
          [6, 'F', binaryTree.root.right.left],
          [3, 'C', binaryTree.root.right],
          [7, 'G', binaryTree.root.right.right],
        ]);
      });
    });
    describe('post-order', () => {
      it('should traverse the tree in post-order and execute the callback for each node', () => {
        binaryTree.forEach(traversalFn, TraversalOrder.PostOrder);
        expect(arr).toEqual([
          [4, 'D', binaryTree.root.left.left],
          [5, 'E', binaryTree.root.left.right],
          [2, 'B', binaryTree.root.left],
          [6, 'F', binaryTree.root.right.left],
          [7, 'G', binaryTree.root.right.right],
          [3, 'C', binaryTree.root.right],
          [1, 'A', binaryTree.root],
        ]);
      });
    });
  })
  describe('findNode', () => {
    it ('should return the correct node when searching in a binary tree',  () => {
      expect(binaryTree
        .findNode( (val) => val === 'D', TraversalOrder.LevelOrder)).toBe(binaryTree.root.left.left);
      expect(binaryTree
        .findNode( (_v, key) => key === 6, TraversalOrder.PostOrder)).toBe(binaryTree.root.right.left);
      expect(binaryTree
        .findNode( (_v, _k, node) => node === binaryTree.root.left.right, TraversalOrder.PreOrder)).toBe(binaryTree.root.left.right);
    })
    it('should return null when searching for a node that is not present', () => {
      expect(binaryTree
        .findNode( (val) => val === 'X', TraversalOrder.InOrder)).toBeNull();
    })
  })
  describe('findValue', () => {
    it ('should return the correct value when searching in a binary tree',  () => {
      expect(binaryTree
        .findValue( (val) => val === 'D', TraversalOrder.LevelOrder)).toBe('D');
      expect(binaryTree
        .findValue( (_v, key) => key === 6, TraversalOrder.PostOrder)).toBe('F');
      expect(binaryTree
        .findValue( (_v, _k, node) => node === binaryTree.root.left.right, TraversalOrder.PreOrder)).toBe('E');
    })
    it('should return undefined when searching for a node that is not present', () => {
      expect(binaryTree
        .findValue( (val) => val === 'X', TraversalOrder.InOrder)).toBeUndefined();
    })
  })
  describe('some', () => {
    it('should return true when finding a matching value', () => {
      expect(binaryTree
        .some( (val) => val === 'D', TraversalOrder.LevelOrder)).toBe(true);
      expect(binaryTree
        .some( (_v, key) => key === 6, TraversalOrder.PostOrder)).toBe(true);
      expect(binaryTree
        .some( (_v, _k, node) => node === binaryTree.root.left.right, TraversalOrder.PreOrder)).toBe(true);
    })
    it('should return false when no matching value is found', () => {
      expect(binaryTree
        .some( (val) => val === 'X', TraversalOrder.InOrder)).toBeFalsy();
    })
  })
  describe('every', () => {
    it('should return true if all nodes are matching condition', () => {
      expect(binaryTree
        .every( (val) => val.length === 1, TraversalOrder.LevelOrder)).toBe(true);
      expect(binaryTree
        .every( (_v, key) => key > 0, TraversalOrder.PostOrder)).toBe(true);
      expect(binaryTree
        .every( (_v, _k, node) => node instanceof BTNode, TraversalOrder.PreOrder)).toBe(true);
    })
    it('should return false if at least one node doesn\'t match the condition', () => {
      expect(binaryTree
        .every( (val) => val === 'C', TraversalOrder.InOrder)).toBeFalsy();
    })
  })
  describe('iterators', () => {
    describe('nodes', () => {
      describe('level-order', () => {
        it ('should iterate through the nodes in a binary tree using breadth-first search (BFS) level-order traversal.', () => {
          const iterator = binaryTree.nodes(TraversalOrder.LevelOrder);
          expect(iterator.next().value).toBe(binaryTree.root);
          expect(iterator.next().value).toBe(binaryTree.root.left);
          expect(iterator.next().value).toBe(binaryTree.root.right);
          expect(iterator.next().value).toBe(binaryTree.root.left.left);
          expect(iterator.next().value).toBe(binaryTree.root.left.right);
          expect(iterator.next().value).toBe(binaryTree.root.right.left);
          expect(iterator.next().value).toBe(binaryTree.root.right.right);
        })
      })
      describe('pre-order', () => {
        it ('should iterate through the nodes in a binary tree using depth-first search (DFS) pre-order traversal.', () => {
          const iterator = binaryTree.nodes(TraversalOrder.PreOrder);
          expect(iterator.next().value).toBe(binaryTree.root);
          expect(iterator.next().value).toBe(binaryTree.root.left);
          expect(iterator.next().value).toBe(binaryTree.root.left.left);
          expect(iterator.next().value).toBe(binaryTree.root.left.right);
          expect(iterator.next().value).toBe(binaryTree.root.right);
          expect(iterator.next().value).toBe(binaryTree.root.right.left);
          expect(iterator.next().value).toBe(binaryTree.root.right.right);
        })
      })
      describe('in-order', () => {
        it ('should iterate through the nodes in a binary tree using depth-first search (DFS) in-order traversal.', () => {
          const iterator = binaryTree.nodes(TraversalOrder.InOrder);
          expect(iterator.next().value).toBe(binaryTree.root.left.left);
          expect(iterator.next().value).toBe(binaryTree.root.left);
          expect(iterator.next().value).toBe(binaryTree.root.left.right);
          expect(iterator.next().value).toBe(binaryTree.root);
          expect(iterator.next().value).toBe(binaryTree.root.right.left);
          expect(iterator.next().value).toBe(binaryTree.root.right);
          expect(iterator.next().value).toBe(binaryTree.root.right.right);
        })
      })
      describe('post-order', () => {
        it ('should iterate through the nodes in a binary tree using depth-first search (DFS) post-order traversal.', () => {
          const iterator = binaryTree.nodes(TraversalOrder.PostOrder);
          expect(iterator.next().value).toBe(binaryTree.root.left.left);
          expect(iterator.next().value).toBe(binaryTree.root.left.right);
          expect(iterator.next().value).toBe(binaryTree.root.left);
          expect(iterator.next().value).toBe(binaryTree.root.right.left);
          expect(iterator.next().value).toBe(binaryTree.root.right.right);
          expect(iterator.next().value).toBe(binaryTree.root.right);
          expect(iterator.next().value).toBe(binaryTree.root);
        })
      })
    })
    describe('keys', () => {
      describe('level-order', () => {
        it ('should iterate through the keys in a binary tree using breadth-first search (BFS) level-order traversal.', () => {
          // @ts-ignore
          expect([...binaryTree.keys(TraversalOrder.LevelOrder)]).toEqual([1,2,3,4,5,6,7]);
        })
      })
      describe('pre-order', () => {
        it ('should iterate through the keys in a binary tree using depth-first search (DFS) pre-order traversal.', () => {
          // @ts-ignore
          expect([...binaryTree.keys(TraversalOrder.PreOrder)]).toEqual([1,2,4,5,3,6,7]);
        })
      })
      describe('in-order', () => {
        it ('should iterate through the keys in a binary tree using depth-first search (DFS) in-order traversal.', () => {
          // @ts-ignore
          expect([...binaryTree.keys(TraversalOrder.InOrder)]).toEqual([4,2,5,1,6,3,7]);
        })
      })
      
      describe('post-order', () => {
        it ('should iterate through the keys in a binary tree using depth-first search (DFS) post-order traversal.', () => {
          // @ts-ignore
          expect([...binaryTree.keys(TraversalOrder.PostOrder)]).toEqual([4,5,2,6,7,3,1]);
        })
      })
    })
    describe('values', () => {
      describe('level-order', () => {
        it ('should iterate through the values in a binary tree using breadth-first search (BFS) level-order traversal.', () => {
          // @ts-ignore
          expect([...binaryTree.values(TraversalOrder.LevelOrder)]).toEqual(['A','B','C','D','E','F','G']);
        })
      })
      describe('pre-order', () => {
        it ('should iterate through the values in a binary tree using depth-first search (DFS) pre-order traversal.', () => {
          // @ts-ignore
          expect([...binaryTree.values(TraversalOrder.PreOrder)]).toEqual(['A','B','D','E','C','F','G']);
        })
      })
      describe('in-order', () => {
        it ('should iterate through the values in a binary tree using depth-first search (DFS) in-order traversal.', () => {
          // @ts-ignore
          expect([...binaryTree.values(TraversalOrder.InOrder)]).toEqual(['D','B','E','A','F','C','G']);
        })
      })
      
      describe('post-order', () => {
        it ('should iterate through the values in a binary tree using depth-first search (DFS) post-order traversal.', () => {
          // @ts-ignore
          expect([...binaryTree.values(TraversalOrder.PostOrder)]).toEqual(['D','E','B','F','G','C','A']);
        })
      })
    })
    describe('entries', () => {
      describe('level-order', () => {
        it ('should iterate through the entries in a binary tree using breadth-first search (BFS) level-order traversal.', () => {
          // @ts-ignore
          expect([...binaryTree.entries(TraversalOrder.LevelOrder)]).toEqual([
            [1, 'A'], [2, 'B'], [3, 'C'], [4, 'D'], [5, 'E'], [6, 'F'], [7, 'G']
          ]);
        })
      })
      describe('pre-order', () => {
        it ('should iterate through the entries in a binary tree using depth-first search (DFS) pre-order traversal.', () => {
          // @ts-ignore
          expect([...binaryTree.entries(TraversalOrder.PreOrder)]).toEqual([
            [1, 'A'], [2, 'B'], [4, 'D'], [5, 'E'], [3, 'C'], [6, 'F'], [7, 'G']
          ]);
        })
      })
      describe('in-order', () => {
        it ('should iterate through the entries in a binary tree using depth-first search (DFS) in-order traversal.', () => {
          // @ts-ignore
          expect([...binaryTree.entries(TraversalOrder.InOrder)]).toEqual([
            [4, 'D'], [2, 'B'], [5, 'E'], [1, 'A'], [6, 'F'], [3, 'C'], [7, 'G']
          ]);
        })
      })
      
      describe('post-order', () => {
        it ('should iterate through the entries in a binary tree using depth-first search (DFS) post-order traversal.', () => {
          // @ts-ignore
          expect([...binaryTree.entries(TraversalOrder.PostOrder)]).toEqual([
            [4, 'D'], [5, 'E'], [2, 'B'], [6, 'F'], [7, 'G'], [3, 'C'], [1, 'A']
          ]);
        })
      })
    })
  })
  describe('compare', () => {
    const tree = new BinaryTree(MockTree.tree());
    const tree2 = new BinaryTree(MockTree.tree2());
    const perfectTree = new BinaryTree(MockTree.perfectTree());
    const fullTree = new BinaryTree(MockTree.fullTree());
    const completeTree = new BinaryTree(MockTree.completeTree());
    const balancedTree = new BinaryTree(MockTree.balancedTree());
    describe('isEqual', () => {
      it('should be true', () => {
        expect(tree.isEqual(MockTree.tree())).toBe(true)
      })
      it('should be false', () => {
        expect(tree.isEqual(MockTree.tree2())).toBe(false);
      })
    })
    describe('isPerfect', () => {
      it('should be true', () => {
        expect(perfectTree.isPerfect()).toBe(true);
      });
      it('should be false', () => {
        expect(tree.isPerfect()).toBe(false)
        expect(fullTree.isPerfect()).toBe(false)
        expect(completeTree.isPerfect()).toBe(false)
        expect(balancedTree.isPerfect()).toBe(false)
      });
    })
    describe('isFull', () => {
      it('should be true', () => {
        expect(perfectTree.isFull()).toBe(true);
        expect(fullTree.isFull()).toBe(true)
      });
      it('should be false', () => {
        expect(tree.isFull()).toBe(false)
        expect(completeTree.isFull()).toBe(false)
        expect(balancedTree.isFull()).toBe(false)
      });
    })
    describe('isComplete', () => {
      it('should be true', () => {
        expect(perfectTree.isComplete()).toBe(true);
        expect(fullTree.isComplete()).toBe(true)
        expect(completeTree.isComplete()).toBe(true)
      });
      it('should be false', () => {
        expect(tree.isComplete()).toBe(false)
        expect(balancedTree.isComplete()).toBe(false)
      });
    })
    
    describe('isBalanced', () => {
      it('should be true', () => {
        expect(perfectTree.isBalanced()).toBe(true);
        expect(fullTree.isBalanced()).toBe(true)
        expect(completeTree.isBalanced()).toBe(true)
        expect(balancedTree.isBalanced()).toBe(true)
      });
      it('should be false', () => {
        expect(tree.isBalanced()).toBe(false)
      });
    })
  })
  describe('maxDepth  method', () => {
    it('should return the correct depth for various binary trees', () => {
      const tree = new BinaryTree<number, number>()
      tree.add(1, 1);
      expect(tree.maxDepth()).toBe(1);
      tree.add(2, 20);
      tree.add(3, 30);
      expect(tree.maxDepth()).toBe(2);
      tree.add(4, 40);
      tree.add(5, 500);
      tree.add(6, 6);
      expect(tree.maxDepth()).toBe(3);
    });
    
    it('should handle null nodes correctly', () => {
      const tree = new BinaryTree<number, number>()
      expect(tree.maxDepth()).toBe(0);
    });
  });
  
  describe('clear method', () => {
    it('should clear the binary tree and set size to 0', () => {
      const tree = new BinaryTree<number, number>();
      tree.add(1, 10);
      tree.add(2, 20);
      tree.add(3, 30);
      
      expect(tree.size).toBe(3);
      tree.clear(); // Clear the tree
      expect(tree.size).toBe(0);
      expect(tree.root).toBeNull();
    });
  });
})

describe('BinaryTree', () => {
  const binaryTree = BinaryTree.fromEntries<number, string>([
    [1, 'A'], [2, 'B'], [3, 'C'], [4, 'D'], [5, 'E'], [6, 'F'], [7, 'G'],
  ])
  describe('constructor', () => {
    it('should create empty tree', () => {
      const tree = new BinaryTree();
      expect(tree.root).toBe(null);
      expect(tree.size === 0);
      expect(tree.isEmpty === true);
    })
    it ('should crete a non empty tree from node and set correct size', () => {
      const tree = new BinaryTree(MockTree.tree());
      expect(tree.root).toEqual(MockTree.tree());
      expect(tree.size).toBe(7);
      expect(tree.isEmpty).toBe(false);
    })
  })
  describe('fromEntries', () => {
    it('should create a binary tree from entries', () => {
      const tree = BinaryTree.fromEntries<number, string>([
        [1, 'A'], [2, 'B'], [3, 'C'], [4, 'D']
      ])
      expect(tree.root).toEqual(MockTree.completeTree())
      expect(tree.size).toBe(4);
      expect(tree.isEmpty).toBe(false);
    })
  })
  describe('get', () => {
    it ('should return the correct value',  () => {
      expect(binaryTree
        .get(6, TraversalOrder.LevelOrder)).toBe('F');
    })
    it('should return undefined when a node is not present', () => {
      expect(binaryTree
        .get( 10, TraversalOrder.InOrder)).toBeUndefined();
    })
  })
  describe('node', () => {
    it ('should return the correct node',  () => {
      expect(binaryTree
        .node(6, TraversalOrder.LevelOrder)).toBe(binaryTree.root.right.left);
    })
    it('should return null when a node is not present', () => {
      expect(binaryTree
        .node( 10, TraversalOrder.InOrder)).toBeNull();
    })
  })
  describe('has', () => {
    it ('should return the true',  () => {
      expect(binaryTree
        .has(6, TraversalOrder.LevelOrder)).toBe(true);
    })
    it('should return false', () => {
      expect(binaryTree
        .has( 10, TraversalOrder.InOrder)).toBe(false);
    })
  })
  describe('set', () => {
    it('should change a value correctly into', () => {
      const tree = BinaryTree.fromEntries<number, string>([[1, 'A'], [2, 'B'], [3, 'C']])
      expect(tree.set(2, 'X')).toBe(true)
      expect(tree.root.left.val).toBe('X');
    })
    
    it('should return false', () => {
      const tree = BinaryTree.fromEntries<number, string>([[1, 'A'], [2, 'B'], [3, 'C']])
      expect(tree.set(10, 'X')).toBe(false)
    })
    
  })
  describe('add', () => {
    it('should insert a node correctly into an empty tree using breadth-first search (BFS) level-order traversal.', () => {
      const tree = new BinaryTree<number, string>();
      tree.add(1, 'A');
      tree.add(2, 'B');
      tree.add(3, 'C');
      tree.add(4, 'D');
      
      expect(tree.root).toEqual(MockTree.completeTree())
      expect(tree.size).toBe(4);
      expect(tree.isEmpty).toBe(false);
    });
  });
  describe('addMany', () => {
    it('should insert a nodes correctly into an empty tree using breadth-first search (BFS) level-order traversal.', () => {
      const tree = new BinaryTree<number, string>();
      tree.addMany([[1, 'A'], [2, 'B'], [3, 'C'], [4, 'D'], [5, 'E']]);
      expect(tree.root).toEqual(MockTree.fullTree())
      expect(tree.size).toBe(5);
      expect(tree.isEmpty).toBe(false);
    });
  });
  describe('delete', () => {
    it('should remove a node from the binary tree and adjust size correctly', () => {
      const tree = BinaryTree.fromEntries<number, number>([
        [1,10],[2,20],[3,30]
      ]);

      tree.delete(3);

      expect(tree.root?.key).toBe(1)
      expect(tree.root?.val).toBe(10)
      expect(tree.root?.left?.key).toBe(2);
      expect(tree.root?.left?.val).toBe(20);
      expect(tree.root?.right).toBe(null);
      // @ts-ignore
      expect([...tree.values(TraversalOrder.LevelOrder)]).toEqual([10, 20]);
      expect(tree.size).toBe(2);
      tree.delete(1);
      expect(tree.root?.key).toBe(2)
      expect(tree.root?.val).toBe(20)
      expect(tree.root?.left).toBe(null);
      expect(tree.root?.right).toBe(null);
      expect(tree.size).toBe(1);
      // @ts-ignore
      expect([...tree.values(TraversalOrder.LevelOrder)]).toEqual([20]);
      tree.delete(2);

      expect(tree.root).toBe(null)
      expect(tree.size).toBe(0);
      // @ts-ignore
      expect([...tree.values(TraversalOrder.LevelOrder)]).toEqual([]);
      expect(tree.isEmpty).toBe(true);
    });

    it('should return false on removing from an empty tree', () => {
      const tree = new BinaryTree<number, string>();

      expect(tree.size).toBe(0);
      expect(tree.delete(5)).toBeFalsy()

    });

    it('should return false on removing from an binary tree when key is not found', () => {
      const tree = new BinaryTree<number, number>();
      tree.add(1, 100)
      tree.add(2, 200)
      expect(tree.delete(5)).toBeFalsy()
    });

  });
});
