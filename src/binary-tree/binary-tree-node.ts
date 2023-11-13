export default class BTNode<T> {
  key: number
  val: T
  left: BTNode<T> | null
  right: BTNode<T> | null
  constructor(key: number, val: T) {
    this.key = key
    this.val = val;
    this.left = null;
    this.right = null
  }
}