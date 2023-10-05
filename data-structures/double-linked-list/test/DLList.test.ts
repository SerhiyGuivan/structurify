import DLList from '../src/DLList'; // Import the DLList class from your code

describe('DLList', () => {
  let list: DLList<number>;

  beforeEach(() => {
    list = new DLList<number>();
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