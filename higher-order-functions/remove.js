function remove(array, callbackfn) {
    let removedElements = [];

    for (let i = array.length - 1; i >= 0; i--) { 
        if (callbackfn(array[i], i, array)) {
            removedElements.unshift(array[i]);
            array.splice(i, 1)
        }
    }
    return removedElements;
}

// Key takeaway: Remove mutates the original array
// Iterate backwards to avoid splice shifting the index when an element is removed

// Remove function description: Removes all elements from array that predicate returns truthy for and returns an array of the removed elements. The predicate is invoked with three arguments: (value, index, array).

module.exports = remove;