# Binary Search in JavaScript

**Binary Search** is defined as a *searching algorithm* used in a sorted array by **repeatedly dividing the search interval in half**. The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(log N).

## Conditions

* The data structure must be sorted.

## Binary search steps

![](binary-step-by-step.gif)

1. Divide the search space into two halves by finding the middle index “mid”.
1. Compare the middle element of the search space with the key.
1. If the key is found at middle element, the process is terminated.
1. If the key is not found at middle element, choose which half will be used as the next search space.
   * If the key is smaller than the middle element, then the left side is used for next search.
   * If the key is larger than the middle element, then the right side is used for next search.
1. This process is continued until the key is found or the total search space is exhausted.

## JavaScript implementation

```js
function binarySearch(arr, target) {
  let start = 0
  let end = arr.length - 1
  while (start <= end) {
    let middle = Math.floor((start + end) / 2)
    if (arr[middle] < target) {
      // Search the right half
      start = middle + 1
    } else if (arr[middle] > target) {
      // Search the left half
      end = middle - 1
    } else if (arr[middle] === target) {
      // Found target
      return middle
    }
  }
  // Target not found
  return -1
}

binarySearch([1, 2, 3, 4], 1) // 1
```

## Performance summary

| Title                         | Value     |
|-------------------------------|-----------|
| **Time complexity (best)**    | O(1)      |
| **Time complexity (average)** | O(log(n)) | 
| **Time complexity (worst)**   | O(log(n)) | 
| **Space complexity (worst)**  | O(1)      |

**Binary Search** has much better time complexity than *Linear Search*, which has a Big O(n) – linear time.
