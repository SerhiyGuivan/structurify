## Important algorithm concepts

### Big O Notation

**Big O Notation** is used to analyse the performance of an algorithm. It specifically looks at the worst-case scenario of an algorithm.

It tells us how long a function will take to execute or how much space in memory will be taken up as the input to that function approaches infinity (becomes very large).

![](big-o.jpg)

Algorithms with **Big O(1)** are as good as it gets: if we increase the size of the input, the execution time remains constant.

Algorithms with **Big O(n!)** are “horrible”: if we increase the input size even just a little, the execution time can rise dramatically.

**Big O** is a very important concept, and is fundamental to understanding algorithms

### Algorithm stability

Stable means that two elements with equal values will appear in the same order in the sorted output as they appear in the unsorted input array.

| Stable sorting algorithms | Unstable sorting algorithms |
|---------------------------|-----------------------------|
| Bubble Sort               | Selection Sort              |
| Insertion Sort            | Heap Sort                   |
| Merge Sort                | Quick Sort                  |
| Radix Sort                |                             |

### In-place algorithms

An *in-place* sorting algorithm is an algorithm which transforms input using no auxiliary data structures; however, a small amount of extra storage space is allowed for auxiliary variables.

In simple terms, *“in-place”* just means that the input is overwritten (via swapping or replacement) by the output as the algorithm executes.

*In-place* algorithms have good space-complexity (take up less space in memory).

The opposite of an in-place algorithm is an out-of-place algorithm, which does require auxiliary data structures.

| In-place algorithms | Out-of-place |
|---------------------|--------------|
| Bubble Sort         | Merge Sort   |
| Selection Sort      |              |
| Insertion Sort      |              |
| Heap Sort           |              |

### Comparison algorithms

A comparison sorting algorithm is an algorithm that only reads a list of elements through a single abstract comparison operation (usually a “less than” or “equal to”) that determines which of the two elements should occur first in the final sorted output array.

**Comparison sorting algorithms:** *Bubble Sort*, *Selection Sort*, *Insertion Sort*, *Merge Sort*, *Quick Sort*.

**Non-comparison-type sorting algorithm:** *Radix Sort*

### More about Algorithm Concepts

* [Searching and Sorting Algorithms in JavaScript | The Ultimate Guide](https://www.doabledanny.com/searching-and-sorting-algorithms-in-javascript)
* [Big O Notation in JavaScript | The Ultimate Beginners Guide with Examples](https://www.doabledanny.com/big-o-notation-in-javascript)
* [Important Algorithm Concepts | Algorithm Stability, In-place Algorithms, and Comparison Algorithms](https://www.doabledanny.com/algorithm-concepts)