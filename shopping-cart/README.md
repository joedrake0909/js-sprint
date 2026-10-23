# Shopping Cart

## Overview
A JavaScript shopping cart that supports adding products, removing products, calculating totals, applying discount codes, and printing a formatted receipt.

## Features
- Add products to the cart.
- Increase quantity when adding an existing product.
- Remove products by name.
- Calculate totals using `reduce()`.
- Apply `STUDENT10` (10%) and `NEWYEAR` (25%) discounts.
- Handle unknown discount codes without applying a discount.
- Print a formatted receipt using `padEnd()` and `toFixed(2)`.

## How to Run

```bash
node shopping-cart/cart.js
```

## Concepts Practiced
- Functions and parameters
- Arrays and objects
- `push()`, `find()`, `findIndex()`, and `splice()`
- `reduce()`
- Conditional logic
- Object property lookup
- String formatting

## Example
With 3 notebooks at 25 each and 2 pens at 5 each, the cart total is 85.

- With `STUDENT10`, the final total is 76.50.
- With `NEWYEAR`, the final total is 63.75.
- With an invalid code, the final total remains 85.00.

## What I Learned

1. **`find()` + mutation prevents duplicates** — checking if an item already exists lets you update its quantity instead of adding a duplicate entry.
2. **`reduce()` is perfect for totals** — it sums up `price × qty` across all cart items in one clean pass with a starting value of `0`.
3. **Small helper functions keep code readable** — splitting logic into `addItem`, `removeItem`, `cartTotal`, `applyDiscount`, and `printReceipt` makes each piece easy to test and reuse.
