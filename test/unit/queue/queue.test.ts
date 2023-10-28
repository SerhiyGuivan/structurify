import Queue from '../../../src/queue/queue';

describe('Queue', () => {
  let queue: Queue<number | string>;

  beforeEach(() => {
    queue = new Queue();
  });

  test('should initialize an empty queue', () => {
    expect(queue.size).toBe(0);
    expect(queue.isEmpty).toBe(true);
  });

  test('should enqueue elements and return the correct size', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.size).toBe(3);
    expect(queue.isEmpty).toBe(false);
  });

  test('should dequeue elements in the correct order', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.isEmpty).toBe(true);
  });

  test('should return the front element with peek', () => {
    queue.enqueue(42);
    queue.enqueue(99);

    expect(queue.peek()).toBe(42);
  });

  test('should clear the queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    queue.clear();

    expect(queue.size).toBe(0);
    expect(queue.isEmpty).toBe(true);
  });

  test('should convert the queue to an array', () => {
    queue.enqueue('apple');
    queue.enqueue('banana');
    queue.enqueue('cherry');

    expect(queue.toArray()).toEqual(['apple', 'banana', 'cherry']);
  });

  test('should handle an empty queue', () => {
    expect(queue.dequeue()).toBeUndefined();
    expect(queue.peek()).toBeUndefined();
  });
});