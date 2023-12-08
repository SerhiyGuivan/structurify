# Class SinglyLinkedList
```
SinglyLinkedList<T> extends BaseLinkedList<T, SLLNode<T>> 
```
Represents a singly linked list.

`T` - Type of the value held by the list.

### Hierarchy
- SinglyLinkedList
  - [BaseLinkedList](base-linked-list.md)

### Content
#### Static methods:
- [fromArray](#fromarray)
#### Instance methods:
- [at](#at)
- [deleteAt](#deleteat)
- [insertAt](#insertat)
- [nodeAt](#nodeat)
- [pop](#pop)
- [push](#push)
- [reverse](#reverse)
- [rotateByN](#rotatebyn)
- [setAt](#setat)
- [shift](#shift)
- [toArray](#toarray)
- [unshift](#unshift)

## Constructor
```
constructor(); 
```
## Static methods
### fromArray
```
static fromArray<T>(data: T[]): SinglyLinkedList<T>; 
```
Create a singly linked list from an array.

`T` undefined

**Parameters:**
- `data` - Array to create the list from.

**Returns:** `SinglyLinkedList<T>` - Singly linked list created from the array.
## Instance methods
### at
```
at(index: number): T | undefined; 
```
Get the value at the specified index.

**Parameters:**
- `index` - Index of the value to retrieve.

**Returns:** `T | undefined` - Retrieved value.
### deleteAt
```
deleteAt(index: number): T | undefined; 
```
Delete the value at the specified index.

**Parameters:**
- `index` - Index where the value needs to be deleted.

**Returns:** `T | undefined` - Deleted value or undefined if index is invalid.
### insertAt
```
insertAt(index: number, val: T): boolean; 
```
Insert a value at the specified index.

**Parameters:**
- `index` - Index where the value needs to be inserted.
- `val` - Value to be inserted.

**Returns:** `boolean` - Indicates if the value was successfully inserted or not.
### nodeAt
```
nodeAt(index: number): SLLNode<T> | null; 
```
Get the node at the specified index.

**Parameters:**
- `index` - Index of the node to retrieve.

**Returns:** `SLLNode<T> | null` - Retrieved node or null if index is invalid.
### pop
```
pop(): T | undefined; 
```
Removes and returns the value from the end of the list.

**Returns:** `T | undefined` - Removed value.
### push
```
push(val: T): SinglyLinkedList<T>; 
```
Adds a new node with the provided value to the end of the list.

**Parameters:**
- `val` - Value to be added to the list.

**Returns:** `SinglyLinkedList<T>` - Updated list.
### reverse
```
reverse(): SinglyLinkedList<T>; 
```
Reverse the order of the nodes in the list.

**Returns:** `SinglyLinkedList<T>` - The reversed list.
### rotateByN
```
rotateByN(n: number): SinglyLinkedList<T>; 
```
Rotate the list by the specified number of positions.

**Parameters:**
- `n` - Number of positions to rotate the list.

**Returns:** `SinglyLinkedList<T>` - The rotated list.
### setAt
```
setAt(index: number, val: T): boolean; 
```
Set the value at the specified index.

**Parameters:**
- `index` - Index where the value needs to be set.
- `val` - Value to be set.

**Returns:** `boolean` - Indicates if the value was successfully set or not.
### shift
```
shift(): T | undefined; 
```
Removes and returns the value from the beginning of the list.

**Returns:** `T | undefined` - Removed value.
### toArray
```
toArray(): T[]; 
```
Convert the list to an array.

**Returns:** `T[]` - An array containing the elements of the list in order.
### unshift
```
unshift(val: T): SinglyLinkedList<T>; 
```
Adds a new node with the provided value to the beginning of the list.

**Parameters:**
- `val` - Value to be added to the beginning of the list.

**Returns:** `SinglyLinkedList<T>` - Updated list.