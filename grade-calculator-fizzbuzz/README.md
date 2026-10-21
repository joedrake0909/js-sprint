# Grade Calculator + FizzBuzz

## What it does
- Assigns letter grades to scores from 0 to 100.
- Rejects scores below 0, above 100, and non-numeric values in the grade calculator.
- Prints FizzBuzz results for numbers 1–100.
- Adds Bazz for multiples of 7 using configurable variables and a `while` loop.

## What I learned
- `if`, `else if`, and `else` control program decisions.
- Condition order affects which branch executes.
- `Number()` converts values, while `Number.isNaN()` detects `NaN`.
- `%` returns the remainder after division.
- `===` checks strict equality.
- `for` and `while` loops automate repetitive tasks.
- `+=` appends strings.
- `||` returns the first truthy operand or the last operand when none is truthy.

## Tests performed
- Grade boundaries: 49, 50, 59, 60, 69, 70, 79, 80, and 100.
- Invalid scores: -5, 150, and non-numeric input.
- FizzBuzz: 100 output lines verified.
- Combined rules: 15 → FizzBuzz, 21 → FizzBazz, 35 → BuzzBazz, 105 → FizzBuzzBazz.

## How to run
`node grade-calculator-fizzbuzz/grade.js`

`node grade-calculator-fizzbuzz/fizzbuzz.js`