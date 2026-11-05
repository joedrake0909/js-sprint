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
