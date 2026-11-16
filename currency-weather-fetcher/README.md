# Currency and Weather Fetcher

## 1. Project Overview

The Currency and Weather Fetcher is a JavaScript application built with Node.js that retrieves live exchange-rate and weather information from two free public APIs.

The application:

- Retrieves the current USD to GHS exchange rate.
- Retrieves current weather information for Accra, Ghana.
- Fetches both API responses concurrently using `Promise.all()`.
- Handles HTTP errors, network failures, and request timeouts.
- Displays the retrieved information in a readable console format.

This project demonstrates practical asynchronous JavaScript, HTTP requests, JSON processing, Promise management, and error handling.

## 2. Project Structure

```text
currency-weather-fetcher/
├── rates.js
└── README.md
```

| File | Purpose |
|---|---|
| `rates.js` | Main application containing the API requests and processing logic |
| `README.md` | Project documentation |

## 3. Technologies Used

| Technology | Purpose |
|---|---|
| JavaScript (ES2022+) | Application logic |
| Node.js | JavaScript runtime |
| `fetch()` | Making HTTP requests |
| `async/await` | Managing asynchronous operations |
| `Promise.all()` | Running independent requests concurrently |
| `response.json()` | Parsing JSON responses |
| `AbortSignal.timeout()` | Enforcing request timeouts |
| `try...catch` | Handling errors |
| `toFixed(2)` | Formatting the exchange rate |

## 4. APIs Used

### A. Exchange Rate API

**Provider:** Open ER-API

Endpoint:

```text
https://open.er-api.com/v6/latest/USD
```

Purpose:
- Retrieves exchange rates relative to USD.
- Provides the GHS exchange rate through `data.rates.GHS`.
- Does not require an API key for this endpoint.

### B. Weather API

**Provider:** Open-Meteo

Endpoint:

```text
https://api.open-meteo.com/v1/forecast?latitude=5.56&longitude=-0.20&current_weather=true
```

Purpose:
- Retrieves current weather information for Accra, Ghana.
- Provides temperature, wind speed, and weather code.
- Does not require an API key for this request.

The coordinates used are approximately:

- Latitude: 5.56° N
- Longitude: 0.20° W

## 5. How the Application Works

### Step 1 — Define API URLs

Two constants store the API endpoints:

- `url` — exchange-rate endpoint.
- `weatherUrl` — Accra weather endpoint.

### Step 2 — Fetch Both APIs Concurrently

The application uses:

```js
const [response, weatherResponse] = await Promise.all([
    fetch(url, {
        signal: AbortSignal.timeout(5000)
    }),
    fetch(weatherUrl, {
        signal: AbortSignal.timeout(5000)
    })
]);
```

Both requests start without waiting for one another.

`Promise.all()` waits for both successful responses and returns them in their original input order.

This reduces unnecessary waiting compared with sequential requests.

### Step 3 — Validate HTTP Responses

The application checks:

```js
response.ok
weatherResponse.ok
```

The `ok` property indicates whether the HTTP status is within the successful 200–299 range.

If either response is unsuccessful, the application throws an error containing the relevant HTTP status.

### Step 4 — Parse JSON Responses

The application uses:

```js
const data = await response.json();
const weatherData = await weatherResponse.json();
```

This converts the response bodies into JavaScript objects.

### Step 5 — Extract Required Information

Exchange rate:

```js
const ghsRate = data.rates.GHS;
```

Weather information:

```js
const temperature = weatherData.current_weather.temperature;
const windspeed = weatherData.current_weather.windspeed;
const weatherCode = weatherData.current_weather.weathercode;
```

### Step 6 — Display Results

The application prints the exchange rate and weather information using `console.log()`.

### Step 7 — Handle Errors

The entire asynchronous workflow is wrapped in `try...catch`.

If an operation throws or an awaited Promise rejects, the catch block displays the error message.

## 6. Error Handling

The project explores three important categories of errors.

| Error category | Example | Handling |
|---|---|---|
| HTTP error | HTTP 404 or 500 | Check `response.ok` and throw an error |
| Network error | DNS failure or unreachable server | Fetch rejects and `catch` handles it |
| JavaScript/data-processing error | Accessing a missing property | Runtime error is caught by `catch` |

### Request Timeouts

Each request uses:

```js
AbortSignal.timeout(5000)
```

This creates an independent timeout signal for each request.

If a request exceeds five seconds, its Fetch operation is aborted and its Promise rejects with a timeout error.

### JSON Parsing Errors

If a response body contains invalid JSON, `response.json()` rejects and the error is caught.

### Important API Response Consideration

A successful HTTP response does not necessarily guarantee that the API returned the data structure expected by the application.

For example, an API may return a valid JSON error object even when the HTTP response is successful.

The current application catches certain errors caused by accessing or processing missing fields, but it does not yet implement explicit schema validation.

### Promise.all() Failure Behaviour

`Promise.all()` rejects when any input Promise rejects.

However, it does not automatically cancel the remaining requests. Each request in this project has its own timeout signal.

## 7. Key Concepts Learned

### 1. Asynchronous JavaScript

Understanding how `async`, `await`, and Promises work together when communicating with external services.

### 2. Parallel Requests

Using `Promise.all()` to execute independent API requests concurrently instead of waiting for each request sequentially.

### 3. HTTP Response Validation

Understanding why `fetch()` does not automatically reject for HTTP errors such as 404 and 500.

### 4. Network vs HTTP Errors

Distinguishing between a failed network request and an unsuccessful HTTP response.

### 5. JSON Processing

Navigating nested JavaScript objects to retrieve specific information from external API responses.

### 6. Error Handling

Using `try...catch` and deliberately throwing errors to handle different failure scenarios.

### 7. Request Cancellation

Using `AbortSignal.timeout()` to prevent requests from waiting indefinitely.

### 8. Promise.all() vs Promise.allSettled()

Understanding fail-fast behaviour and when `Promise.allSettled()` may be more appropriate when partial results are required.

## 8. How to Run

### Prerequisites

- Node.js with native Fetch support (Node.js 18 or newer).
- An active internet connection.
- A terminal or command-line interface.

The application was tested using Node.js v24.22.0.

### Installation and Execution

Clone the repository or navigate to the project directory.

```bash
cd currency-weather-fetcher
```

Run the application:

```bash
node rates.js
```

The current implementation uses top-level `await`. Node.js v24.22.0 successfully executes this project without an additional `package.json` configuration.

### Expected Output

The output values below are illustrative. Actual exchange rates and weather conditions change over time.

```text
1 USD = 11.72 GHS
Accra: 28.2°C
Wind speed: 9.3 km/h
Weather code: 2
```

## 9. Possible Future Improvements

The current implementation focuses on the roadmap requirements. Potential extensions include:

- Explicit validation of API response structures.
- More descriptive error messages for different failure types.
- Weather-code interpretation into human-readable descriptions.
- Support for additional currencies.
- Support for additional cities.
- Retry logic for temporary network failures.
- A simple frontend interface.

## 10. What I Learned

Building this application strengthened my understanding of asynchronous JavaScript and real-world API communication.

I learned how to:

- Make independent API requests concurrently.
- Process external JSON responses.
- Distinguish HTTP errors from network failures.
- Handle rejected Promises using `try...catch`.
- Apply request timeouts using `AbortSignal.timeout()`.
- Understand the fail-fast behaviour of `Promise.all()`.
- Test application behaviour under successful and unsuccessful conditions.

Most importantly, I learned that reliable backend development requires more than successfully retrieving data. It also requires validating responses, anticipating failures, and controlling asynchronous operations.

---

**Project:** Currency and Weather Fetcher  
**Language:** JavaScript  
**Runtime:** Node.js  
**Focus:** Asynchronous JavaScript, Fetch API, Promises, and Error Handling
