class BSTNode {
  val: number
  left: BSTNode | null
  right: BSTNode | null
  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null
  }
}

export default class BinarySearchTree {
  private _root: BSTNode | null
  constructor() {
    this._root = null;
  }

  get root(): BSTNode | null {
    return this._root;
  }
  insert(val: number): BinarySearchTree {

    const newNode = new BSTNode(val);

    if (this._root === null) {
      this._root = newNode;
      return this;
    }

    let currentNode = this._root;

    // eslint-disable-next-line no-constant-condition
    while (true) {

      if (val === currentNode.val) return this

      if (val < currentNode.val) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      }

      else if (val > currentNode.val ) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right
      }

    }

  }

  contains(val: number): boolean {
    let currentNode = this._root;

    while (currentNode !== null) {

      if (val === currentNode.val) return true;

      if (val < currentNode.val) {
        currentNode = currentNode.left;
      }

      else if (val > currentNode.val ) {
        currentNode = currentNode.right;
      }
    }

    return false;
  }
}