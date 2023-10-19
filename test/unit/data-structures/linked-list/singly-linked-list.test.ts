import SinglyLinkedList from '../../../../src/data-structures/linked-list/singly-linked-list';

describe('SinglyLinkedList', () => {
  let list: SinglyLinkedList<number>;

  beforeEach(() => {
    list = new SinglyLinkedList<number>();
  });

  it('should initialize an empty linked list', () => {
    expect(list.getHeadNode).toBeNull();
    expect(list.getTailNode).toBeNull();
    expect(list.size).toBe(0);
  });

  it('should add elements to the end of the list using push', () => {
    list.push(1);
    list.push(2);

    expect(list.toArray()).toEqual([1, 2]);
  });

  it('should remove elements from the end of the list using pop', () => {
    list.push(1);
    list.push(2);
    const removed = list.pop();

    expect(removed).toBe(2);
    expect(list.toArray()).toEqual([1]);
  });

  it('should remove the first element using shift', () => {
    list.push(1);
    list.push(2);
    const removed = list.shift();

    expect(removed).toBe(1);
    expect(list.toArray()).toEqual([2]);
  });

  it('should add elements to the beginning of the list using unshift', () => {
    list.unshift(1);
    list.unshift(2);

    expect(list.toArray()).toEqual([2, 1]);
  });

  it('should get the element at a specific index', () => {
    list.push(1);
    list.push(2);
    list.push(3);

    expect(list.get(1)).toBe(2);
  });

  it('should set the element at a specific index', () => {
    list.push(1);
    list.push(2);
    list.push(3);

    const result = list.set(1, 4);

    expect(result).toBe(true);
    expect(list.toArray()).toEqual([1, 4, 3]);
  });

  it('should insert an element at a specific index', () => {
    list.push(1);
    list.push(2);
    list.push(3);

    const result = list.insert(1, 4);

    expect(result).toBe(true);
    expect(list.toArray()).toEqual([1, 4, 2, 3]);
  });

  it('should remove an element at a specific index', () => {
    list.push(1);
    list.push(2);
    list.push(3);

    const removed = list.remove(1);

    expect(removed).toBe(2);
    expect(list.toArray()).toEqual([1, 3]);
  });

  it('should reverse the linked list', () => {
    list.push(1);
    list.push(2);
    list.push(3);
    list.reverse();

    expect(list.toArray()).toEqual([3, 2, 1]);
  });

  it('should rotate the linked list', () => {
    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);
    list.rotate(2);

    expect(list.toArray()).toEqual([3, 4, 1, 2]);
  });

  it('should create a linked list from an array', () => {
    const data = [1, 2, 3, 4];
    list = SinglyLinkedList.fromArray(data);

    expect(list.toArray()).toEqual(data);
  });

  it('should clear the linked list', () => {
    list.push(1);
    list.push(2);
    list.clear();

    expect(list.toArray()).toEqual([]);
  });
});