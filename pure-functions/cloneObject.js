function cloneObject(target, source) {
        for (let key in source) {
            target[key] = source[key]; 
        }
        return target;
    }

module.exports = cloneObject;

// Key takeaway: Assigning a value to an object key works the same way whether the key already exists or not.

