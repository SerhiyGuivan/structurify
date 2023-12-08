# Changelog

## Version 0.1.3 (2023-12-08)

### Updated BaseBinaryTree
- Renamed `rootNode` accessor to `root`
- Removed methods: `bfs`, `dfsPreOrder`, `dfsPostOrder`, `dfsInOrder`,
- Added instances methods: 
  - `forEach`: Iterates over each node in the binary tree, in a specified order and applies a callback function.
  - `findNode`: Finds a node in the binary tree that matches a given condition using the specified traversal order.
  - `findValue`: Finds the value in the binary tree that matches a given condition using the specified traversal order.
  - `some`: Checks if any node in the binary tree matches a given condition using the specified traversal order.
  - `every`: Checks if all nodes in the binary tree match a given condition using the specified traversal order.
  - `isEqual`: Checks if the binary tree is equal to another tree by comparing their structures.
  - `isPerfect`: Checks if the binary tree is perfect.
  - `isFull`: Checks if the binary tree is full.
  - `isComplete`: Checks if the binary tree is complete.
  - `isBalanced`: Checks if the binary tree is balanced.
  - `keys`: Generates an iterator for the keys in the binary tree using the specified traversal order.
  - `values`: Generates an iterator for the values in the binary tree using the specified traversal order.
  - `entries`: Generates an iterator for the entries (key-value pairs) in the binary tree using the specified traversal order.
  - `nodes`: Generates an iterator for the nodes in the binary tree using the specified traversal order.
- Updated unit test.
- Updated documentation.
   
### Updated BinaryTree
- Updated logic in constructor.
- Removed methods: `insert`, `find`, `remove`.
- Added static methods: 
  - `fromEntries`: Creates a new BinaryTree instance from an array of entries using level-order (BFS) traversal for insertion.
- Added instances methods: 
  - `get`: Gets the value associated with the specified key in the binary tree, employing the chosen traversal order 
  - `node`: Gets the node with the specified key in the binary tree, employing the chosen traversal order. 
  - `has`: Checks if the binary tree contains a node with the specified key, employing the chosen traversal order.
  - `set`: Sets the value associated with the specified key in the binary tree, employing the chosen traversal order. 
  - `add`: Adds a new node with the given key and value to the binary tree, employing level-order (BFS) traversal for insertion.
  - `addMany`: Adds multiple nodes with the given keys and values to the binary tree, employing level-order (BFS) traversal for insertion.
  - `delete`: Deletes the node with the specified key from the binary tree.
- Updated unit test.
- Updated documentation.

### Updated BinarySearchTree
- Updated logic in constructor
- Removed methods: `insert`
- Added static methods: 
  - `fromEntries`: Create a BinarySearchTree from an array of entries. 
  - `fromSortedEntries`: Create a BinarySearchTree from an array of sorted entries.
- Added instance methods: 
  - `node`: Get the node associated with a key in the BST.
  - `has`: Check if a key exists in the BST.
  - `add`: Add a new node with the given key and value to the BST.
  - `addMany`: Adds multiple nodes with the given keys and values to the BST.
  - `set`: Set the value associated with a key in the BST.
  - `delete`: Delete a node with the given key from the BST using InOrder successor.
- Updated unit test.
- Updated documentation.

## Version 0.1.2 (2023-11-12)
- Enhanced the documentation for the Stack class using the JSDoc format.
- Added new properties:
  - `top`: Represents the top element of the stack.
- Updated unit test to ensure its functionality.
- Updated documentation in `README.md` to reflect the changes and provide comprehensive information about the Stack class.

## Version 0.1.1 (2023-11-11)
- Enhanced the documentation for the Queue class using the JSDoc format.
- Added new properties:
  - `front`: Represents the front element of the queue.
  - `rear`: Represents the rear element of the queue.
- Added new method:
  - `peekRear`: Allows users to peek at the rear element of the queue.
- Updated unit test to ensure its functionality.
- Updated documentation in `README.md` to reflect the changes and provide comprehensive information about the Queue class and its new features.