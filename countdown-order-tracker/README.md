# Countdown and Order Tracker

## Overview

A JavaScript project that demonstrates asynchronous execution using timers and callbacks.

## Build 1: Countdown Timer (V1)

### What it does
- Starts counting down from 10.
- Displays the current counter every second.
- Stops when the counter reaches 0.
- Displays a completion message.

### How to run

```bash
node countdown.js
```

### Concepts learned
- `setInterval()` — repeatedly executes a callback after a specified time interval.
- `clearInterval()` — stops a running interval.
- Callback functions — functions passed to other functions for later execution.
- Conditional statements — check whether the counter has reached 0.

### Bug encountered
The counter initially displayed 10 twice because I had an extra `console.log(counter)` outside the interval callback.

### Fix
Removed the extra `console.log(counter)` so the interval callback controls the countdown output.


## Build 1: Fake Food Order Tracker (V2)

### What it does

Simulates a food delivery process using nested asynchronous callbacks.

### Order stages

1. Order placed
2. Order confirmed
3. Cooking
4. On the way
5. Delivered

Each stage executes approximately one second after the previous stage.

### Concepts learned

- `setTimeout()` — schedules a callback for later execution.
- Nested callbacks — callbacks placed inside other callbacks.
- Asynchronous execution — JavaScript schedules operations without blocking synchronous execution.
- Callback sequencing — each stage schedules the next stage.

### Why this is called callback hell

Each new asynchronous operation is nested inside the previous callback. As the number of operations increases, the code becomes increasingly difficult to read, maintain and debug.

### How to run

```bash
node order-tracker.js
```

### Expected output

```text
Order placed
Order confirmed
Cooking
On the way
Delivered
```

## Build 1: Random Failure Order Tracker (V3)

### What it does

Extends the fake food order tracker by introducing a 20% random failure probability at every order-processing stage.

### Processing stages

1. Order placed
2. Order confirmation
3. Cooking
4. On the way
5. Delivered

Each processing stage takes approximately one second and can independently fail.

### Concepts learned

- `Math.random()` — generates a pseudo-random decimal.
- `Error` — creates an error object.
- Error-first callbacks — communicate errors and successful results using `(err, result)`.
- `callback(error, null)` — communicates failure.
- `callback(null, result)` — communicates success.
- Error handling — prevents subsequent operations from running after failure.
- Nested asynchronous operations — coordinate dependent processing stages.

### Why this is callback hell

Every asynchronous stage is nested inside the successful callback of the preceding stage. Each stage also requires its own error handling. As the workflow grows, the code becomes increasingly difficult to read, maintain and extend.

### How to run

```bash
node order-tracker-v3.js
```

### Expected successful output

```text
Order placed
Order confirmation completed
Cooking completed
On the way completed
Delivered completed
```

### Expected failure output

```text
Order placed
Order confirmation completed
Failed: Cooking failed
```

### Engineering lesson

An operation that depends on another operation should only execute when its prerequisite succeeds. Error-first callbacks provide a conventional way to communicate asynchronous failures to the caller.





---

# Tuesday — Promises and Asynchronous Programming

## Objective

Understand JavaScript Promises, replace nested callbacks with Promise chains, compare sequential and parallel execution, handle multiple Promise outcomes, and implement a reusable timeout utility.

## Build: promises.js

### V1 — Promise fundamentals and chaining

Implemented a `wait(ms)` function that returns a Promise.

Rebuilt the food order tracker using `.then()` and `.catch()`.

The five order stages execute sequentially:

1. Order placed
2. Order confirmed
3. Cooking
4. On the way
5. Delivered

**Engineering lesson:** Returning a Promise from `.then()` makes the next handler wait for that Promise to settle. A rejected Promise skips subsequent fulfillment handlers and propagates to `.catch()`.

### V2 — Sequential vs parallel execution

Compared three asynchronous tasks, each taking approximately one second.

- Sequential execution: approximately 3 seconds.
- Parallel execution using `Promise.all()`: approximately 1 second.

Used `console.time()` and `console.timeEnd()` to measure execution duration.

**Engineering lesson:** Sequential execution is appropriate when tasks depend on previous results. Parallel asynchronous execution is useful when independent operations can run concurrently.

### V3 — Promise.all() vs Promise.allSettled()

Created three tasks:
- Task 1: succeeds after 1 second.
- Task 2: fails after 500 milliseconds.
- Task 3: succeeds after 1 second.

Compared the behaviour of both methods.

**Promise.all():**
- Rejects when an input Promise rejects.
- Does not cancel the remaining operations.
- Useful when all operations must succeed.

**Promise.allSettled():**
- Waits for every Promise to settle.
- Returns each outcome with its status and value or reason.
- Useful when a complete report of independent operations is required.

### V4 — Promise.race() and timeout utility

Implemented a reusable `withTimeout(promise, ms)` function.

The function races the original operation against a timeout Promise.

Tested:
- A 1-second operation with a 3-second timeout — successful.
- A 5-second operation with a 2-second timeout — timed out.

Improved the implementation using:
- `clearTimeout()` to clean up the timeout timer.
- `.finally()` to perform cleanup after either fulfillment or rejection.

**Engineering lesson:** Promise.race() adopts the outcome of the first Promise to settle. A timeout does not automatically cancel the original operation.

## Key concepts learned

- Promise states: pending, fulfilled and rejected.
- `new Promise()`, `resolve()` and `reject()`.
- `.then()`, `.catch()` and `.finally()`.
- Promise chaining and error propagation.
- Sequential and parallel asynchronous execution.
- `Promise.all()`.
- `Promise.allSettled()`.
- `Promise.race()`.
- `setTimeout()` and `clearTimeout()`.
- Measuring execution time with `console.time()`.

## How to run

```bash
node promises.js
```

## Test results

| Experiment | Approximate result |
|---|---:|
| Sequential execution | 3.038 seconds |
| Parallel execution | 1.017 seconds |
| Promise.all() rejection | 524 milliseconds |
| Promise.allSettled() | 1.024 seconds |
| Fast timeout test | 1.027 seconds |
| Slow timeout test | 2.006 seconds |

*Execution times are from one test run and may vary between machines.*

## Engineering reflection

Promises make asynchronous JavaScript easier to organize and maintain than deeply nested callbacks.

Choosing the correct Promise method depends on the requirements:

- Use `Promise.all()` when every operation must succeed.
- Use `Promise.allSettled()` when every outcome matters.
- Use `Promise.race()` when the first settled operation determines the result.

Timeout handling is important when an application must avoid waiting indefinitely for an operation.
