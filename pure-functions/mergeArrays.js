function mergeArrays(arr1, arr2) {
    let newArray = [];

    for (let i = 0; i < arr1.length; i++) {
        if (!newArray.includes(arr1[i])) {
            newArray.push(arr1[i]);
        }
    }

    for (let j = 0; j < arr2.length; j++) {
        if (!newArray.includes(arr2[j])) {
            newArray.push(arr2[j]);
        }
    }

    return newArray;
}

module.exports = mergeArrays;