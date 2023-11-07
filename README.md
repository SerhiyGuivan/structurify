# Structurify

This repository contains various data structures implemented in TypeScript, including: 
- [Singly Linked List](#singly-linked-list),
- [Doubly Linked List](#doubly-linked-list),
- [Queue](#queue),
- [Stack](#stack),
- [Binary Tree](#binary-tree),
- [Binary Search Tree](#binary-search-tree)

## Singly Linked List
### `SinglyLinkedList<T>`
A singly linked list is a linear data structure where each element points to the next one in the sequence. It allows for efficient insertion and deletion operations.

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

## Doubly Linked List
### `DoubleLinkedList<T>`
A doubly linked list is an extension of a singly linked list where each node keeps a reference to the previous and next nodes.

#### Getters:
- `headNode: DLLNode<T> | null`: Gets the first node in the DLL.
- `tailNode: DLLNode<T> | null`: Gets the last node in the DLL.
- `size: number`: Gets the number of elements in the DLL.

#### Methods:
- `static fromArray<T>(data: T[]): DoubleLinkedList<T>`: Creates a new DLL from an array of elements.
- `push(val: T): DoubleLinkedList<T>`: Appends an element to the end of the DLL.
- `pop(): T | undefined`: Removes and returns the last element from the DLL.
- `shift(): T | undefined`: Removes and returns the first element from the DLL.
- `unshift(val: T): DoubleLinkedList<T>`: Prepends an element to the beginning of the DLL.
- `get(index: number): T | undefined`: Gets the element at the specified index in the DLL.
- `getNode(index: number): DLLNode<T> | null`: Gets the node at the specified index in the DLL.
- `set(index: number, val: T): boolean`: Sets the element at the specified index in the DLL.
- `insert(index: number, val: T): boolean`: Inserts an element at the specified index in the DLL.
- `remove(index: number): T | undefined`: Removes and returns the element at the specified index in the DLL.
- `reverse(): DoubleLinkedList<T>`: Reverses the order of elements in the DLL.
- `toArray(): T[]`: Converts the DLL to an array of elements.

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
- 
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
