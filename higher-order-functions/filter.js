function filter(array, callbackfn) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callbackfn(array[i], i, array)) {
            newArray.push(array[i])
        }
    }
    return newArray;
  }

  // Key takeaway: Filter returns a new array and should not mutate the original array

  module.exports = filter;