# Class BinarySearchTree
```
BinarySearchTree<K extends Key = number, V = any> extends BinaryTreeBase<K, V> 
```
Represents a binary search tree.

`K` - The type of the keys (number or string) stored in the binary tree nodes.
`V` - The type of the value stored in the binary tree nodes.

### Hierarchy
- BinarySearchTree
  - [BinaryTreeBase](binary-tree-base.md)

### Content
#### Static methods:
- [fromEntries](#fromentries)
- [fromSortedEntries](#fromsortedentries)
#### Instance methods:
- [add](#add)
- [addMany](#addmany)
- [delete](#delete)
- [get](#get)
- [has](#has)
- [node](#node)
- [set](#set)

## Constructor
```
constructor(comparator?: BSTComparator<K>, bstRoot?: BTNode<K, V>, size?: number); 
```
Constructor for BinarySearchTree.

**Parameters:**
- `comparator?: BSTComparator<K>` - The comparator function for keys of the binary search tree.
  If not provided, the default comparator is (a, b) => a - b.
- `bstRoot?: BTNode<K, V>` - The root node of the binary search tree.
  If not provided, the tree will be initialized as empty.
- `size?: number` - The size of the binary search tree.
  If not provided, the size will be calculated based on the root node.

## Static methods
### fromEntries
```
static fromEntries<K extends Key = number, V = any>(entries: Entries<K, V>, comparator?: BSTComparator<K>): BinarySearchTree<K, V>; 
```
Create a BinarySearchTree from an array of entries.

`K` - The type of the keys (number or string) stored in the binary tree nodes.
`V` - The type of the value stored in the binary tree nodes.

**Parameters:**
- `entries` - Array of key-value entries.
- `comparator?` - The comparator function for keys of the binary search tree.
  If not provided, the default comparator is (a, b) => a - b.

**Returns:** `BinarySearchTree<K, V>` - BinarySearchTree instance.
### fromSortedEntries
```
static fromSortedEntries<K extends Key, V>(entries: Entries<K, V>, comparator?: BSTComparator<K>): BinarySearchTree<K, V>; 
```
Create a BinarySearchTree from an array of sorted entries.

`K` - The type of the keys (number or string) stored in the binary tree nodes.
`V` - The type of the value stored in the binary tree nodes.

**Parameters:**
- `entries` - Array of key-value entries.
- `comparator?` - The comparator function for keys of the binary search tree.
  If not provided, the default comparator is (a, b) => a - b.

**Returns:** `BinarySearchTree<K, V>` - BinarySearchTree instance.
## Instance methods
### add
```
add(key: K, val: V): boolean; 
```
Add a new node with the given key and value to the BST.

**Parameters:**
- `key` - Key to add.
- `val` - Value to associate with the key.

**Returns:** `boolean` - True if the node was added successfully, false if the key already exists.
### addMany
```
addMany(entries: Entries<K, V>): number; 
```
Adds multiple nodes with the given keys and values to the BST.

**Parameters:**
- `entries` - Array of key-value entries to add.

**Returns:** `number` - Number of entries successfully added.
### delete
```
delete(key: K): boolean; 
```
Delete a node with the given key from the BST using InOrder successor.

**Parameters:**
- `key` - Key to delete.

**Returns:** `boolean` - True if the node was successfully deleted, false if the key was not found.
### get
```
get(key: K): V | undefined; 
```
Get the value associated with a key in the BST.

**Parameters:**
- `key` - Key to search for.

**Returns:** `V | undefined` - Value associated with the key, or undefined if not found.
### has
```
has(key: K): boolean; 
```
Check if a key exists in the BST.

**Parameters:**
- `key` - Key to check.

**Returns:** `boolean` - True if the key exists, false otherwise.
### node
```
node(key: K): BTNode<K, V> | null; 
```
Get the node associated with a key in the BST.

**Parameters:**
- `key` - Key to search for.

**Returns:** `BTNode<K, V> | null` - Node associated with the key, or null if not found.
### set
```
set(key: K, val: V): boolean; 
```
Set the value associated with a key in the BST.

**Parameters:**
- `key` - Key to set the value for
- `val` - Value to set

**Returns:** `boolean` - True if the key was found and value set, false otherwise