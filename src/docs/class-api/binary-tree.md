# Class BinaryTree
```
BinaryTree<K extends Key = number, V = any> extends BinaryTreeBase<K, V> 
```
Represents a binary tree.

`K` - The type of the keys (number or string) stored in the binary tree nodes.
`V` - The type of the value stored in the binary tree nodes.

### Hierarchy
- BinaryTree
  - [BinaryTreeBase](binary-tree-base.md)

### Content
#### Static methods:
- [fromEntries](#fromentries)
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
constructor(root?: BTNode<K, V> | null, size?: number); 
```
Constructs a new instance of the BinaryTree class.

**Parameters:**
- `root?: BTNode<K, V> | null` - The root node of the binary tree.
   If not provided, the tree will be initialized as empty.
- `size?: number` - The size of the binary tree.
   If not provided, the size will be calculated based on the root node.

## Static methods
### fromEntries
```
static fromEntries<K extends Key, V>(entries: Entries<K, V>): BinaryTree<K, V>; 
```
Creates a new BinaryTree instance from an array of entries using level-order (BFS) traversal for insertion.

`K` - The type of the key (number or string).
`V` - The type of the value stored in the node.

**Parameters:**
- `entries` - The entries to initialize the binary tree.

**Returns:** `BinaryTree<K, V>` - A new binary tree instance.
## Instance methods
### add
```
add(key: K, val: V): void; 
```
Adds a new node with the given key and value to the binary tree, employing level-order (BFS) traversal for insertion.

**Parameters:**
- `key` - The key of the new node.
- `val` - The value of the new node.

**Returns:** `void`
### addMany
```
addMany(entries: Entries<K, V>): void; 
```
Adds multiple nodes with the given keys and values to the binary tree, employing level-order (BFS) traversal for insertion.

**Parameters:**
- `entries` - An array of key-value pairs to be added to the binary tree.

**Returns:** `void`
### delete
```
delete(key: K): boolean; 
```
Deletes the node with the specified key from the binary tree.
It replaces the node with the deepest rightmost node and then removes the deepest rightmost node.

**Parameters:**
- `key` - The key of the node to be deleted.

**Returns:** `boolean` - `true` if the node with the given key was found and deleted, `false` otherwise.
### get
```
get(key: K, order?: TraversalOrder): V | undefined; 
```
Gets the value associated with the specified key in the binary tree, employing the chosen traversal order.

**Parameters:**
- `key` - The key to search for.
- `order?` - The order of traversal (default: InOrder).

**Returns:** `V | undefined` - The value associated with the key, or undefined if not found.
### has
```
has(key: K, order?: TraversalOrder): boolean; 
```
Checks if the binary tree contains a node with the specified key, employing the chosen traversal order.

**Parameters:**
- `key` - The key to check for.
- `order?` - The order of traversal (default: InOrder).

**Returns:** `boolean` - True if the binary tree contains a node with the specified key, false otherwise.
### node
```
node(key: K, order?: TraversalOrder): BTNode<K, V>; 
```
Gets the node with the specified key in the binary tree, employing the chosen traversal order.

**Parameters:**
- `key` - The key to search for.
- `order?` - The order of traversal (default: InOrder).

**Returns:** `BTNode<K, V>` - The node with the specified key.
### set
```
set(key: K, val: V, order?: TraversalOrder): boolean; 
```
Sets the value associated with the specified key in the binary tree, employing the chosen traversal order.

**Parameters:**
- `key` - The key to set.
- `val` - The value to associate with the key.
- `order?` - The order of traversal (default: InOrder).

**Returns:** `boolean` - True if the key was successfully set, false otherwise.