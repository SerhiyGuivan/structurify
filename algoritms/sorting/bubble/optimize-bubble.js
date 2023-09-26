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
