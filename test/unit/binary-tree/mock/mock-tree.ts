import {BTNode} from "../../../../src/binary-tree/node/node";

export class MockTree {
  static tree = (): BTNode<number, string> => {
    //        1
    //       / \
    //      2   3
    //     / \   \
    //    4   5   7
    //           /
    //          14
    const tree = new BTNode<number, string>(1, 'A')
    tree.left = new BTNode(2, 'B')
    tree.right = new BTNode(3, 'C')
    tree.left.left = new BTNode(4, 'D')
    tree.left.right = new BTNode(5, 'E')
    tree.right.right = new BTNode(7, 'G')
    tree.right.right.left = new BTNode(14, 'N')
    return tree;
  }
  static tree2 = (): BTNode<number, string> => {
    //               1
    //              / \
    //             2   3
    //            / \   \
    //           4  5    7
    //              /
    //             10
    const tree2 = new BTNode<number, string>(1, 'A')
    tree2.left = new BTNode(2, 'B')
    tree2.right = new BTNode(3, 'C')
    tree2.left.left = new BTNode(4, 'D')
    tree2.left.right = new BTNode(5, 'E')
    tree2.right.right = new BTNode(7, 'F')
    tree2.left.right.left = new BTNode(10, 'J')
    return tree2
  }
  static perfectTree = (): BTNode<number, string> => {
    //         1
    //        / \
    //       2   3
    //      / \ / \
    //     4  5 6  7
    const perfectTree = new BTNode<number, string>(1, 'A')
    perfectTree.left = new BTNode(2, 'B')
    perfectTree.right = new BTNode(3, 'C')
    perfectTree.left.left = new BTNode(4, 'D')
    perfectTree.left.right = new BTNode(5, 'E')
    perfectTree.right.left = new BTNode(6, 'F')
    perfectTree.right.right = new BTNode(7, 'G')
    return perfectTree;
  }
  
  static perfectTree2 = (): BTNode<number, string> => {
    //              1
    //         /         \
    //        2           3
    //      /   \       /   \
    //     4     5     6     7
    //    / \   / \   / \   / \
    //   8   9 10 11 12 13 14 15
    const perfectTree = new BTNode<number, string>(1, 'A')
    perfectTree.left = new BTNode(2, 'B')
    perfectTree.right = new BTNode(3, 'C')
    perfectTree.left.left = new BTNode(4, 'D')
    perfectTree.left.right = new BTNode(5, 'E')
    perfectTree.right.left = new BTNode(6, 'F')
    perfectTree.right.right = new BTNode(7, 'G')
    perfectTree.left.left.left = new BTNode(8, 'H')
    perfectTree.left.left.right = new BTNode(9, 'I')
    perfectTree.left.right.left = new BTNode(10, 'J')
    perfectTree.left.right.right = new BTNode(11, 'K')
    perfectTree.right.left.left = new BTNode(12, 'L')
    perfectTree.right.left.right = new BTNode(13, 'M')
    perfectTree.right.right.left = new BTNode(14, 'N')
    perfectTree.right.right.right = new BTNode(15, 'O')
    return perfectTree;
  }
  
  static fullTree = (): BTNode<number, string> => {
    //         1
    //        / \
    //       2   3
    //      / \
    //     4   5
    const fullTree = new BTNode<number, string>(1, 'A')
    fullTree.left = new BTNode(2, 'B')
    fullTree.right = new BTNode(3, 'C')
    fullTree.left.left = new BTNode(4, 'D')
    fullTree.left.right = new BTNode(5, 'E')
    return fullTree;
  }
  static completeTree = (): BTNode<number, string> => {
    //          1
    //         / \
    //        2   3
    //       /
    //      4
    const completeTree = new BTNode<number, string>(1, 'A')
    completeTree.left = new BTNode(2, 'B')
    completeTree.right = new BTNode(3, 'C')
    completeTree.left.left = new BTNode(4, 'D')
    return completeTree
  }
  static balancedTree = (): BTNode<number, string> => {
    //          1
    //         / \
    //        2   3
    //             \
    //              7
    const balancedTree = new BTNode<number, string>(1, 'A')
    balancedTree.left = new BTNode(2, 'B')
    balancedTree.right = new BTNode(3, 'C')
    balancedTree.right.right = new BTNode(7, 'G')
    return balancedTree;
  }
  
  static bstTree = (): BTNode<number, string> => {
    //          3
    //         / \
    //        1   5
    //       / \ / \
    //      0  2 4  6
    const bstTree = new BTNode<number, string>(3, 'D');
    bstTree.left = new BTNode(1, 'B')
    bstTree.left.left = new BTNode(0, 'A')
    bstTree.left.right = new BTNode(2, 'C')
    bstTree.right = new BTNode(5, 'F')
    bstTree.right.left = new BTNode(4, 'E')
    bstTree.right.right = new BTNode(6, 'G')
    return bstTree;
  }
  
  static bstTreeOnDeleted3 = (): BTNode<number, string> => {
    //          4
    //         / \
    //        1   5
    //       / \   \
    //      0  2    6
    const bstTree = new BTNode<number, string>(4, 'E');
    bstTree.left = new BTNode(1, 'B')
    bstTree.left.left = new BTNode(0, 'A')
    bstTree.left.right = new BTNode(2, 'C')
    bstTree.right = new BTNode(5, 'F')
    bstTree.right.right = new BTNode(6, 'G')
    return bstTree;
  }
  
  static bstTreeOnDeleted4 = (): BTNode<number, string> => {
    //          3
    //         / \
    //        1   5
    //       / \   \
    //      0  2    6
    const bstTree = new BTNode<number, string>(3, 'D');
    bstTree.left = new BTNode(1, 'B')
    bstTree.left.left = new BTNode(0, 'A')
    bstTree.left.right = new BTNode(2, 'C')
    bstTree.right = new BTNode(5, 'F')
    bstTree.right.right = new BTNode(6, 'G')
    return bstTree;
  }
  
  static bstTreeOnDeleted1 = (): BTNode<number, string> => {
    //          3
    //         / \
    //        2   5
    //       /   / \
    //      0    4  6
    const bstTree = new BTNode<number, string>(3, 'D');
    bstTree.left = new BTNode(2, 'C')
    bstTree.left.left = new BTNode(0, 'A')
    bstTree.right = new BTNode(5, 'F')
    bstTree.right.left = new BTNode(4, 'E')
    bstTree.right.right = new BTNode(6, 'G')
    return bstTree;
  }
  
  static bstTreeOnDeleted1and2 = (): BTNode<number, string> => {
    //          3
    //         / \
    //        0   5
    //           / \
    //           4  6
    const bstTree = new BTNode<number, string>(3, 'D');
    bstTree.left = new BTNode(0, 'A')
    bstTree.right = new BTNode(5, 'F')
    bstTree.right.left = new BTNode(4, 'E')
    bstTree.right.right = new BTNode(6, 'G')
    return bstTree;
  }
  
  static bstTreeOnDeleted1and0 = (): BTNode<number, string> => {
    //          3
    //         / \
    //        2   5
    //           / \
    //           4  6
    const bstTree = new BTNode<number, string>(3, 'D');
    bstTree.left = new BTNode(2, 'C')
    bstTree.right = new BTNode(5, 'F')
    bstTree.right.left = new BTNode(4, 'E')
    bstTree.right.right = new BTNode(6, 'G')
    return bstTree;
  }
}









