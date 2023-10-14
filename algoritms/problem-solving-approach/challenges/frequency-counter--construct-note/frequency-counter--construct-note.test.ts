import constructNote from './frequency-counter--construct-note';

describe('constructNote', () => {
  test('should account for duplicates', () => {
    expect(constructNote('aa', 'abc')).toBe(false);
  });
  test('should return true for empty message', () => {
    expect(constructNote('', 'abc')).toBe(true);
  });
  test('should return true if all letters contained', () => {
    expect(constructNote('abc', 'dcba')).toBe(true);
  });
});