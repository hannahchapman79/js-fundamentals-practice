const filter = require('./filter'); 

describe('filter function', () => {
  test('filters even numbers from an array', () => {
    expect(filter([1, 2, 3, 4, 5, 6], (num) => num % 2 === 0)).toEqual([2, 4, 6]);
  });

  test('filters strings with length greater than 3', () => {
    expect(filter(['hi', 'hello', 'hey', 'world'], (word) => word.length > 3)).toEqual(['hello', 'world']);
  });

  test('filters truthy values from an array', () => {
    expect(filter([0, 1, false, 2, '', 3], Boolean)).toEqual([1, 2, 3]);
  });

  test('returns an empty array if no elements match the predicate', () => {
    expect(filter([1, 3, 5], (num) => num % 2 === 0)).toEqual([]);
  });

  test('returns an empty array when given an empty input array', () => {
    expect(filter([], (num) => num > 0)).toEqual([]);
  });

  test('ensures original array is not mutated', () => {
    const original = [1, 2, 3, 4];
    const copy = [...original];
    filter(original, (num) => num % 2 === 0);
    expect(original).toEqual(copy);
  });
});