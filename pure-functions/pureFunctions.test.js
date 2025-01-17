const addTagToPosts = require("./addTagToPosts");
const updateInventory = require("./updateInventory");

describe("Pure Functions - addTagToPosts & updateInventory", () => {

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

});