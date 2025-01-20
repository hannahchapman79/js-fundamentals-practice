function reduce (array, reducer, initialValue) {
    let result = initialValue;
    for (let i = 0; i < array.length; i++) {
        result = reducer(result, array[i]);
    }
    return result;
}

module.exports = reduce;