function filter(array, callbackfn) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callbackfn(array[i], i, array)) {
            newArray.push(array[i])
        }
    }
    return newArray;
  }

  module.exports = filter;