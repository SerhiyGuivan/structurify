import {Key} from "@/types/binary-tree/index";

/**
 * Represents a node in a binary tree.
 * @template K - The type of the key (number or string).
 * @template V - The type of the value stored in the node.
 */
export class BTNode<K extends Key, V> {
  key: K
  val: V
  left: BTNode<K, V> | null
  right: BTNode<K, V> | null
  /**
   * Creates a new instance of the BTNode class.
   * @param {K} key - The key associated with the node.
   * @param {V} val - The value associated with the node.
   */
  constructor(key: K, val: V) {
    this.key = key
    this.val = val;
    this.left = null;
    this.right = null
  }
}