import SinglyLinkedList from '@/data-structures/linked-list/singly-linked-list';
describe('SinglyLinkedList.fromArray', () => {
  it('should create a linked list from an array', () => {
    const list = SinglyLinkedList.fromArray<number>([10, 20, 30]);

    const {
      head,
      tail
    } = list

    const node2 = list.nodeAt(1)

    expect(head.val).toBe(10)
    expect(head.next).toEqual(node2)

    expect(node2.val).toBe(20)
    expect(node2.next).toEqual(tail)

    expect(tail.val).toBe(30)
    expect(tail.next).toBeNull();

    expect(list.size).toEqual(3);
    expect(list.isEmpty).toBeFalsy();

    expect(list.toArray()).toEqual([10, 20, 30]);
  });
})

describe('SinglyLinkedList', () => {
  let list: SinglyLinkedList<number>;

  beforeEach(() => {
    list = new SinglyLinkedList<number>();
  });

  it('should initialize an empty linked list', () => {
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    expect(list.size).toBe(0);
    expect(list.isEmpty).toBeTruthy();
  });

  describe('push', () => {
    it('should add a node to an empty list', () => {
      list.push(10);

      expect(list.tail.val).toBe(10);
      expect(list.tail.next).toBeNull();
      expect(list.tail).toEqual(list.head);

      expect(list.size).toBe(1);
      expect(list.isEmpty).toBeFalsy();
    });

    it('should add nodes to the end of the list', () => {
      list = SinglyLinkedList.fromArray<number>([10, 20]);
      expect(list.size).toEqual(2);

      list.push(30);
      list.push(40);

      expect(list.tail?.val).toBe(40)
      expect(list.tail?.next).toBeNull()
      expect(list.size).toEqual(4);
    });
  });

  describe('pop', () => {
    it('should remove and return the value of last node', () => {
      list = SinglyLinkedList.fromArray<number>([1, 2, 3]);

      expect(list.pop()).toBe(3);

      expect(list.tail?.val).toBe(2)
      expect(list.tail?.next).toBeNull();

      expect(list.size).toEqual(2);
    });

    it('should return the value and empty the list when popping from a list with a single node', () => {
      list.push(1);

      expect(list.pop()).toBe(1);

      expect(list.tail).toBeNull()
      expect(list.head).toBeNull()

      expect(list.size).toEqual(0);
      expect(list.isEmpty).toBeTruthy();
    })

    it('should return undefined when the list is empty', () => {
      expect(list.pop()).toBeUndefined();
    });
  });

  describe('shift', () => {
    it('should remove and return the value of first node', () => {
      list = SinglyLinkedList.fromArray<number>([1, 2, 3]);

      expect(list.shift()).toBe(1);

      expect(list.head?.val).toBe(2)
      expect(list.head?.next?.val).toBe(3)

      expect(list.size).toEqual(2);
    });

    it('should return the value and empty the list when shifting from a list with a single node', () => {
      list.push(1);

      expect(list.shift()).toBe(1);

      expect(list.head).toBeNull()
      expect(list.tail).toBeNull()

      expect(list.size).toEqual(0);
      expect(list.isEmpty).toBeTruthy();
    })

    it('should return undefined when the list is empty', () => {
      expect(list.shift()).toBeUndefined();
    });
  });

  describe('unshift', () => {
    it('should add a node to an empty list', () => {
      list.unshift(1);

      expect(list.head.val).toBe(1);
      expect(list.head.next).toBeNull();
      expect(list.head).toEqual(list.tail);

      expect(list.size).toBe(1);
      expect(list.isEmpty).toBeFalsy();
    });

    it('should add elements to the beginning of the list', () => {
      list = SinglyLinkedList.fromArray<number>([3, 4, 5]);
      expect(list.size).toEqual(3);

      list.unshift(2);
      list.unshift(1);

      expect(list.head?.val).toBe(1)
      expect(list.head?.next?.val).toBe(2)

      expect(list.size).toEqual(5);
    });
  });

  describe('at', () => {
    it('should return the value at a valid index', () => {
      list = SinglyLinkedList.fromArray<number>([100, 200, 300]);

      expect(list.at(0)).toBe(100);
      expect(list.at(1)).toBe(200);
      expect(list.at(2)).toBe(300);
    });

    it('should return undefined for an invalid index', () => {
      list = SinglyLinkedList.fromArray<number>([100, 200, 300]);

      expect(list.at(-1)).toBeUndefined();
      expect(list.at(3)).toBeUndefined();
    });

    it('should return undefined when the list is empty', () => {
      expect(list.at(0)).toBeUndefined();
    });
  })

  describe('nodeAt', () => {
    it('should return the node at a valid index', () => {
      list = SinglyLinkedList.fromArray<number>([100, 200, 300]);

      let node1 = list.nodeAt(0);
      let node2 = list.nodeAt(1);
      let node3 = list.nodeAt(2);

      expect(node1.val).toBe(100);
      expect(node1.next).toBe(node2);

      expect(node2.val).toBe(200);
      expect(node2.next).toBe(node3);

      expect(node3.val).toBe(300);
      expect(node3.next).toBeNull();
    });

    it('should return null for an invalid index', () => {
      list = SinglyLinkedList.fromArray<number>([100, 200, 300]);

      expect(list.nodeAt(-1)).toBeNull();
      expect(list.nodeAt(3)).toBeNull();
    });

    it('should return null when the list is empty', () => {
      expect(list.nodeAt(0)).toBeNull();
    });
  })

  describe('setAt', () => {
    it('should set the value at a valid index', () => {
      list = SinglyLinkedList.fromArray<number>([10, 20]);

      expect(list.setAt(1, 20)).toBe(true);
      expect(list.at(1)).toBe(20);
    });

    it('should return false for setting value at an invalid index', () => {
      expect(list.setAt(3, 25)).toBe(false);
      expect(list.at(3)).toBeUndefined();
    });
  })

  describe('insertAt', () => {
    it('should insert at the beginning of the list when the list is empty', () => {
      expect(list.insertAt(0, 1)).toBe(true);

      expect(list.at(0)).toBe(1);

      expect(list.head?.val).toBe(1);
      expect(list.head?.next).toBeNull()

      expect(list.size).toBe(1);
    });

    it('should insert at the beginning of the list when the list is not empty', () => {
      list = SinglyLinkedList.fromArray<number>([2, 3]);

      expect(list.insertAt(0, 1)).toBe(true);

      expect(list.at(0)).toBe(1);

      expect(list.head?.val).toBe(1);
      expect(list.head?.next?.val).toEqual(2)

      expect(list.size).toBe(3);
    });

    it('should insert at the end of the list when using the size index', () => {
      list = SinglyLinkedList.fromArray<number>([10, 20]);

      expect(list.insertAt(2, 30)).toBe(true);

      expect(list.at(2)).toBe(30);

      expect(list.tail?.val).toBe(30);
      expect(list.tail?.next).toBeNull();

      expect(list.size).toBe(3);
    });


    it('should insert in the middle of the list', () => {
      list = SinglyLinkedList.fromArray<number>([100, 300]);

      expect(list.insertAt(1, 200)).toBe(true);

      expect(list.at(1)).toBe(200);

      expect(list.head?.next?.val).toBe(200);
      expect(list.head?.next?.next).toBe(list.tail);

      expect(list.size).toBe(3);
    });

    it('should not insert, should return false if index exceeds size', () => {
      list = SinglyLinkedList.fromArray<number>([15, 30]);

      expect(list.insertAt(3, 45)).toBe(false);

      expect(list.at(3)).toBeUndefined();
      expect(list.size).toBe(2);
    });

    it('should not insert, should return false for a negative index', () => {
      list.push(20)

      expect(list.insertAt(-1, 40)).toBe(false);

      expect(list.at(-1)).toBeUndefined();
      expect(list.size).toBe(1);
    });
  })

  describe('deleteAt', () => {
    it('should delete and return the value at the specified index', () => {
      list = SinglyLinkedList.fromArray<number>([10, 20, 30]);

      expect(list.deleteAt(1)).toBe(20);

      expect(list.head?.val).toBe(10)
      expect(list.head?.next).toBe(list.tail)
      expect(list.head?.next?.next).toBeNull()

      expect(list.size).toBe(2);
    });
    it('should not delete, should return undefined if index is higher than tail index', () => {
      list = SinglyLinkedList.fromArray<number>([2, 4, 8]);

      expect(list.deleteAt(3)).toBeUndefined();

      expect(list.toArray()).toEqual([2, 4, 8])
      expect(list.size).toBe(3);
    });

    it('shouldn\'t delete, should return false for a negative index', () => {
      list = SinglyLinkedList.fromArray<number>([1, 3, 5]);

      expect(list.deleteAt(-1)).toBeUndefined();

      expect(list.toArray()).toEqual([1, 3, 5])
      expect(list.size).toBe(3);
    })
  })

  describe('reverse', () => {
    it('should reverse the linked list', () => {
      list = SinglyLinkedList.fromArray<number>([1, 2, 3]);

      list.reverse();

      expect(list.toArray()).toEqual([3, 2, 1]);
    });
  })

  describe('rotateByN', () => {
    it('should rotate the linked list', () => {
      list = SinglyLinkedList.fromArray<number>([1, 2, 3, 4]);

      list.rotateByN(2);

      expect(list.toArray()).toEqual([3, 4, 1, 2]);
    });
  })

  describe('clear', () => {
    it('should clear the linked list', () => {
      list = SinglyLinkedList.fromArray<number>([1, 20, 300]);

      list.clear();

      expect(list.head).toBeNull();
      expect(list.tail).toBeNull();
      expect(list.size).toBe(0)
      expect(list.isEmpty).toBeTruthy()
    });
  })

  describe('toArray', () => {
    it('should return an empty array for an empty list', () => {
      expect(list.toArray()).toEqual([])
    });

    it('should return an array with values', () => {
      list = SinglyLinkedList.fromArray<number>([1, 2, 3]);

      expect(list.toArray()).toEqual([1, 2, 3])
    });
  })
});
