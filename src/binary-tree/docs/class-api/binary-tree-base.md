# Class BinaryTreeBase
```
abstract BinaryTreeBase<K extends Key = number, V = any> 
```
Represents an abstract base class for a binary tree structure with generic data.

`K` - The type of the keys (number or string) stored in the binary tree nodes.
`V` - The type of the value stored in the binary tree nodes.

### Content
#### Accessors:
- [isEmpty](#isempty)
- [root](#root)
- [size](#size)
#### Instance methods:
- [clear](#clear)
- [entries](#entries)
- [every](#every)
- [findNode](#findnode)
- [findValue](#findvalue)
- [forEach](#foreach)
- [isBalanced](#isbalanced)
- [isComplete](#iscomplete)
- [isEqual](#isequal)
- [isFull](#isfull)
- [isPerfect](#isperfect)
- [keys](#keys)
- [maxDepth](#maxdepth)
- [nodes](#nodes)
- [some](#some)
- [values](#values)

## Constructor
```
protected constructor(); 
```
## Accessors
### isEmpty
```
get isEmpty(): boolean; 
```
Checks if the binary tree is empty.

**Returns:** `boolean` - `true` if the binary tree is empty, `false` otherwise.
### root
```
get root(): BTNode<K, V> | null; 
```
Gets the root node of the binary tree.

**Returns:** `BTNode<K, V> | null` - The root node of the binary tree.
### size
```
get size(): number; 
```
Gets the number of nodes in the binary tree.

**Returns:** `number` - The size of the binary tree.
## Instance methods
### clear
```
clear(): void; 
```
Clears the binary tree, removing all nodes.

**Returns:** `void`
### entries
```
entries(order?: TraversalOrder): Generator<[K, V], void, void>; 
```
Generates an iterator for the entries (key-value pairs) in the binary tree using the specified traversal order.

**Parameters:**
- `order?` - The order of traversal (default: InOrder).

**Returns:** `Generator<[K, V], void, void>` - An iterator for the entries in the binary tree.
### every
```
every(matchFn: MatchFn<K, V>, order?: TraversalOrder): boolean; 
```
Checks if all nodes in the binary tree match a given condition using the specified traversal order.

**Parameters:**
- `matchFn` - The condition to match nodes.
- `order?` - The order of traversal (default: InOrder).

**Returns:** `boolean` - `true` if all nodes match the condition, `false` otherwise.
### findNode
```
findNode(matchFn: MatchFn<K, V>, order?: TraversalOrder): BTNode<K, V> | null; 
```
Finds a node in the binary tree that matches a given condition using the specified traversal order.

**Parameters:**
- `matchFn` - The condition to match nodes.
- `order?` - The order of traversal (default: InOrder).

**Returns:** `BTNode<K, V> | null` - The first node that matches the condition, or `null` if not found.
### findValue
```
findValue(matchFn: MatchFn<K, V>, order?: TraversalOrder): V | undefined; 
```
Finds the value in the binary tree that matches a given condition using the specified traversal order.

**Parameters:**
- `matchFn` - The condition to match values.
- `order?` - The order of traversal (default: InOrder).

**Returns:** `V | undefined` - The first value that matches the condition, or `undefined` if not found.
### forEach
```
forEach(traversalFn: TraversalFn<K, V>, order?: TraversalOrder): void; 
```
Iterates over each node in the binary tree, in a specified order and applies a callback function.

**Parameters:**
- `traversalFn` - The callback function to apply to each node.
- `order?` - The order of traversal (default: InOrder).

**Returns:** `void`
### isBalanced
```
isBalanced(): boolean; 
```
Checks if the binary tree is balanced.
A binary tree is considered balanced if the height of the two subtrees of any node
never differs by more than one.

**Returns:** `boolean` - True if the binary tree is balanced, false otherwise.
### isComplete
```
isComplete(): boolean; 
```
Checks if the binary tree is complete.
A binary tree is considered complete if all levels, except possibly the last,
are completely filled, and all nodes are as left as possible.

**Returns:** `boolean` - True if the binary tree is complete, false otherwise.
### isEqual
```
isEqual(root: BTNode<K, V> | null): boolean; 
```
Checks if the binary tree is equal to another tree by comparing their structures.

**Parameters:**
- `root` - The root of the other binary tree.

**Returns:** `boolean` - `true` if the binary trees are equal,
### isFull
```
isFull(): boolean; 
```
Checks if the binary tree is full.
A binary tree is considered full if each node has either 0 or 2 children.

**Returns:** `boolean` - True if the binary tree is full, false otherwise.
### isPerfect
```
isPerfect(): boolean; 
```
Checks if the binary tree is perfect.
A binary tree is considered perfect if all nodes have exactly two children, and all leaf nodes are at the same level.

**Returns:** `boolean` True if the tree is perfect, false otherwise.
### keys
```
keys(order?: TraversalOrder): Generator<K, void, void>; 
```
Generates an iterator for the keys in the binary tree using the specified traversal order.

**Parameters:**
- `order?` - The order of traversal (default: InOrder).

**Returns:** `Generator<K, void, void>` - An iterator for the keys in the binary tree.
### maxDepth
```
maxDepth(): number; 
```
Gets the maximum depth of the binary tree.

**Returns:** `number` - The maximum depth of the binary tree.
### nodes
```
nodes(order?: TraversalOrder): Generator<BTNode<K, V>, void, void>; 
```
Generates an iterator for the nodes in the binary tree using the specified traversal order.

**Parameters:**
- `order?` - The order of traversal (default: InOrder).

**Returns:** `Generator<BTNode<K, V>, void, void>` - An iterator for the nodes in the binary tree.
### some
```
some(matchFn: MatchFn<K, V>, order?: TraversalOrder): boolean; 
```
Checks if any node in the binary tree matches a given condition using the specified traversal order.

**Parameters:**
- `matchFn` - The condition to match nodes.
- `order?` - The order of traversal (default: InOrder).

**Returns:** `boolean` - `true` if at least one node matches the condition, `false` otherwise.
### values
```
values(order?: TraversalOrder): Generator<V, void, void>; 
```
Generates an iterator for the values in the binary tree using the specified traversal order.

**Parameters:**
- `order?` - The order of traversal (default: InOrder).

**Returns:** `Generator<V, void, void>` - An iterator for the values in the binary tree.