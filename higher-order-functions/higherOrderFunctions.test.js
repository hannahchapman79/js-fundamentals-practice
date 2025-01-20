const filter = require('./filter'); 
const remove = require('./remove');
const find = require('./find');
const reduce = require('./reduce');

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

describe('remove function', () => {
    test('removes even numbers from an array', () => {
      const arr = [1, 2, 3, 4, 5, 6];
      const result = remove(arr, (num) => num % 2 === 0);
      expect(arr).toEqual([1, 3, 5]);
      expect(result).toEqual([2, 4, 6]);
    });
  
    test('removes strings with length greater than 3', () => {
      const arr = ['hi', 'hello', 'hey', 'world'];
      const result = remove(arr, (word) => word.length > 3);
      expect(arr).toEqual(['hi', 'hey']);
      expect(result).toEqual(['hello', 'world']);
    });
  
    test('removes all truthy values from an array', () => {
      const arr = [0, 1, false, 2, '', 3];
      const result = remove(arr, Boolean);
      expect(arr).toEqual([0, false, '']);
      expect(result).toEqual([1, 2, 3]);
    });
  
    test('returns an empty array when no elements match the predicate', () => {
      const arr = [1, 3, 5];
      const result = remove(arr, (num) => num % 2 === 0);
      expect(arr).toEqual([1, 3, 5]);
      expect(result).toEqual([]);
    });
  
    test('handles an empty input array', () => {
      const arr = [];
      const result = remove(arr, (num) => num > 0);
      expect(arr).toEqual([]);
      expect(result).toEqual([]);
    });
  
    test('removes elements without skipping due to index shift', () => {
      const arr = [1, 2, 2, 3, 4, 4, 5];
      const result = remove(arr, (num) => num === 2 || num === 4);
      expect(arr).toEqual([1, 3, 5]);
      expect(result).toEqual([2, 2, 4, 4]);
    });
  });

  describe('find function', () => {
    test('finds the first even number in an array', () => {
      const arr = [1, 2, 3, 4, 5];
      const result = find(arr, (num) => num % 2 === 0);
      expect(result).toBe(2); 
    });
  
    test('finds the first string longer than 3 characters', () => {
      const arr = ['hi', 'hello', 'hey', 'world'];
      const result = find(arr, (word) => word.length > 3);
      expect(result).toBe('hello'); 
    });
  
    test('returns undefined if no element matches the predicate', () => {
      const arr = [1, 3, 5, 7];
      const result = find(arr, (num) => num % 2 === 0);
      expect(result).toBeUndefined(); 
    });
  
    test('returns undefined for an empty array', () => {
      const arr = [];
      const result = find(arr, (num) => num > 0);
      expect(result).toBeUndefined(); 
    });
  
    test('finds the first truthy value', () => {
      const arr = [0, null, undefined, 1, 2];
      const result = find(arr, Boolean);
      expect(result).toBe(1); 
    });
  
    test('stops iterating after the first match', () => {
      const arr = [5, 4, 3, 2, 1];
      const result = find(arr, (num) => num === 4);
      expect(result).toBe(4); 
    });
  });

  describe('reduce function', () => {
    test('reduces an array of numbers to their sum', () => {
      const arr = [1, 2, 3, 4];
      const result = reduce(arr, (acc, num) => acc + num, 0);
      expect(result).toBe(10); // 1 + 2 + 3 + 4 = 10
    });
  
    test('works with an initial value other than 0', () => {
      const arr = [1, 2, 3, 4];
      const result = reduce(arr, (acc, num) => acc + num, 5);
      expect(result).toBe(15); // 5 + 1 + 2 + 3 + 4 = 15
    });
  
    test('works with an empty array', () => {
      const arr = [];
      const result = reduce(arr, (acc, num) => acc + num, 0);
      expect(result).toBe(0); // No elements to reduce, should return the initial value
    });
  
    test('works with a string array to join them', () => {
      const arr = ['Hello', ' ', 'World'];
      const result = reduce(arr, (acc, str) => acc + str, '');
      expect(result).toBe('Hello World'); // Join all strings
    });
  
    test('multiplies all elements in the array', () => {
      const arr = [1, 2, 3, 4];
      const result = reduce(arr, (acc, num) => acc * num, 1);
      expect(result).toBe(24); // 1 * 2 * 3 * 4 = 24
    });
  
    test('returns the accumulator when no elements in the array', () => {
      const arr = [];
      const result = reduce(arr, (acc, num) => acc + num, 10);
      expect(result).toBe(10); // Empty array, should return the initial value
    });
  
    test('works with objects', () => {
      const arr = [{ a: 1 }, { b: 2 }, { c: 3 }];
      const result = reduce(arr, (acc, obj) => ({ ...acc, ...obj }), {});
      expect(result).toEqual({ a: 1, b: 2, c: 3 }); // Merge all objects
    });
  
    test('works with an array of boolean values', () => {
      const arr = [true, false, true, false];
      const result = reduce(arr, (acc, bool) => acc && bool, true);
      expect(result).toBe(false); // True AND false = false
    });
  
    test('handles non-array inputs gracefully', () => {
      const result = reduce('string', (acc, char) => acc + char, '');
      expect(result).toBe('string'); // Treats 'string' as an array of characters
    });
  });