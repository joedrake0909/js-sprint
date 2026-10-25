
import events from "./events.js";
import {
    sortByDate,
    groupByMonth,
    upcoming,
    uniqueVenues,
    formatEventDate
} from "./event-utils.js";

console.log("=== EVENT PLANNER ===");

const sortedEvents = sortByDate(events);

console.log("\n1. Events sorted by date:");
console.log(sortedEvents.map((event) => event.title));

console.log("\n2. Events grouped by month:");
for (const [month, monthEvents] of groupByMonth(events)) {
    console.log(month, "=>", monthEvents.map((event) => event.title));
}

console.log("\n3. Upcoming events in the next 30 days:");
console.log(upcoming(events, 30).map((event) => event.title));

console.log("\n4. Unique venues:");
console.log(uniqueVenues(events));

console.log("\n5. Formatted event date:");
console.log(formatEventDate(events[0].date));

console.log("\n6. Original array remains unchanged:");
console.log(events.map((event) => event.title));
