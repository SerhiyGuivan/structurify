# Bubble Sort in JavaScript

**Bubble Sort** is a straighthood, easy to understand *sorting algorithm*. It works by looping through an array and comparing neighbouring elements, then swapping them if they are in the wrong order. In this fashion, the largest number *“bubbles”* to the top. This is repeated until the array is sorted.

## Bubble sort step-by-step

![](bubble-step-by-step.gif)

1. Start at the beginning of the array.
1. Is the adjacent element to the right less? If so, swap.
1. Move up to next element.
1. Repeat steps 2-3 until array is sorted.

## JavaScript implementation

### Simple, unoptimized solution

```js
function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        // SWAP
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}

bubbleSort([2, 3, 1, 2]) // [1, 2, 2, 3]
```

### Optimized Bubble Sort

```js
function bubbleSort(arr) {
  let noSwaps
  for (let i = arr.length - 1; i > 0; i--) {
    noSwaps = true
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        // SWAP
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        noSwaps = false
      }
    }
    if (noSwaps) break
  }
  return arr
}

bubbleSort([2, 3, 1, 2]) // [1, 2, 2, 3]
```

In the above solution, if there are no swaps during the inner loop, then it means that the array is sorted and we can break out of the outer loop; the sorted array is then returned.

## Performance summary

| Title                         | Value      |
|-------------------------------|------------|
| **Time complexity (best)**    | O(n)       |
| **Time complexity (average)** | O(n^2)     | 
| **Time complexity (worst)**   | O(n^2)     | 
| **Space complexity (worst)**  | O(1)       |
| **In-place/out-of-place?**    | In-place   |   
| **Stability?**                | Stable     | 
| **Comparison Sort?**          | Comparison |

There are usually always better options than **Bubble Sort**. For small arrays, or almost sorted arrays, *Insertion Sort* is usually better.
For large arrays, *Merge Sort* or *Quick Sort* will be much better.