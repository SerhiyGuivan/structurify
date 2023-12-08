# Class Stack
```
Stack<T> 
```
Represents a stack data structure that follows the Last-In-First-Out (LIFO) principle.
It uses a singly linked list internally for efficient push and pop operations.

`T` - The type of elements in the stack.

### Content
#### Accessors:
- [isEmpty](#isempty)
- [size](#size)
- [top](#top)
#### Instance methods:
- [clear](#clear)
- [peek](#peek)
- [pop](#pop)
- [push](#push)
- [toArray](#toarray)

## Constructor
```
constructor(); 
```
Creates a new instance of the Stack class.
The underlying data structure is a singly linked list.

## Accessors
### isEmpty
```
get isEmpty(): boolean; 
```
Checks if the stack is empty.

**Returns:** `boolean` - True if the stack is empty, false otherwise.
### size
```
get size(): number; 
```
Returns the number of elements in the stack.

**Returns:** `number` - The size of the stack.
### top
```
get top(): T | undefined; 
```
Retrieves the value at the top of the stack.

**Returns:** `T | undefined` The value at the front of the queue, or undefined if the queue is empty.
## Instance methods
### clear
```
clear(): void; 
```
Removes all elements from the stack.

**Returns:** `void`
### peek
```
peek(): T | undefined; 
```
Retrieves the value at the top of the stack without removing it.

**Returns:** `T | undefined` The value at the top of the stack, or undefined if the stack is empty.
### pop
```
pop(): T | undefined; 
```
Removes and returns the element from the top of the stack.

**Returns:** `T | undefined` The value popped from the stack, or undefined if the stack is empty.
### push
```
push(val: T): void; 
```
Adds a new element to the top of the stack.

**Parameters:**
- `val` - The value to be pushed onto the stack.

**Returns:** `void`
### toArray
```
toArray(): T[]; 
```
Returns an array representation of the stack.

**Returns:** `T[]` An array containing the elements of the stack in top-to-bottom order.