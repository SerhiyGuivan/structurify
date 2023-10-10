import Stack from '../../../../src/data-structures/stack/stack';

describe('Stack', () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack<number>();
  });

  describe('push', () => {
    it('should add elements to the stack', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);

      expect(stack.getSize).toBe(3);
    });
  });

  describe('pop', () => {
    it('should remove and return the top element from the stack', () => {
      stack.push(1);
      stack.push(2);

      const popped = stack.pop();

      expect(popped).toBe(2);
      expect(stack.getSize).toBe(1);
    });

    it('should throw an error when popping from an empty stack', () => {
      expect(() => stack.pop()).toThrowError('Stack underflow: Cannot pop from an empty stack.');
    });
  });

  describe('peek', () => {
    it('should return the top element without removing it', () => {
      stack.push(1);
      stack.push(2);

      const peeked = stack.peek();

      expect(peeked).toBe(2);
      expect(stack.getSize).toBe(2);
    });

    it('should return undefined for an empty stack', () => {
      expect(stack.peek()).toBeUndefined();
    });
  });

  describe('isEmpty', () => {
    it('should return true for an empty stack', () => {
      expect(stack.isEmpty()).toBe(true);
    });

    it('should return false for a non-empty stack', () => {
      stack.push(1);
      expect(stack.isEmpty()).toBe(false);
    });
  });

  describe('clear', () => {
    it('should remove all elements from the stack', () => {
      stack.push(1);
      stack.push(2);

      stack.clear();

      expect(stack.getSize).toBe(0);
      expect(stack.isEmpty()).toBe(true);
    });
  });

  describe('toArray', () => {
    it('should convert the stack to an array', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);

      const arr = stack.toArray();

      expect(arr).toEqual([1, 2, 3]);
    });
  });
});
