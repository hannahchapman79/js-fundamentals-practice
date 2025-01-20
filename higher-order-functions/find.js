function find (array, callbackfn) {
    let firstTruthyElement;
    for (let i = 0; i < array.length; i++) {
        if (callbackfn(array[i], i, array) && firstTruthyElement === undefined) {
           firstTruthyElement = array[i];
        }
    }
    return firstTruthyElement;
}

module.exports = find;