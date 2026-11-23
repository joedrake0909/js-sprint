# Retry Function with Exponential Backoff

## Project Overview

The Retry function is designed to handle transient errors in asynchronous operations by retrying the operation a specified number of times using an exponential backoff strategy.

If an operation fails, the function waits for a calculated delay before attempting it again. If the operation succeeds, it returns the actual result. If all retry attempts are exhausted, it throws the final error.


## How It Works

The retry function accepts two main arguments:

- `fn`: The asynchronous function to execute.
- `options`: An object containing:
  - `retries`: The maximum number of retries allowed (default: 3).
  - `baseMs`: The base delay in milliseconds (default: 200).

The function uses an internal `attempt()` helper to manage the retry process.

1. Execute the supplied function using `await`.
2. If successful, return the result immediately.
3. If an error occurs, check whether retries remain.
4. If retries remain, calculate the next delay and wait.
5. Decrease the remaining retry count and attempt the operation again.
6. If no retries remain, throw the final error.

The configured retry count excludes the initial attempt. Therefore, three retries allow a maximum of four total attempts.

## Exponential Backoff and Jitter

Exponential backoff progressively increases the waiting time between failed attempts. This prevents repeated requests from overwhelming a server that may already be experiencing problems.

The delay is calculated using:

`delay = baseMs * (2 ** retryIndex)`

For a base delay of 200ms, the retry delays are:

- First retry: 200ms
- Second retry: 400ms
- Third retry: 800ms

Jitter adds a random delay to the calculated backoff interval. This prevents multiple clients experiencing the same failure from retrying simultaneously.

In this implementation, jitter is generated using `Math.random() * 100`, adding between 0 and approximately 100 milliseconds to each retry delay.


## Running the Tests

This project uses Node.js's built-in test runner (`node:test`) and strict assertions (`node:assert/strict`).

To execute the automated tests, navigate to the project directory and run:

```bash
node --test```


## What I Learned

- How to build a reusable asynchronous retry function.
- How `async` and `await` handle asynchronous execution and errors.
- How recursive helper functions can manage repeated operations.
- How exponential backoff reduces repeated pressure on struggling services.
- How jitter prevents synchronized retry attempts.
- How to write automated asynchronous tests using `node:test` and `node:assert/strict`.
- How to use Git branches to isolate feature development.