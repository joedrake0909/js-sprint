# Inventory System

## Overview

A JavaScript inventory management exercise using ES modules, destructuring, spread syntax, and immutable array updates.

## Features

- Product data stored in `products.js`.
- Default and named exports.
- `addStock()` to increase stock quantities.
- `removeStock()` to decrease stock with validation.
- `lowStock()` to find products below a threshold.
- Default parameters for inventory data and low-stock thresholds.
- New arrays and updated product objects returned without mutating the original inventory.
- Validation for non-positive additions, non-positive removals, and insufficient stock.

## Project structure

```text
inventory-system/
├── package.json
├── products.js
├── inventory.js
├── main.js
└── README.md
```

## Run the project

From this directory, execute:

```bash
node main.js
```

## Concepts practised

- ES module `import` and `export`
- Named exports versus default exports
- Object destructuring in function parameters
- Spread syntax for copying and updating objects
- `map()` and `filter()`
- Default parameters
- Error handling with `throw` and `try/catch`
- Checking that the original inventory remains unchanged
