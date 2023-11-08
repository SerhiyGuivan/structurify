# Structurify

This repository contains various data structures implemented in TypeScript, including: 
- [Singly Linked List](#singly-linked-list),
- [Doubly Linked List](#doubly-linked-list),
- [Queue](#queue),
- [Stack](#stack),
- [Binary Tree](#binary-tree),
- [Binary Search Tree](#binary-search-tree)

## Singly Linked List

A **singly linked list** is a special type of linked list in which each node has only one link that points to the next node in the linked list.

![](assets\SInglyLinkedList.drawio.png)

### Characteristics

- **Unidirectional Linkage**: Nodes point to the next node, enabling traversal in a single direction.
- **Dynamic Size**: Supports dynamic addition and removal of elements.
- **Memory Efficiency**: Requires less memory per node as it contains a single pointer to the next node.
- **No Bidirectional Traversal**: Only allows traversal from the head to the end; backward traversal requires reiterating the list.
- **No Random Access**: Accessing elements by index involves traversing the list, resulting in O(n) time complexity.
- **Simple Implementation**: Each node typically contains data and a reference to the next node.
- **Insertion and Deletion**: Efficient at the beginning of the list due to direct pointer adjustments.

### Applications of Singly Linked List:

Here are some applications of a singly linked list, including:

- **Implementing stacks and queues:** Singly linked lists can be used to implement stacks and queues. In a stack, elements are added and removed from one end of the list, while in a queue, elements are added at one end and removed from the other end of the list.
- **Navigation in web browsers:** Singly linked lists can be used to store the browsing history in web browsers. Each URL visited is stored as a node in the list, with the next pointer pointing to the next URL visited.
- **Implementing symbol tables:** Symbol tables are data structures used to store key-value pairs. Singly-linked lists can be used to implement symbol tables, with each node storing a key-value pair.
- **Hash table chaining:** Hash table chaining is a technique used to handle collisions in hash tables. It involves using a singly linked list to store all the keys that hash to the same index in the table.

### `SinglyLinkedList<T>`

#### Properties:
- `private head: SLLNode<T> | null`: Represents the head node of the linked list.
- `private tail: SLLNode<T> | null`: Represents the tail node of the linked list.
- `private length: number`: Represents the count of nodes in the linked list.

#### Getters:
- `headNode: SLLNode<T> | null`: Gets the head node of the linked list.
- `tailNode: SLLNode<T> | null`: Gets the tail node of the linked list.
- `size: number`: Gets the length of the linked list.

#### Methods:
- `static fromArray<T>(data: T[]): SinglyLinkedList<T>`: Creates a new singly linked list from an array of data.
- `push(val: T): SinglyLinkedList<T>`: Adds a new node with the given value to the end of the linked list.
- `pop(): T | undefined`: Removes and returns the last node from the linked list.
- `shift(): T | undefined`: Removes and returns the first node from the linked list.
- `unshift(val: T): SinglyLinkedList<T>`: Adds a new node with the given value to the beginning of the linked list.
- `get(index: number): T | undefined`: Gets the value at a specific index in the linked list.
- `getNode(index: number): SLLNode<T> | null`: Gets the node at a specific index in the linked list.
- `set(index: number, val: T): boolean`: Sets the value at a specific index in the linked list.
- `insert(index: number, val: T): boolean`: Inserts a new node with the given value at a specific index in the linked list.
- `remove(index: number): T | undefined`: Removes and returns a node at a specific index in the linked list.
- `clear(): void`: Clears the entire linked list.
- `reverse(): SinglyLinkedList<T>`: Reverses the order of nodes in the linked list.
- `rotate(num: number): SinglyLinkedList<T>`: Rotates the linked list by a specified number of positions.
- `toArray(): T[]`: Converts the linked list into an array and returns it.

### Time and Space complexity

| Method               | Time Complexity             | Space Complexity |
|----------------------|-----------------------------|------------------|
| `size`               | O(1)                        | O(1)             |
| `fromArray`          | O(n) (n is length of array) | O(n)             |
| `push(val)`          | O(1)                        | O(1)             |
| `pop()`              | O(n)                        | O(1)             |
| `shift()`            | O(1)                        | O(1)             |
| `unshift(val)`       | O(1)                        | O(1)             |
| `get(index)`         | O(n) (n is index)           | O(1)             |
| `getNode(index)`     | O(n) (n is index)           | O(1)             |
| `set(index, val)`    | O(n) (n is index)           | O(1)             |
| `insert(index, val)` | O(n) (n is index)           | O(1)             |
| `remove(index)`      | O(n) (n is index)           | O(1)             |
| `clear()`            | O(1)                        | O(1)             |
| `reverse()`          | O(n)                        | O(1)             |
| `rotate(num)`        | O(n)                        | O(1)             |
| `toArray()`          | O(n)                        | O(n)             |


## Doubly Linked List

A **Doubly linked list** is a special type of linked list in which each node contains references to both the next and previous nodes. This allows for traversal in both forward and backward directions, but it requires additional memory for the backward reference.

![](assets\DoubleLinkedList.drawio.png)

## Characteristics of a Doubly Linked List

- **Double Linkage**: Each node has pointers to both the previous and next nodes.
- **Bidirectional Traversal**: Enables easy movement in both forward and backward directions.
- **Dynamic Size**: Supports dynamic addition and removal of elements.
- **Memory Overhead**: Requires additional memory for storing two pointers per node.
- **Complexity**: Accessing elements by index is less efficient compared to arrays (O(n)).
- **Insertion and Deletion**: Operations are generally faster due to pointer adjustments instead of element shifting.
- **No Random Access**: No direct access using indices, traversal necessary.
- **Implementation**: Nodes contain data and two pointers (previous and next nodes).

### Applications of Double Linked List:
Here, are the uses of a doubly linked list:

- It can be used to implement various other data structures like hash tables, stacks, binary trees, etc.
- It can be used to implement functionalities such as undo/redo.
- It can be used in any software which requires forward and backward navigation e.g. music players, web browsers to move between previously visited and current pages, etc.
- Used by a thread scheduler in many operating systems to maintain a list of all running processes.
- Can also be used in games e.g. representing a deck of cards.

### `DoubleLinkedList<T>`

#### Properties:
- `private head: SLLNode<T> | null`: Represents the head node of the linked list.
- `private tail: SLLNode<T> | null`: Represents the tail node of the linked list.
- `private length: number`: Represents the count of nodes in the linked list.

#### Getters:
- `headNode: SLLNode<T> | null`: Gets the head node of the linked list.
- `tailNode: SLLNode<T> | null`: Gets the tail node of the linked list.
- `size: number`: Gets the length of the linked list.

#### Methods:
- **`static fromArray<T>(data: T[]): DoubleLinkedList<T>`**: Creates a new Double Linked List from an array of elements.
- **`push(val: T): DoubleLinkedList<T>`**: Appends an element to the end of the Double Linked List.
- **`pop(): T | undefined`**: Removes and returns the last element from the Double Linked List.
- **`shift(): T | undefined`**: Removes and returns the first element from the Double Linked List.
- **`unshift(val: T): DoubleLinkedList<T>`**: Prepends an element to the beginning of the Double Linked List.
- **`get(index: number): T | undefined`**: Retrieves the element at the specified index in the Double Linked List.
- **`getNode(index: number): DLLNode<T> | null`**: Retrieves the node at the specified index in the Double Linked List.
- **`set(index: number, val: T): boolean`**: Sets the element at the specified index in the Double Linked List.
- **`insert(index: number, val: T): boolean`**: Inserts an element at the specified index in the Double Linked List.
- **`remove(index: number): T | undefined`**: Removes and returns the element at the specified index in the Double Linked List.
- **`reverse(): DoubleLinkedList<T>`**: Reverses the order of elements in the Double Linked List.
- **`toArray(): T[]`**: Converts the Double Linked List to an array of elements.

### Time and Space complexity

| Method               | Time Complexity             | Space Complexity |
|----------------------|-----------------------------|------------------|
| `size`               | O(1)                        | O(1)             |
| `fromArray`          | O(n) (n is length of array) | O(n)             |
| `push(val)`          | O(1)                        | O(1)             |
| `pop()`              | O(1)                        | O(1)             |
| `shift()`            | O(1)                        | O(1)             |
| `unshift(val)`       | O(1)                        | O(1)             |
| `get(index)`         | O(n) (n is index)           | O(1)             |
| `getNode(index)`     | O(n) (n is index)           | O(1)             |
| `set(index, val)`    | O(n) (n is index)           | O(1)             |
| `insert(index, val)` | O(n) (n is index)           | O(1)             |
| `remove(index)`      | O(n) (n is index)           | O(1)             |
| `reverse()`          | O(n)                        | O(1)             |
| `toArray()`          | O(n)                        | O(n)             |


## Queue
### `Queue<T>`
A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle.

#### Getters:
- `size: number`: Gets the number of elements in the queue.
- `isEmpty: boolean`: Checks if the queue is empty.

#### Methods:
- `enqueue(val: T): number`: Adds an element to the rear of the queue and returns the new size of the queue.
- `dequeue(): T | undefined`: Removes and returns the front element of the queue.
- `peek(): T | undefined`: Returns the value of the front element without removing it.
- `clear(): void`: Removes all elements from the queue.
- `toArray(): T[]`: Converts the queue to an array, maintaining the order of elements.

## Stack
### `Stack<T>`
A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle.

#### Getters:
- `size: number`: Gets the number of elements in the stack.
- `isEmpty: boolean`: Checks if the stack is empty.

#### Methods:
- `push(val: T): void`: Pushes an element onto the stack.
- `pop(): T | undefined`: Pops the top element from the stack and returns it.
- `clear(): void`: Clears the stack.
- `peek(): T | undefined`: Peeks at the top element of the stack without removing it.
- `toArray(): T[]`: Converts the stack to an array.

## Binary Tree
### `BinaryTree<T>`
Binary Tree is a tree data structure in which each node has at most two children, referred to as the left child and the right child.

#### Getters
- `rootNode`: Accesses the root node of the binary tree.
- `size`: Retrieves the total number of nodes in the tree.

#### Methods:
- `insert(key: number, val: T): void`: Inserts a new node into the binary tree using level-order (BFS) traversal for insertion.
- `find(fn: MatchFn<T>, type: 'dfs' | 'bfs' = 'dfs'): BTNode<T> | null`: Finds a node in the binary tree using a matching function and search type.
- `remove(key: number): void`: Deletes the node with the given key from the binary tree by replacing it with the bottom-most and rightmost node.
- `maxDepth(): number`: Calculates the maximum depth of the tree.
- `bfs(fn: TraversalFn<T>): ReturnType<TraversalFn<T>>[]`: Performs a breadth-first traversal.
- `dfsPreOrder(fn: TraversalFn<T>): ReturnType<TraversalFn<T>>[]`: Performs a depth-first pre-order traversal.
- `dfsPostOrder(fn: TraversalFn<T>): ReturnType<TraversalFn<T>>[]`: Performs a depth-first post-order traversal.
- `dfsInOrder(fn: TraversalFn<T>): ReturnType<TraversalFn<T>>[]`: Performs a depth-first in-order traversal.
- `clear(): void`: Empties the binary tree by removing all nodes.

## Binary Search Tree
###  `BinarySearchTree<T>`

Binary Search Tree is a rooted binary tree data structure with the key of each internal node being greater than all the keys in the respective node's left subtree and less than the ones in its right subtree.

#### Constructor
- `constructor(comparator: BSTComparator)`: Initializes the BinarySearchTree with the specified comparator.

#### Getters
- `rootNode`: Accesses the root node of the binary search tree.
- `size`: Retrieves the total number of nodes in the tree.

#### Methods:
- `insert(key: number, val: T): void`: Inserts a node into the binary search tree based on the specified comparator.
- `get(key: number): BTNode<T> | null`: Retrieves a node from the tree using the given key.
- `maxDepth(): number`: Calculates the maximum depth of the tree.
- `bfs(fn: TraversalFn<T>): ReturnType<TraversalFn<T>>[]`: Performs a breadth-first traversal.
- `dfsPreOrder(fn: TraversalFn<T>): ReturnType<TraversalFn<T>>[]`: Performs a depth-first pre-order traversal.
- `dfsPostOrder(fn: TraversalFn<T>): ReturnType<TraversalFn<T>>[]`: Performs a depth-first post-order traversal.
- `dfsInOrder(fn: TraversalFn<T>): ReturnType<TraversalFn<T>>[]`: Performs a depth-first in-order traversal.
- `clear(): void`: Empties the binary tree by removing all nodes.

## How to Use
Each class can be used independently by creating an instance of the class and utilizing its available methods. Additionally, the classes support TypeScript for static type checking and are generic, allowing them to hold various data types.

### Example:
```typescript
import { SinglyLinkedList } from 'structurify';

const list = new SinglyLinkedList<number>();
list.push(10);
list.push(20);
list.push(30);

console.log(list.toArray()); // Output: [10, 20, 30]
