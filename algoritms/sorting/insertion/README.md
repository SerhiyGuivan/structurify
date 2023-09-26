# Insertion Sort Algorithm in JavaScript

**Insertion Sort** works by comparing an element with the elements to its left, until it reaches an element that is smaller than it; the element is then inserted in front of the smaller element.

In computer science terms, Insertion Sort is known as an *“Online algorithm”*

## Insertion sort step-by-step

![](insertion-sort-step-by-step.gif)

1. Pass the unsorted array [5, 2, 4, 6, 1, 3] into Insertion Sort.
1. Start at the second element (2) of the array and compare it with its neighbouring element to the left (5).
1. Is 2 < 5? Yes, so insert 2 into 5’s place => [2, 5, 4, 6, 1, 3]
1. Now move up to the 3rd element (4) and compare with the value to the left (5).
1. Is 4 < 5? Yes, so move to the next element on the left.
1. Is 4 < 2? No, so insert in front of 2 => [2, 4, 5, 6, 1, 3]. As you can see, the numbers in bold are in order.
1. Now move up to the 4th element (6) and compare with the value to the left (5).
1. Is 6 < 5? No, leave where it is => [2, 4, 5, 6, 1, 3].
1. Now move up to the 5th element (1) and compare with the value to the left (6).
1. Is 1 < 6? Yes.
1. Is 1 < 5? Yes.
1. Is 1 < 4? Yes.
1. Is 1 < 2? Yes. We have reached the beginning of the array, so insert at front => [1, 2, 4, 5, 6, 3].
1. Now move up to 5th element (3) and compare with the value to the left (6).
1. Is 3 < 6? Yes.
1. Is 3 < 5? Yes.
1. Is 3 < 4? Yes.
1. Is 3 < 2? No => Insert after 2 => [1, 2, 3, 4, 5, 6]. The array is now sorted!

## JavaScript implementation

```js
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i]
    let j
    for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = currentValue
  }
  return arr
}

insertionSort([2, 1, 3, 7, 5]) // [1, 2, 3, 5, 7]
```

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

### Insertion Sort is good for:
+ Small arrays
+ Any size, almost sorted arrays
+ Sorting data in real-time

### Insertion Sort is bad for:
- Larger arrays that aren’t *“almost sorted”*
