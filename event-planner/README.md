# Event Planner Utilities

A JavaScript project that manages event data and demonstrates array methods, dates, ES modules, `Map`, and `Set`.

## Features

- **Sort events:** Sort events by date, earliest first, without mutating the original array.
- **Group by month:** Organize events by `YYYY-MM` using a `Map`.
- **Find upcoming events:** Return events between the current time and a specified number of days into the future.
- **Find unique venues:** Return distinct venue names using a `Set`.
- **Format dates:** Display readable event dates and times using the `en-GH` locale and `Africa/Accra` time zone.

## Project Structure

```text
event-planner/
├── events.js
├── event-utils.js
├── main.js
├── package.json
└── README.md
```

## Requirements

- Node.js
- ES module support (`"type": "module"` in `package.json`)

No external dependencies are required.

## Run the Project

From the `event-planner` directory:

```bash
node main.js
```

## Concepts Practised

- Named and default exports
- Array methods: `map`, `filter`, and `sort`
- Spread syntax and shallow copies
- `Date` and timestamp comparisons
- `Map` and `Set`
- `Intl.DateTimeFormat`
- UTC timestamps and time-zone formatting

## Design Notes

Event dates are stored as ISO 8601 timestamps in UTC. Dates are formatted for the `Africa/Accra` time zone when displayed.

The sorting function copies the array before sorting, so the original array order is preserved.

## Author

Built as part of a hands-on JavaScript learning sprint.
