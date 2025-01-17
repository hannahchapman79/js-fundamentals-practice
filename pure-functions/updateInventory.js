function updateInventory(inventory, update) {
const itemExists = inventory.some((item) => item.name === update.name);

if (itemExists) {
    return inventory.map((item) => {
        if (item.name === update.name) {
            return {
                name: item.name,
                quantity: item.quantity + update.quantity
            };
        }
        return item;
    });
} else {
    return [...inventory, { name: update.name, quantity: update.quantity }];
}
}

module.exports = updateInventory;