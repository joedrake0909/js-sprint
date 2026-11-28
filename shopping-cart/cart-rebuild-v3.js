const cart = [
    { name: "Laptop", price: 5000, qty: 2 },
    { name: "Mouse", price: 150, qty: 3 },
    { name: "Laptop", price: 6000, qty: 1 }
];

function cartTotal(cart) {
    return cart.reduce((total, item) => {
        return total + (item.price * item.qty)
    }, 0)
}


function removeItem(cart, name, price) {
    return cart.filter(item => item.name !== name || item.price !==  price);

}
console.log(cartTotal(cart));
const updatedCart = removeItem(cart, "Laptop", 5000);

console.log(updatedCart);
console.log(cartTotal(updatedCart));