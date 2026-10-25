const products = [
    { id: 1, name: "Keyboard", qty: 10, price: 150 },
    { id: 2, name: "Mouse", qty: 4, price: 80 },
    { id: 3, name: "Monitor", qty: 7, price: 1200 },
    { id: 4, name: "USB Cable", qty: 2, price: 35 }
];

// Default export: exports the main product array; imports don't need braces.
export default products;

// Named export: exports a specific value by name; imports use braces.
export const inventoryName = "Campus Tech Store";