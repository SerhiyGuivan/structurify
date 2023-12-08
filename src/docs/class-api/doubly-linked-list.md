# Class DoublyLinkedList
```
DoublyLinkedList<T> extends BaseLinkedList<T, DLLNode<T>> 
```
Represents a doubly linked list.

`T` - Type of the value held by the list.

### Hierarchy
- DoublyLinkedList
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
static fromArray<T>(data: T[]): DoublyLinkedList<T>; 
```
Creates a doubly linked list from an array.

`T` undefined

**Parameters:**
- `data` - Array to create the list from.

**Returns:** `DoublyLinkedList<T>` - Doubly linked list created from the array.
## Instance methods
### at
```
at(index: number): T | undefined; 
```
Returns the value at the specified index in the list.

**Parameters:**
- `index` - Index to retrieve the value from.

**Returns:** `T | undefined` - Value at the index or undefined if the index is out of range.
### deleteAt
```
deleteAt(index: number): T | undefined; 
```
Deletes the node at the specified index in the list.

**Parameters:**
- `index` - Index of the node to be deleted.

**Returns:** `T | undefined` - Value of the deleted node or undefined if the index is out of range.
### insertAt
```
insertAt(index: number, val: T): boolean; 
```
Inserts a new node with the provided value at the specified index in the list.

**Parameters:**
- `index` - Index where the value should be inserted.
- `val` - Value to insert at the index.

**Returns:** `boolean` - True if the value is successfully inserted, false if the index is out of range.
### nodeAt
```
nodeAt(index: number): DLLNode<T> | null; 
```
Retrieves the node at the specified index in the list.

**Parameters:**
- `index` - Index to retrieve the node from.

**Returns:** `DLLNode<T> | null` - Node at the index or null if the index is out of range.
### pop
```
pop(): T | undefined; 
```
Removes and returns the value from the end of the list.

**Returns:** `T | undefined` - Removed value or undefined if the list is empty.
### push
```
push(val: T): DoublyLinkedList<T>; 
```
Adds a new node with the provided value to the end of the list.

**Parameters:**
- `val` - Value to be added to the list.

**Returns:** `DoublyLinkedList<T>` - Updated list.
### reverse
```
reverse(): DoublyLinkedList<T>; 
```
Reverses the order of nodes in the list.

**Returns:** `DoublyLinkedList<T>` - The reversed list.
### setAt
```
setAt(index: number, val: T): boolean; 
```
Sets the value at the specified index in the list.

**Parameters:**
- `index` - Index where the value should be set.
- `val` - Value to set at the index.

**Returns:** `boolean` - True if the value is successfully set, false if the index is out of range.
### shift
```
shift(): T | undefined; 
```
Removes and returns the value from the beginning of the list.

**Returns:** `T | undefined` - Removed value or undefined if the list is empty.
### toArray
```
toArray(): T[]; 
```
Converts the list into an array of its values.

**Returns:** `T[]` - Array containing the values of the list.
### unshift
```
unshift(val: T): DoublyLinkedList<T>; 
```
Adds a new node with the provided value to the beginning of the list.

**Parameters:**
- `val` - Value to be added to the beginning of the list.

**Returns:** `DoublyLinkedList<T>` - Updated list.