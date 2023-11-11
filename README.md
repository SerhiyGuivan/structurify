<p align="center">
  <img src="assets/logo.drawio.png" alt="Structurify">
</p>

# Structurify

The TypeScript collection includes fundamental data structures used in computer science and software development. It provides implementations of various data structures that can be imported and used in your projects. 

- [Singly Linked List](#singly-linked-list),
- [Doubly Linked List](#doubly-linked-list),
- [Queue](#queue),
- [Stack](#stack),
- [Binary Tree](#binary-tree),
- [Binary Search Tree](#binary-search-tree)

## Installation and Usage

### npm

```
npm i structurify --save
```

### esm

```ts
import {
  SinglyLinkedList, DoublyLinkedList, Queue, Stack, BinaryTree, BinarySearchTree,
} from 'structurify';
```

### commonJS

```ts
const {
  SinglyLinkedList, DoublyLinkedList, Queue, Stack, BinaryTree, BinarySearchTree,
} = require('structurify');
```

## Singly Linked List
A linear data structure where elements (nodes) are linked in a sequential manner, each pointing to the next node in the sequence.
- Provides methods for insertion, deletion, traversal, and access.
- Useful for scenarios requiring efficient insertion and deletion at the beginning or end of the list.

![](assets/SinglyLinkedList.drawio.png)

### `SinglyLinkedList<T>`

Represents a singly linked list.

#### Constructor
- `SinglyLinkedList()`: Initializes an empty singly linked list.

#### Properties
- `get head: SLLNode<T> | null`: Reference to the head node of the list.
- `get isEmpty: boolean`: Indicates whether the list is empty or not.
- `get size: number`: The size of the list.
- `get tail: SLLNode<T> | null`: Reference to the tail node of the list.

#### Static Methods
- `static fromArray<T>(data: T[]): SinglyLinkedList<T>`: Creates a singly linked list from an array.

#### Instance Methods
- `at(index: number): T | undefined`: Gets the value at the specified index.
- `clear(): void`: Clears the linked list by resetting its properties.
- `deleteAt(index: number): T | undefined`: Deletes the value at the specified index.
- `insertAt(index: number, val: T): boolean`: Inserts a value at the specified index.
- `nodeAt(index: number): SLLNode<T> | null`: Gets the node at the specified index.
- `pop(): T | undefined`: Removes and returns the value from the end of the list.
- `push(val: T): SinglyLinkedList<T>`: Adds a new node with the provided value to the end of the list.
- `reverse(): SinglyLinkedList<T>`: Reverses the order of the nodes in the list.
- `rotateByN(n: number): SinglyLinkedList<T>`: Rotates the list by the specified number of positions.
- `setAt(index: number, val: T): boolean`: Sets the value at the specified index.
- `shift(): T | undefined`: Removes and returns the value from the beginning of the list.
- `toArray(): T[]`: Converts the list to an array.
- `unshift(val: T): SinglyLinkedList<T>`: Adds a new node with the provided value to the beginning of the list.

### How to use
```ts
// Example usage
import { SinglyLinkedList } from 'structurify';

const myList = new SinglyLinkedList<number>();
myList.push(5).push(10).push(15);

console.log(myList.toArray()); // Output: [5, 10, 15]

myList.pop();
console.log(myList.toArray()); // Output: [5, 10]
```

### Time and Space complexity
| Method      | Time Complexity | Space Complexity |
|-------------|-----------------|------------------|
| `at`        | O(n)            | O(1)             |
| `clear`     | O(1)            | O(1)             |
| `deleteAt`  | O(n)            | O(1)             |
| `fromArray` | O(n)            | O(n)             |
| `insertAt`  | O(n)            | O(1)             |
| `nodeAt`    | O(n)            | O(1)             |
| `pop`       | O(n)            | O(1)             |
| `push`      | O(1)            | O(1)             |
| `reverse`   | O(n)            | O(1)             |
| `rotateByN` | O(n)            | O(1)             |
| `shift`     | O(1)            | O(1)             |
| `setAt`     | O(n)            | O(1)             |
| `toArray`   | O(n)            | O(n)             |
| `unshift`   | O(1)            | O(1)             |

## Doubly Linked List
Similar to the Singly Linked List, but each node also has a reference to the previous node, allowing two-way traversal.
- Supports insertion, deletion, and traversal from both ends.
- Well-suited for applications needing easy access to previous elements.

![](assets/DoublyLinkedList.drawio.png)

### `DoublyLinkedList<T>`

Represents a doubly linked list.

#### Constructor
- `DoublyLinkedList()`: Initializes an empty double linked list.

#### Properties:
- `get head: SLLNode<T> | null`: Reference to the head node of the list.
- `get isEmpty: boolean`: Indicates whether the list is empty or not.
- `get size: number`: The size of the list.
- `get tail: SLLNode<T> | null`: Reference to the tail node of the list.

#### Static Methods
- `static fromArray<T>(data: T[]): DoublyLinkedList<T>`: Creates a double linked list from an array.

#### Instance Methods
- `at(index: number): T | undefined`: Gets the value at the specified index.
- `clear(): void`: Clears the linked list by resetting its properties.
- `deleteAt(index: number): T | undefined`: Deletes the value at the specified index.
- `insertAt(index: number, val: T): boolean`: Inserts a value at the specified index.
- `nodeAt(index: number): SLLNode<T> | null`: Gets the node at the specified index.
- `pop(): T | undefined`: Removes and returns the value from the end of the list.
- `push(val: T): DoublyLinkedList<T>`: Adds a new node with the provided value to the end of the list.
- `reverse(): DoublyLinkedList<T>`: Reverses the order of the nodes in the list.
- `setAt(index: number, val: T): boolean`: Sets the value at the specified index.
- `shift(): T | undefined`: Removes and returns the value from the beginning of the list.
- `toArray(): T[]`: Converts the list to an array.
- `unshift(val: T): DoublyLinkedList<T>`: Adds a new node with the provided value to the beginning of the list.

### How to use
```ts
import { DoublyLinkedList } from 'structurify';

const dll = new DoubleLinkedList<number>();
dll.push(5).push(10).push(15);

console.log(dll.toArray()); // Output: [5, 10, 15]

dll.reverse();
console.log(dll.toArray()); // Output: [15, 10, 5]

dll.deleteAt(1);
console.log(dll.toArray()); // Output: [15, 5]
```

### Time and Space complexity
| Method      | Time Complexity | Space Complexity |
|-------------|-----------------|------------------|
| `at`        | O(n)            | O(1)             |
| `clear`     | O(1)            | O(1)             |
| `deleteAt`  | O(n)            | O(1)             |
| `fromArray` | O(n)            | O(n)             |
| `insertAt`  | O(n)            | O(1)             |
| `nodeAt`    | O(n)            | O(1)             |
| `pop`       | O(1)            | O(1)             |
| `push`      | O(1)            | O(1)             |
| `reverse`   | O(n)            | O(1)             |
| `shift`     | O(1)            | O(1)             |
| `setAt`     | O(n)            | O(1)             |
| `toArray`   | O(n)            | O(n)             |
| `unshift`   | O(1)            | O(1)             |

## Queue
Follows the First In, First Out (FIFO) principle, allowing data to be inserted from one end (rear) and removed from the other end (front).
- Offers methods like enqueue (add to the rear) and dequeue (remove from the front).
- Useful in scenarios where data needs to be processed in a sequential order.

![](assets/Queue.drawio.png)

### `Queue<T>`
Queue class represents a basic queue data structure that follows the First-In-First-Out (FIFO) principle.
It uses a singly linked list internally for efficient enqueue and dequeue operations.

#### Constructor
- `Queue()`: Creates an instance of the Queue class.

#### Properties:
- `get isEmpty(): : boolean`: Checks if the queue is empty.
- `get front(): T | undefined`: Retrieves the value at the front of the queue.
- `get rear(): T | undefined`: Retrieves the value at the rear of the queue.
- `get size(): number`: Returns the number of elements in the queue.

#### Instance Methods:
- `clear(): void`: Clears all elements from the queue.
- `dequeue(): T | undefined`: Removes and returns the element from the front of the queue.
- `enqueue(val: T): number`: Adds an element to the rear of the queue and returns the new size of the queue.
- `peek(): T | undefined`: Retrieves the value at the front of the queue without removing it.
- `peekRear(): T | undefined`: Retrieves the value at the rear of the queue without removing it.
- `toArray(): T[]`: Converts the queue to an array.

### How to use
```ts
import { Queue } from 'structurify';

const queue = new Queue<number>();

queue.enqueue(5);
queue.enqueue(10);
queue.enqueue(15);

console.log(queue.dequeue()); // Output: 5

console.log(queue.peek()); // Output: 10

console.log(queue.toArray()); // Output: [10, 15]

queue.clear();

console.log(queue.isEmpty); // Output: true
```

### Time and Space complexity
| Method     | Time Complexity | Space Complexity |
|------------|-----------------|------------------|
| `clear`    | O(1)            | O(1)             |
| `dequeue`  | O(1)            | O(1)             |
| `enqueue`  | O(1)            | O(1)             |
| `peek`     | O(1)            | O(1)             |
| `peekRear` | O(1)            | O(1)             |
| `toArray`  | O(n)            | O(n)             |

## Stack
Adheres to the Last In, First Out (LIFO) principle, enabling data to be added and removed from the same end (top).
- Provides methods such as push (add to the top) and pop (remove from the top).
- Commonly used in applications involving function calls, expression evaluation, and backtracking.

### `Stack<T>`

#### Properties:
- `list: SinglyLinkedList<T>`: An instance of singly linked list used to manage the elements in the stack.

#### Getters:
- `size: number`: Gets the number of elements in the stack.
- `isEmpty: boolean`: Checks if the stack is empty.

#### Methods:
- `push(val: T): void`: Pushes an element onto the stack.
- `pop(): T | undefined`: Pops the top element from the stack and returns it.
- `clear(): void`: Clears the stack.
- `peek(): T | undefined`: Peeks at the top element of the stack without removing it.
- `toArray(): T[]`: Converts the stack to an array.

### How to use
```ts
import { Stack } from 'structurify';

const stack = new Stack<number>();

stack.push(5);
stack.push(10);
stack.push(15);

console.log(stack.pop()); // Output: 15

console.log(stack.peek()); // Output: 10

console.log(stack.toArray()); // Output: [10, 5]

stack.clear();

console.log(stack.isEmpty); // Output: true
```

### Time and Space complexity
| Method    | Time Complexity             | Space Complexity            |
|-----------|-----------------------------|-----------------------------|
| `size`    | O(1)                        | O(1)                        |
| `isEmpty` | O(1)                        | O(1)                        |
| `push`    | O(1)                        | O(1)                        |
| `pop`     | O(1)                        | O(1)                        |
| `clear`   | O(1)                        | O(1)                        |
| `peek`    | O(1)                        | O(1)                        |
| `toArray` | O(n) (n: size of the stack) | O(n) (n: size of the stack) |

## Binary Tree
A hierarchical structure where each node has at most two children.
- Supports various tree traversal methods like level-order, in-order, pre-order, and post-order.
- Crucial for applications requiring hierarchical data representation.

### `BinaryTree<T>`

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
A specialized form of a binary tree where the left child is less than the parent and the right child is greater.
- Provides efficient searching and sorting capabilities.
- Ideal for tasks involving ordered data and quick search operations.

###  `BinarySearchTree<T>`

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
