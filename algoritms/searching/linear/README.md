# Linear Search in JavaScript

**Linear Search** is defined as a sequential *search algorithm* that starts at one end and goes through each element of a list until the desired element is found, otherwise the search continues till the end of the data set.

It is implemented under the hood in the JavaScript built-in methods ```indexOf()```, ```includes()```, ```find()```, and ```findIndex()```.

## Linear Search steps

![](linear-step-by-step.gif)

1. Linear search will accept an array and a target value.
1. Start searching from the beginning of the array.
1. Check if that value equals the target:
   * If so, stop and return that values index.
   * If not, move onto the next element.
1. Repeat step 3 until all elements are checked. If target not found, return -1.

## JavaScript implementation

```js
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
     if (arr[i] === target) return i;
  }
  return -1;
}

linearSearch([2,3,4,1,7], 1) // 3
```

## Performance summary

| Title                         | Value  |
|-------------------------------|--------|
| **Time complexity (best)**    | O(1)   |
| **Time complexity (average)** | O(n)   | 
| **Time complexity (worst)**   | O(n)   | 
| **Space complexity (worst)**  | O(1)   |

**Linear search** is the best we can do when searching in unsorted arrays, such as ```[2, 3, 1]```.

Whilst there are searching algorithms that can perform faster, such as *Binary Search*, they can only search through sorted arrays.