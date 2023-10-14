export default class MaxBinaryHeap {
  private readonly values: number[]
  constructor() {
    this.values = [];
  }
  get getValues() {
    return [...this.values];
  }
  insert (num: number) {
    this.values.push(num);

    let currentIndex = this.values.length - 1;
    let parentIndex = this.getParentIndex(currentIndex);

    while (currentIndex > 0 && this.values[currentIndex] > this.values[parentIndex]) {

      [this.values[currentIndex], this.values[parentIndex]] = [this.values[parentIndex], this.values[currentIndex]];

      currentIndex = parentIndex;
      parentIndex = this.getParentIndex(currentIndex);
    }
  }

  private getParentIndex = ( index: number): number =>  Math.floor((index - 1) / 2)
}

