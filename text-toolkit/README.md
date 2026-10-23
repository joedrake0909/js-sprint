# Text Toolkit

## Overview
A JavaScript project containing four reusable text-processing functions.

## Functions
- `wordCount(text)` — Counts words and handles repeated spaces.
- `isPalindrome(text)` — Checks whether text reads the same backward, ignoring case.
- `titleCase(text)` — Capitalizes the first letter of each word.
- `slugify(text)` — Converts text into a lowercase, URL-friendly slug.

## Concepts Practiced
- Functions and return values
- String methods: `split()`, `toLowerCase()`, `slice()`, `replace()`, `join()`
- Array methods: `filter()` and `map()`
- Regular expressions
- Testing with `console.log()`

## How to Run

```bash
node text-toolkit/text.js
```

## Tests
The project includes test calls for all four functions, including repeated spaces, mixed letter case, and punctuation in slugs.

## What I Learned

- **Chain small methods** like `split()`, `map()`, and `join()` to solve real problems.
- **Break problems into clear steps** — each function reads like a simple recipe.
- **Test with real examples** using `console.log()` to confirm your logic works.