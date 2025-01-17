const addTagToPosts = require("./addTagToPosts");
const updateInventory = require("./updateInventory");
const cloneObject = require("./cloneObject");

describe("Pure Functions - addTagToPosts & updateInventory, cloneObject", () => {

  test("addTagToPosts should return a new array with updated tags", () => {
    const posts = [
      { title: "JS Basics", tags: ["JavaScript"] },
      { title: "Functional Programming", tags: ["Programming"] }
    ];
    
    const updatedPosts = addTagToPosts(posts, "Beginner");

    expect(updatedPosts).toEqual([
      { title: "JS Basics", tags: ["JavaScript", "Beginner"] },
      { title: "Functional Programming", tags: ["Programming", "Beginner"] }
    ]);

    // Ensure original posts array is not mutated
    expect(posts).toEqual([
      { title: "JS Basics", tags: ["JavaScript"] },
      { title: "Functional Programming", tags: ["Programming"] }
    ]);
  });

  test("updateInventory should return a new inventory with updated quantity", () => {
    const inventory = [
      { name: "Apples", quantity: 10 },
      { name: "Oranges", quantity: 5 }
    ];

    const updatedInventory = updateInventory(inventory, { name: "Apples", quantity: 5 });

    expect(updatedInventory).toEqual([
      { name: "Apples", quantity: 15 },
      { name: "Oranges", quantity: 5 }
    ]);

    // Ensure original inventory is not mutated
    expect(inventory).toEqual([
      { name: "Apples", quantity: 10 },
      { name: "Oranges", quantity: 5 }
    ]);
  });

  test("updateInventory should add a new item if it doesn't exist", () => {
    const inventory = [
      { name: "Apples", quantity: 10 },
      { name: "Oranges", quantity: 5 }
    ];

    const updatedInventory = updateInventory(inventory, { name: "Bananas", quantity: 3 });

    expect(updatedInventory).toEqual([
      { name: "Apples", quantity: 10 },
      { name: "Oranges", quantity: 5 },
      { name: "Bananas", quantity: 3 }
    ]);

    // Ensure original inventory is not mutated
    expect(inventory).toEqual([
      { name: "Apples", quantity: 10 },
      { name: "Oranges", quantity: 5 }
    ]);
  });

  describe('cloneObject', () => {
    test('should copy key-value pairs from source to target', () => {
      const target = { a: 1, b: 2 };
      const source = { b: 3, c: 4 };
      const result = cloneObject(target, source);
      
      expect(result).toEqual({ a: 1, b: 3, c: 4 });
      expect(result).toBe(target); // Ensures target is mutated
    });
  
    test('should return the target object even when source is empty', () => {
      const target = { a: 1, b: 2 };
      const source = {};
      const result = cloneObject(target, source);
  
      expect(result).toEqual({ a: 1, b: 2 });
      expect(result).toBe(target);
    });
  
    test('should add new properties from source to target', () => {
      const target = { a: 1 };
      const source = { b: 2, c: 3 };
      const result = cloneObject(target, source);
  
      expect(result).toEqual({ a: 1, b: 2, c: 3 });
    });
  
    test('should override properties in target with values from source', () => {
      const target = { a: 1, b: 2 };
      const source = { a: 10, b: 20 };
      const result = cloneObject(target, source);
  
      expect(result).toEqual({ a: 10, b: 20 });
    });
  
    test('should work with nested objects (but not deep clone)', () => {
      const target = { a: { x: 1 }, b: 2 };
      const source = { a: { y: 2 }, c: 3 };
      const result = cloneObject(target, source);
  
      expect(result).toEqual({ a: { y: 2 }, b: 2, c: 3 }); // Shallow merge replaces 'a' completely
    });
  
    test('should return target unmodified when source is null or undefined', () => {
      const target = { a: 1, b: 2 };
      expect(cloneObject(target, null)).toEqual({ a: 1, b: 2 });
      expect(cloneObject(target, undefined)).toEqual({ a: 1, b: 2 });
    });
  
    test('should handle empty target and source objects correctly', () => {
      expect(cloneObject({}, {})).toEqual({});
    });
  
    test('should handle primitive values in source', () => {
      const target = { a: 1 };
      const source = { b: null, c: undefined, d: 0 };
      const result = cloneObject(target, source);
  
      expect(result).toEqual({ a: 1, b: null, c: undefined, d: 0 });
    });
  });

});