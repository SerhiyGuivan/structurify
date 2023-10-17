export default class MaxBinaryHeap {
  // Private array to store heap elements
  private readonly values: number[];

  constructor() {
    this.values = [];
  }

  // Getter to return a shallow copy of the heap elements
  get getValues() {
    return [...this.values];
  }

  // Getter to check if the heap is empty
  get isEmpty() {
    return this.values.length === 0;
  }

  // Insert a new element into the heap
  insert(num: number) {
    // Push the new element onto the end of the array
    this.values.push(num);

    // If there's more than one element, adjust the heap to maintain the max-heap property
    if (this.values.length > 1) {
      let currentIndex = this.values.length - 1;
      let parentIndex = this.getParentIndex(currentIndex);

      while (this.isValidIndex(parentIndex) && this.values[currentIndex] > this.values[parentIndex]) {
        // Swap the current element with its parent
        [this.values[currentIndex], this.values[parentIndex]] = [this.values[parentIndex], this.values[currentIndex]];

        currentIndex = parentIndex;
        parentIndex = this.getParentIndex(currentIndex);
      }
    }
  }

  // Extract the maximum element (the root) from the heap
  extractMax(): number | undefined {
    // Check if the heap is empty
    if (this.isEmpty) return undefined;

    // Save the maximum value (the root of the heap)
    const removedMaxValue = this.values[0];

    // Remove the last value in the heap (at the end of the array)
    const lastValue = this.values.pop() as number;

    // If there's only one element left in the heap (after removing the root), return the maximum value
    if (this.isEmpty) return removedMaxValue;

    // Replace the root with the last value and restructure the heap
    this.values[0] = lastValue;
    this.restructureHeap(0);

    // Return the removed maximum value
    return removedMaxValue;
  }

  // Helper method to get the parent index
  private getParentIndex = (index: number): number => Math.floor((index - 1) / 2);

  // Helper methods for getting child indices and finding the largest child index
  private getLeftChildIndex = (index: number): number => 2 * index + 1;
  private getRightChildIndex = (index: number): number => 2 * index + 2;
  private getLargestChildIndex(leftChildIndex: number, rightChildIndex: number): number {
    return this.values[leftChildIndex] >= this.values[rightChildIndex] ? leftChildIndex : rightChildIndex;
  }

  // Helper method to check if an index is within the valid range
  private isValidIndex(index: number): boolean {
    return index >= 0 && index < this.values.length;
  }

  // Helper method to restructure the heap starting from a given index
  private restructureHeap(startIndex: number) {
    // Initialize variables for tracking the current index and child indices
    let currentIndex = startIndex;
    let leftChildIndex = this.getLeftChildIndex(currentIndex);
    let rightChildIndex = this.getRightChildIndex(currentIndex);

    // Continue to restructure the heap while the heap property is violated
    while (
      (this.isValidIndex(leftChildIndex) && this.values[leftChildIndex] > this.values[currentIndex]) ||
      (this.isValidIndex(rightChildIndex) && this.values[rightChildIndex] > this.values[currentIndex])
      ) {
      // Find the index of the larger child
      const largestChildIndex = this.getLargestChildIndex(leftChildIndex, rightChildIndex);

      // Swap the current element with the larger child
      [this.values[currentIndex], this.values[largestChildIndex]] = [this.values[largestChildIndex], this.values[currentIndex]];

      // Update the current index and child indices
      currentIndex = largestChildIndex;
      leftChildIndex = this.getLeftChildIndex(currentIndex);
      rightChildIndex = this.getRightChildIndex(currentIndex);
    }
  }
}
