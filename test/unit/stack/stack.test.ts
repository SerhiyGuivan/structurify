import Stack from '../../../src/stack/stack';

describe('Stack', () => {
  let stack: Stack<number | string>;

  beforeEach(() => {
    stack = new Stack();
  });

  it('should initialize an empty stack', () => {
    expect(stack.size).toBe(0);
    expect(stack.isEmpty).toBe(true);
  });

  describe('push', () => {
    it('should push elements onto the stack', () => {
      stack.push('Apple');
      stack.push('Banana');
      stack.push('Lemon');

      expect(stack.size).toBe(3);
      expect(stack.top).toBe('Lemon');
      expect(stack.isEmpty).toBe(false);
    });
  })

  describe('pop', () => {
    it('should pop elements from the stack in LIFO order', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);

      expect(stack.pop()).toBe(3);
      expect(stack.pop()).toBe(2);
      expect(stack.pop()).toBe(1);

      expect(stack.top).toBeUndefined();
      expect(stack.size).toBe(0);
      expect(stack.isEmpty).toBe(true);
    });

    it('should return undefined on pop from an empty stack', () => {
      expect(stack.pop()).toBeUndefined()
    })
  })

  describe('peek', () => {
    it('should peek at the top element without removing it', () => {
      stack.push('Apple');
      stack.push('Banana');
      stack.push('Lemon');

      expect(stack.peek()).toBe('Lemon');
      expect(stack.size).toBe(3);
    });
  })

  describe('clear', () => {
    it('should clear the stack', () => {
      stack.push(10);
      stack.push(20);
      stack.push(30);

      stack.clear();

      expect(stack.top).toBeUndefined();
      expect(stack.size).toBe(0);
      expect(stack.isEmpty).toBe(true);
    });
  })

  describe('toArray', () => {
    it('should convert the stack to an array', () => {
      stack.push(12);
      stack.push(38);
      stack.push(45);

      expect(stack.toArray()).toEqual([12, 38, 45]);
    });
  })
});
