# Bank Account Simulator

## Overview

A JavaScript bank account simulator built to practise object-oriented programming, private class fields, validation, custom errors, and transaction history.

## Features

- Create accounts with an owner and starting balance.
- Keep the account balance private using `#balance`.
- Deposit and withdraw money with input validation.
- Handle insufficient-funds errors using a custom error class.
- Record successful deposits and withdrawals with dates.
- Print an account statement.
- Transfer money between accounts.
- Record outgoing and incoming transfer history.
- Reject transfers that exceed the sender's available balance without changing either balance.

## Technologies

- JavaScript
- Node.js

## Run the project

From the root of the repository:

```bash
node bank-account/bank-account.js
```

## Concepts practised

- Classes and constructors
- The `this` keyword
- Private class fields
- Methods and encapsulation
- Arrays and objects
- `throw`, custom errors, and `try/catch`
- Transaction records and dates
- Validating operations before changing state

## Learning notes

This project demonstrates how to protect an account's balance, validate money operations, handle expected errors, and record successful transactions. It is a learning simulator, not a production banking system.
