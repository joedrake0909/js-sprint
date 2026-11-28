# Text Toolkit

## Overview

A JavaScript text-processing project built in two stages: an original implementation and a rebuild from memory.

## Implementations

### 1. Original — `text.js`

Contains four reusable functions:

- `wordCount(text)` — Counts words and handles repeated spaces.
- `isPalindrome(text)` — Checks whether text reads the same backward, ignoring case.
- `titleCase(text)` — Capitalizes the first letter of each word.
- `slugify(text)` — Converts text into a lowercase, URL-friendly slug.

### 2. Rebuild — `text-toolkit.js`

Reimplements the four functions from memory:

- `wordCount(str)`
- `isPalindrome(str)`
- `titleCase(str)`
- `generateSlug(str)`

The rebuild additionally practises input validation, empty-input handling, and more deliberate string processing.

## Concepts Practised

- Functions and return values
- String methods and array methods
- `map()`, `filter()`, `split()`, `join()`, and `reverse()`
- Regular expressions
- Input validation and error handling
- Testing with `console.log()`

## How to Run

Run the original implementation:

```bash
node text.js
```

Run the rebuild:

```bash
node text-toolkit.js
```

## What I Learned

- Break problems into smaller logical steps.
- Rebuild solutions from memory rather than relying on copied code.
- Validate function inputs.
- Handle empty strings and repeated whitespace.
- Test normal, edge-case, and invalid inputs.
