import Queue from '../../../../src/data-structures/queue/queue';

describe('Queue', () => {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue<number>();
  });

  describe('enqueue', () => {
    it('should add elements to the rear of the queue', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      expect(queue.getSize).toBe(3);
    });
  });

  describe('dequeue', () => {
    it('should remove and return the front element from the queue', () => {
      queue.enqueue(1);
      queue.enqueue(2);

      const dequeued = queue.dequeue();

      expect(dequeued).toBe(1);
      expect(queue.getSize).toBe(1);
    });

    it('should throw an error when dequeuing from an empty queue', () => {
      expect(() => queue.dequeue()).toThrowError('Queue underflow: Cannot dequeue from an empty queue.');
    });
  });

  describe('peek', () => {
    it('should return the front element without removing it', () => {
      queue.enqueue(1);
      queue.enqueue(2);

      const peeked = queue.peek();

      expect(peeked).toBe(1);
      expect(queue.getSize).toBe(2);
    });

    it('should return undefined for an empty queue', () => {
      expect(queue.peek()).toBeUndefined();
    });
  });

  describe('isEmpty', () => {
    it('should return true for an empty queue', () => {
      expect(queue.isEmpty).toBe(true);
    });

    it('should return false for a non-empty queue', () => {
      queue.enqueue(1);
      expect(queue.isEmpty).toBe(false);
    });
  });

  describe('clear', () => {
    it('should remove all elements from the queue', () => {
      queue.enqueue(1);
      queue.enqueue(2);

      queue.clear();

      expect(queue.getSize).toBe(0);
      expect(queue.isEmpty).toBe(true);
    });
  });

  describe('toArray', () => {
    it('should convert the queue to an array in the correct order', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      const arr = queue.toArray();

      expect(arr).toEqual([1, 2, 3]);
    });
  });
});