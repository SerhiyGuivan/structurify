import Queue from '@/data-structures/queue/queue';

describe('Queue', () => {
  let queue: Queue<number | string>;

  beforeEach(() => {
    queue = new Queue();
  });

  it('should initialize an empty queue', () => {
    expect(queue.front).toBeUndefined()
    expect(queue.rear).toBeUndefined()
    expect(queue.size).toBe(0);
    expect(queue.isEmpty).toBe(true);
  });

  describe('enqueue', () => {
    it('should enqueue elements and return the correct size', () => {
      expect(queue.enqueue('Apple')).toBe(1);
      expect(queue.enqueue('Banana')).toBe(2);
      expect(queue.enqueue('Pineapple')).toBe(3);

      expect(queue.rear).toBe('Pineapple');
      expect(queue.front).toBe('Apple');
      expect(queue.size).toBe(3);
      expect(queue.isEmpty).toBe(false);
    });
  })

  describe('dequeue', () => {
    it('should dequeue elements in the correct order', () => {
      queue.enqueue('Apple');
      queue.enqueue('Banana');
      queue.enqueue('Pineapple');

      expect(queue.dequeue()).toBe('Apple');
      expect(queue.size).toBe(2);

      expect(queue.dequeue()).toBe('Banana');
      expect(queue.size).toBe(1);

      expect(queue.dequeue()).toBe('Pineapple');
      expect(queue.size).toBe(0);
      expect(queue.isEmpty).toBe(true);
    });

    it('should return undefined on dequeue from an empty queue', () => {
      expect(queue.dequeue()).toBeUndefined()
    })
  })

  describe('peek', () => {
    it('should return the front value', () => {
      queue.enqueue(42);
      queue.enqueue(99);

      expect(queue.peek()).toBe(42);
      expect(queue.size).toBe(2);
    });
  })

  describe('peekRear', () => {
    it('should return the rear value', () => {
      queue.enqueue(42);
      queue.enqueue(99);

      expect(queue.peekRear()).toBe(99);
      expect(queue.size).toBe(2);
    });
  })

  describe('clear', () => {
    it('should clear the queue', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      queue.clear();

      expect(queue.front).toBeUndefined()
      expect(queue.rear).toBeUndefined()
      expect(queue.size).toBe(0);
      expect(queue.isEmpty).toBe(true);
    });
  })

  describe('toArray', () => {
    it('should convert the queue to an array', () => {
      queue.enqueue('apple');
      queue.enqueue('banana');
      queue.enqueue('cherry');

      expect(queue.toArray()).toEqual(['apple', 'banana', 'cherry']);
    });
  })
});