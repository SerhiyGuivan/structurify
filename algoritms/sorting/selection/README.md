# Selection Sort Algorithm in JavaScript

Selection Sort is one of the more straight-forward sorting algorithms and is so a great sorting algorithm to introduce to beginners.

## Selection Sort step by step

Selection sort works by going up an array and selecting the minimum value. The minimum value is then moved to the beginning of the array. The left side of the array becomes more sorted at the end of each pass through the array, until the whole array is sorted.

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

Selection Sort is a simple, but inefficient Sorting algorithm. It outperforms Quick Sort and Merge Sort if the array is small, but so does Insertion Sort, and Insertion Sort is usually more effective in these cases.