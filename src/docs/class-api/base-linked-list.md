# Class BaseLinkedList
```
abstract BaseLinkedList<V, N> 
```
Represents a base linked list.

`V` - Type of the value held by the list.
`N` - Type of the reference to the nodes in the list.

### Content
#### Accessors:
- [head](#head)
- [isEmpty](#isempty)
- [size](#size)
- [tail](#tail)
#### Instance methods:
- [clear](#clear)

## Constructor
```
protected constructor(); 
```
## Accessors
### head
```
get head(): N | null; 
```
Get the reference to the head node of the list.

**Returns:** `N | null` - Reference to the head node.
### isEmpty
```
get isEmpty(): boolean; 
```
Check if the list is empty.

**Returns:** `boolean` - Indicates whether the list is empty or not.
### size
```
get size(): number; 
```
Get the size of the list.

**Returns:** `number` - The size of the list.
### tail
```
get tail(): N | null; 
```
Get the reference to the tail node of the list.

**Returns:** `N | null` - Reference to the tail node.
## Instance methods
### clear
```
clear(): void; 
```
Clears the linked list by resetting its properties.

**Returns:** `void`