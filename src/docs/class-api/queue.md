# Class Queue
```
Queue<T> 
```
Queue class represents a basic queue data structure that follows the First-In-First-Out (FIFO) principle.
It uses a singly linked list internally for efficient enqueue and dequeue operations.

`T` - The type of elements stored in the queue.

### Content
#### Accessors:
- [front](#front)
- [isEmpty](#isempty)
- [rear](#rear)
- [size](#size)
#### Instance methods:
- [clear](#clear)
- [dequeue](#dequeue)
- [enqueue](#enqueue)
- [peek](#peek)
- [peekRear](#peekrear)
- [toArray](#toarray)

## Constructor
```
constructor(); 
```
Creates an instance of the Queue class.
The underlying data structure is a singly linked list.

## Accessors
### front
```
get front(): T | undefined; 
```
Retrieves the value at the front of the queue.

**Returns:** `T | undefined` The value at the front of the queue, or undefined if the queue is empty.
### isEmpty
```
get isEmpty(): boolean; 
```
Checks if the queue is empty.

**Returns:** `boolean` - True if the queue is empty, false otherwise.
### rear
```
get rear(): T | undefined; 
```
Retrieves the value at the rear of the queue.

**Returns:** `T | undefined` The value at the rear of the queue, or undefined if the queue is empty.
### size
```
get size(): number; 
```
Returns the number of elements in the queue.

**Returns:** `number` - The size of the queue.
## Instance methods
### clear
```
clear(): void; 
```
Removes all elements from the queue

**Returns:** `void`
### dequeue
```
dequeue(): T | undefined; 
```
Removes and returns the element from the front of the queue.

**Returns:** `T | undefined` - The value dequeued from the front of the queue.
### enqueue
```
enqueue(val: T): number; 
```
Adds an element to the rear of the queue and returns the new size of the queue.

**Parameters:**
- `val` - The value to enqueue.

**Returns:** `number` - The updated size of the queue.
### peek
```
peek(): T | undefined; 
```
Retrieves the value at the front of the queue without removing it.

**Returns:** `T | undefined` - The value at the front of the queue.
### peekRear
```
peekRear(): T | undefined; 
```
Retrieves the value at the rear of the queue without removing it.

**Returns:** `T | undefined` - The value at the rear of the queue.
### toArray
```
toArray(): T[]; 
```
Returns an array representation of the queue.

**Returns:** `T[]` - An array containing all elements in the queue.
