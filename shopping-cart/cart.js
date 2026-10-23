const cart = []

const discounts = {
    STUDENT10: 0.10,
    NEWYEAR: 0.25,
};


function addItem(cart, name, price, qty) {
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.qty += qty;
    } else {
        cart.push({
            name: name,
            price: price,
            qty: qty
        });
    }
}


function removeItem(cart, name) {
    const index = cart.findIndex(item => item.name == name);
    if (index !== -1) {
        cart.splice(index, 1);
    }
}

function cartTotal(cart) {
    return cart.reduce((total, item) => {
        return total + item.price * item.qty;
    }, 0)
};

function applyDiscount(total, code) {
    const rate = discounts[code];

    if (rate === undefined) {
        console.log("Invalid discount code. No discount applied.");
        return total;
    }
    return total * (1 - rate);
}

function printReceipt(cart, discountCode) {
    console.log("========== SHOPPING RECEIPT ==========");
    for (const item of cart) {
    const subtotal = item.price * item.qty;
    console.log(item.name.padEnd(20) + subtotal.toFixed(2));
}
    console.log("-------------------------------------");
    const total = cartTotal(cart);
    console.log("Total:".padEnd(20) + total.toFixed(2));

    const finalTotal = applyDiscount(total, discountCode);
    console.log("Final total:".padEnd(20) + finalTotal.toFixed(2));
}

addItem(cart, "Notebook", 25, 1);
addItem(cart, "Notebook", 25, 2);
addItem(cart, "Pen", 5, 2);

printReceipt(cart, "INVALID");