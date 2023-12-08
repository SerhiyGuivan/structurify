import BinarySearchTree from '@/data-structures/binary-tree/binary-search-tree';

describe('BinarySearchTree', () => {
  let bst;
  
  beforeEach(() => {
    // Initialize a new BinarySearchTree before each test
    bst = new BinarySearchTree();
  });
  
  test('should add a node to the BST', () => {
    bst.add(5, 'five');
    expect(bst.size).toBe(1);
    expect(bst.get(5)).toBe('five');
  });
  
  test('should add multiple nodes to the BST', () => {
    const entries = [
      [5, 'five'],
      [3, 'three'],
      [7, 'seven'],
    ];
    
    bst.addMany(entries);
    expect(bst.size).toBe(entries.length);
    expect(bst.get(5)).toBe('five');
    expect(bst.get(3)).toBe('three');
    expect(bst.get(7)).toBe('seven');
  });
  
  test('should check if a key exists in the BST', () => {
    bst.add(10, 'ten');
    expect(bst.has(10)).toBe(true);
    expect(bst.has(5)).toBe(false);
  });
  
  test('should get the value associated with a key in the BST', () => {
    bst.add(8, 'eight');
    expect(bst.get(8)).toBe('eight');
    expect(bst.get(3)).toBeUndefined();
  });
  
  test('should delete a node from the BST', () => {
    bst.add(15, 'fifteen');
    expect(bst.delete(15)).toBe(true);
    expect(bst.size).toBe(0);
    expect(bst.has(15)).toBe(false);
  });
  
  test('should create a BST from entries', () => {
    const entries: [number, string][] = [
      [8, 'eight'],
      [3, 'three'],
      [12, 'twelve'],
    ];
    
    const newBST = BinarySearchTree.fromEntries(entries);
    expect(newBST.size).toBe(entries.length);
    expect(newBST.get(8)).toBe('eight');
    expect(newBST.get(3)).toBe('three');
    expect(newBST.get(12)).toBe('twelve');
  });
  
  test('should create a BST from sorted entries', () => {
    const sortedEntries: [number, string][] = [
      [2, 'two'],
      [4, 'four'],
      [6, 'six'],
      [8, 'eight'],
    ];
    
    const newBST = BinarySearchTree.fromSortedEntries(sortedEntries);
    expect(newBST.size).toBe(sortedEntries.length);
    expect(newBST.get(6)).toBe('six');
  });
  
  test('should set the value associated with a key in the BST', () => {
    const sortedEntries: [number, string][] = [
      [2, 'two'],
      [4, 'four'],
      [6, 'six'],
      [8, 'eight'],
      [10, 'TEN']
    ];
    
    bst = BinarySearchTree.fromSortedEntries(sortedEntries);
    bst.set(10, 'ten');
    expect(bst.get(10)).toBe('ten');
    
    bst.set(10, 'newTen');
    expect(bst.get(10)).toBe('newTen');
  });
  
  test('should get the node associated with a key in the BST', () => {
    bst.add(8, 'eight');
    const node = bst.node(8);
    expect(node).toBeDefined();
    expect(node.val).toBe('eight');
  });
  
  test('should handle adding and deleting nodes with various values', () => {
    const entries = [
      [5, 'five'],
      [3, 'three'],
      [7, 'seven'],
      [4, 'four'],
      [6, 'six'],
      [8, 'eight'],
    ];
    
    bst.addMany(entries);
    expect(bst.size).toBe(entries.length);
    expect(bst.has(6)).toBe(true);
    
    bst.delete(6);
    expect(bst.size).toBe(entries.length - 1);
    expect(bst.has(6)).toBe(false);
  });
});
