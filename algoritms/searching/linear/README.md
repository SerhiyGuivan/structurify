# Linear Search in JavaScript

Linear search is a very common searching algorithm; It is implemented under the hood in the JavaScript built-in methods ```indexOf()```, ```includes()```, ```find()```, and ```findIndex()```.

It is also the most straight-forward searching algorithm: it simply loops over each element in an array and stops if that element equals our target value.

## Linear Search steps

![](linear-step-by-step.gif)

1. Linear search will accept an array and a target value.
1. Start searching from the beginning of the array.
1. Check if that value equals the target:
   * If so, stop and return that values index.
   * If not, move onto the next element.
1. Repeat step 3 until all elements are checked. If target not found, return -1.

## Performance summary

| Title                         | Value  |
|-------------------------------|--------|
| **Time complexity (best)**    | O(1)   |
| **Time complexity (average)** | O(n)   | 
| **Time complexity (worst)**   | O(n)   | 
| **Space complexity (worst)**  | O(1)   |

Linear search is the best we can do when searching in unsorted arrays, such as ```[2, 3, 1]```.

Whilst there are searching algorithms that can perform faster, such as Binary Search, they can only search through sorted arrays.