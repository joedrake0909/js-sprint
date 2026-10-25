export function sortByDate(events) {
    return [...events].sort((a, b) => {
        return new Date(a.date) - new Date(b.date);})
}

export function groupByMonth(events) {
    const groups = new Map();

    for (const event of events) {
        const month = event.date.slice(0,7);
    
    if (!groups.has(month)) {
        groups.set(month, []);
    }

    groups.get(month).push(event);

    }
    return groups;
}




export function upcoming(events, days) {
    const now = Date.now();
    const future = now + days * 24 * 60 * 60 * 1000;

    return events.filter((event) => {
        const eventTime = new Date(event.date).getTime();

        return eventTime >= now && eventTime <= future;
    });
}



export function uniqueVenues(events) {
    return [...new Set(events.map((event) => event.venue))];
}



const ghanaDateFormatter = new Intl.DateTimeFormat("en-GH", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Africa/Accra"
});

export function formatEventDate(date) {
    return ghanaDateFormatter.format(new Date(date));
}

