const cart = [];

// Define the addItem function(cart, name, price, qty)
function addItem(cart, name, price, qty) {
    const item = { name, price, qty };
    cart.push(item);
    return cart;
}

addItem(cart, "Laptop", 5000, 2);
addItem(cart, "Mouse", 150, 1);

console.log(cart);