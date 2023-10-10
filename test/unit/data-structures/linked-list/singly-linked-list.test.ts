import SinglyLinkedList from '../../../../src/data-structures/linked-list/singly-linked-list';

describe('SinglyLinkedList', () => {
  let list: SinglyLinkedList<number>;

  beforeEach(() => {
    list = new SinglyLinkedList<number>();
  });

  describe('push', () => {
    it('should add elements to the end of the list', () => {
      list.push(1);
      list.push(2);
      expect(list.toArray()).toEqual([1, 2]);
    });
  });

  describe('pop', () => {
    it('should remove and return the last element', () => {
      list.push(1);
      list.push(2);
      expect(list.pop()).toBe(2);
      expect(list.toArray()).toEqual([1]);
    });

    it('should return undefined when the list is empty', () => {
      expect(list.pop()).toBeUndefined();
    });
  });

  describe('shift', () => {
    it('should remove and return the first element', () => {
      list.push(1);
      list.push(2);
      expect(list.shift()).toBe(1);
      expect(list.toArray()).toEqual([2]);
    });

    it('should return undefined when the list is empty', () => {
      expect(list.shift()).toBeUndefined();
    });
  });

  describe('unshift', () => {
    it('should add elements to the beginning of the list', () => {
      list.unshift(1);
      list.unshift(2);
      expect(list.toArray()).toEqual([2, 1]);
    });
  });

  describe('get', () => {
    it('should retrieve the value at the specified index', () => {
      list.push(1);
      list.push(2);
      list.push(3);
      expect(list.get(1)).toBe(2);
    });

    it('should return undefined for an out-of-bounds index', () => {
      list.push(1);
      expect(list.get(1)).toBeUndefined();
    });
  });

  describe('set', () => {
    it('should update the value at the specified index', () => {
      list.push(1);
      list.push(2);
      list.push(3);
      list.set(1, 4);
      expect(list.toArray()).toEqual([1, 4, 3]);
    });

    it('should return false for an out-of-bounds index', () => {
      list.push(1);
      expect(list.set(1, 2)).toBe(false);
    });
  });

  describe('insert', () => {
    it('should insert a value at the specified index', () => {
      list.push(1);
      list.push(2);
      list.insert(1, 3);
      expect(list.toArray()).toEqual([1, 3, 2]);
    });

    it('should return false for an out-of-bounds index', () => {
      list.push(1);
      expect(list.insert(2, 2)).toBe(false);
    });
  });

  describe('remove', () => {
    it('should remove and return the value at the specified index', () => {
      list.push(1);
      list.push(2);
      list.push(3);
      expect(list.remove(1)).toBe(2);
      expect(list.toArray()).toEqual([1, 3]);
    });

    it('should return undefined for an out-of-bounds index', () => {
      list.push(1);
      expect(list.remove(1)).toBeUndefined();
    });
  });

  describe('reverse', () => {
    it('should reverse the order of nodes in the list', () => {
      list.push(1);
      list.push(2);
      list.push(3);
      list.reverse();
      expect(list.toArray()).toEqual([3, 2, 1]);
    });

    it('should return an empty list as is', () => {
      expect(list.reverse().toArray()).toEqual([]);
    });
  });

  describe('rotate', () => {
    it('should rotate the order of nodes in the list to the right', () => {
      list.push(1);
      list.push(2);
      list.push(3);
      list.push(4);
      list.push(5);
      list.rotate(2);
      expect(list.toArray()).toEqual([3, 4, 5, 1, 2]);
    });

    it('should rotate the order of nodes in the list to the left', () => {
      list.push(1);
      list.push(2);
      list.push(3);
      list.push(4);
      list.push(5);
      list.rotate(-1);
      expect(list.toArray()).toEqual([5, 1, 2, 3, 4]);
    });

    it('should return the same list for a rotation of 0', () => {
      list.push(1);
      list.push(2);
      expect(list.rotate(0).toArray()).toEqual([1, 2]);
    });
  });

  describe('toArray', () => {
    it('should convert the linked list into an array', () => {
      list.push(1);
      list.push(2);
      list.push(3);
      expect(list.toArray()).toEqual([1, 2, 3]);
    });

    it('should return an empty array for an empty list', () => {
      expect(list.toArray()).toEqual([]);
    });
  });
});