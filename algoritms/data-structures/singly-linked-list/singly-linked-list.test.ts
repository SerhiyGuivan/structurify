import SinglyLinkedList from "./singly-linked-list";

describe('SinglyLinkedList', () => {
  let list: SinglyLinkedList<number>;

  beforeEach(() => {
    list = new SinglyLinkedList<number>();
  });

  test('push adds elements to the end of the list', () => {
    list.push(1);
    list.push(2);
    list.push(3);

    expect(list.length).toBe(3);
    expect(list.head!.val).toBe(1);
    expect(list.tail!.val).toBe(3);
  });

  test('pop removes and returns the last element', () => {
    list.push(1);
    list.push(2);
    list.push(3);

    const removed = list.pop();

    expect(removed!.val).toBe(3);
    expect(list.length).toBe(2);
    expect(list.tail!.val).toBe(2);
  });

  test('shift removes and returns the first element', () => {
    list.push(1);
    list.push(2);
    list.push(3);

    const removed = list.shift();

    expect(removed!.val).toBe(1);
    expect(list.length).toBe(2);
    expect(list.head!.val).toBe(2);
  });

  test('unshift adds elements to the beginning of the list', () => {
    list.unshift(3);
    list.unshift(2);
    list.unshift(1);

    expect(list.length).toBe(3);
    expect(list.head!.val).toBe(1);
    expect(list.tail!.val).toBe(3);
  });

  test('get returns the element at the specified index', () => {
    list.push(1);
    list.push(2);
    list.push(3);

    expect(list.get(0)!.val).toBe(1);
    expect(list.get(1)!.val).toBe(2);
    expect(list.get(2)!.val).toBe(3);
    expect(list.get(3)).toBeNull();
  });

  test('set updates the value at the specified index', () => {
    list.push(1);
    list.push(2);
    list.push(3);

    expect(list.set(1, 4)).toBe(true);
    expect(list.get(1)!.val).toBe(4);
    expect(list.set(3, 5)).toBe(false);
  });

  test('insert inserts a new element at the specified index', () => {
    list.push(1);
    list.push(2);
    list.push(3);

    expect(list.insert(1, 4)).toBe(true);
    expect(list.length).toBe(4);
    expect(list.get(1)!.val).toBe(4);

    expect(list.insert(0, 0)).toBe(true);
    expect(list.head!.val).toBe(0);

    expect(list.length).toBe(5);
    expect(list.insert(6, 5)).toBe(false);
  });

  test('remove removes and returns the element at the specified index', () => {
    list.push(1);
    list.push(2);
    list.push(3);

    const removed = list.remove(1);

    expect(removed!.val).toBe(2);
    expect(list.length).toBe(2);
    expect(list.get(1)!.val).toBe(3);

    const removed2 = list.remove(0);

    expect(removed2!.val).toBe(1);
    expect(list.head!.val).toBe(3);

    const removed3 = list.remove(2);

    expect(removed3).toBeUndefined();
  });

  test('reverse reverses the order of elements', () => {
    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);

    list.reverse();

    expect(list.head!.val).toBe(4);
    expect(list.get(1)!.val).toBe(3);
    expect(list.get(2)!.val).toBe(2);
    expect(list.tail!.val).toBe(1);
  });
});