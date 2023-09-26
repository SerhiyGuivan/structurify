# Selection Sort Algorithm in JavaScript

**Selection sort** works by going up an array and selecting the minimum value. The minimum value is then moved to the beginning of the array. The left side of the array becomes more sorted at the end of each pass through the array, until the whole array is sorted.

## Selection Sort step by step

![](selection-step-by-step.gif)

1. Pass in the array [5, 2, 4, 6, 1, 3] to selection sort.
1. Start at element 1 (5) and set it as the minimum value.
1. Compare element 1 (5) with element 2 (2). 2 is less than 5, so set 2 as the new minimum value.
1. Move up to element 3 (4).
1. 4 < 2? No, so move up to element 4 (6).
1. 6 < 2? No, so move up to element 5 (1).
1. 1 < 2? Yes, so set 1 as the new minimum.
1. Move up to element 6 (3).
1. 3 < 1? No.
1. We’ve reached the end of the array so swap element 1 (5) with our minimum element – element 5 (1) => [1, 2, 4, 6, 5, 3]
1. Element 1 is now sorted. We now start at element 2, pass through the array to find the minimum, and put it in second place. This process is repeated until we’ve checked that every element is in its correct place.

## JavaScript implementation

```js
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j
      }
    }
    if (lowest !== i) {
      // Swap
      ;[arr[i], arr[lowest]] = [arr[lowest], arr[i]]
    }
  }
  return arr
}

selectionSort([3, 5, 1, 2]) // [1, 2, 3, 5]
```

## Performance summary

| Title                         | Value      |
|-------------------------------|------------|
| **Time complexity (best)**    | O(n^2)     |
| **Time complexity (average)** | O(n^2)     | 
| **Time complexity (worst)**   | O(n^2)     | 
| **Space complexity (worst)**  | O(1)       |
| **In-place/out-of-place?**    | In-place   |   
| **Stability?**                | Unstable   | 
| **Comparison Sort?**          | Comparison |

**Selection Sort** is a simple, but inefficient *sorting algorithm*. It can outperform efficient algorithms like *Merge Sort* and *Quick Sort* for small arrays (<20 elements), but *Insertion Sort* is usually more effective in these cases.