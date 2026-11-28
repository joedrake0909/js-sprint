const cart = [];

function addItem(cart, name, price, qty) {
    const existingItem = cart.find(item => item.name === name && item.price === price);

    if (existingItem) {
        existingItem.qty += qty;
    } else {
        cart.push({ name, price, qty });
    }
    return cart;
}

addItem(cart, "Laptop", 5000, 2);
addItem(cart, "Laptop", 5000, 3);
addItem(cart, "Laptop", 6000, 1);

console.log(cart);