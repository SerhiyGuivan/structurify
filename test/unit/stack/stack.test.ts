import Stack from '../../../src/stack/stack';

describe('Stack', () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack<number>();
  });

  it('should initialize an empty stack', () => {
    expect(stack.size).toBe(0);
    expect(stack.isEmpty).toBe(true);
  });

  it('should push elements onto the stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.size).toBe(3);
    expect(stack.isEmpty).toBe(false);
  });

  it('should pop elements from the stack in LIFO order', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.size).toBe(0);
    expect(stack.isEmpty).toBe(true);
  });

  it('should clear the stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    stack.clear();

    expect(stack.size).toBe(0);
    expect(stack.isEmpty).toBe(true);
  });

  it('should peek at the top element without removing it', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.peek()).toBe(3);
    expect(stack.size).toBe(3);
  });

  it('should convert the stack to an array', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    const arr = stack.toArray();

    expect(arr).toEqual([1, 2, 3]);
  });
});
