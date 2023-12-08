import { BTNode } from '../../data-structures/binary-tree/node/node';

export type Key = number | string;

export type Entries<K extends Key = number, V = any> = [K, V][]

export type TraversalFn<K extends Key = number, V = any> = (val: V, key: K, node: BTNode<K, V>) => void;

export type MatchFn<K extends Key = number, V = any> = (val: V, key: K, node: BTNode<K, V>) => boolean;

export type BSTComparator<K extends Key> = (a: K, b: K) => number;