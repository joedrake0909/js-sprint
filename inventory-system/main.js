import products, { inventoryName } from "./products.js";
import { addStock, removeStock, lowStock } from "./inventory.js";

console.log("Inventory:", inventoryName);
console.log("Products:", products);
console.log("Product count:", products.length);

const updatedProducts = addStock({ id: 1, qty: 5 });

console.log("\nOriginal Keyboard quantity:", products[0].qty);
console.log("Updated Keyboard:", updatedProducts[0]);
console.log("Original array unchanged:", products[0].qty === 10);


const afterRemoval = removeStock({ id: 1, qty: 3 });

console.log("\nOriginal Keyboard quantity:", products[0].qty);
console.log("Keyboard after removal:", afterRemoval[0].qty);
console.log(
    "Original inventory unchanged:",
    products[0].qty === 10
);

console.log("\nLow-stock products:");

console.log(lowStock(5));

console.log(
    "Original inventory unchanged:",
    products.map((item) => item.qty)
);


console.log("\n--- Validation Tests ---");

try {
    removeStock({ id: 1, qty: 100 });
} catch (error) {
    console.log("Insufficient stock:", error.message);
}

try {
    addStock({ id: 1, qty: -5 });
} catch (error) {
    console.log("Invalid addition:", error.message);
}


console.log("\n--- Default Threshold Test ---");
console.log(lowStock().map((item) => item.name));

console.log("\n--- Missing Product Test ---");
const unknownProduct = addStock(
    { id: 999, qty: 5 },
    products
);

console.log("Original quantities:", products.map((item) => item.qty));
console.log(
    "Returned quantities:",
    unknownProduct.map((item) => item.qty)
);