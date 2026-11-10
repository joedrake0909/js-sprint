function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
};

const orderName = "Pizza";
const delay = 1000;

wait(delay).then(() => {
    console.log(`${orderName}: placed`);
    return wait(delay);
})
.then(() => {
    console.log(`${orderName}: confirmed`);
    return wait(delay);
})
.then(() => {
    console.log(`${orderName}: cooking`);
    return wait(delay);
})
.then(() => {
    console.log(`${orderName}: on the way`);
    return wait(delay);
})
.then(() => {
    console.log(`${orderName}: delivered`);
})
.catch((error) => {
    console.error("Order failed:", error.message);
});


// V2: Compare sequential and parallel execution.
console.time("Sequential");

wait(1000)
    .then(() => {
        console.log("Task 1 completed");
        return wait(1000);
    })
    .then(() => {
        console.log("Task 2 completed");
        return wait(1000);
    })
    .then(() => {
        console.log("Task 3 completed");
        console.timeEnd("Sequential");
    });


console.time("Parallel");

Promise.all([
    wait(1000),
    wait(1000),
    wait(1000)
]).then(() => {
    console.log("All parallel tasks completed");
    console.timeEnd("Parallel");
});


// V3: Compare Promise.all() and Promise.allSettled().
function task(name, ms, shouldFail = false) {
    return wait(ms).then(() => {
        if (shouldFail) {
            throw new Error(`${name} failed`);
        }

        return `${name} completed`;
    });
}


console.time("Promise.all");

Promise.all([
    task("Task 1", 1000),
    task("Task 2", 500, true),
    task("Task 3", 1000)
])
.then((results) => {
    console.log("Promise.all results:", results);
})
.catch((error) => {
    console.error("Promise.all error:", error.message);
    console.timeEnd("Promise.all");
});


console.time("Promise.allSettled");

Promise.allSettled([
    task("Task 1", 1000),
    task("Task 2", 500, true),
    task("Task 3", 1000)
]).then((results) => {
    console.log("Promise.allSettled results:", results);
    console.timeEnd("Promise.allSettled");
});


// V4: Implement a reusable Promise timeout utility.

function withTimeout(promise, ms) {
    let timer;

    const timeoutPromise = new Promise((_, reject) => {
        timer = setTimeout(() => {
            reject(new Error(`Operation timed out after ${ms}ms`));
        }, ms);
    });

    return Promise.race([promise, timeoutPromise])
        .finally(() => {
            clearTimeout(timer);
        });
}


console.time("Fast operation");

withTimeout(wait(1000), 3000)
    .then(() => {
        console.log("Fast operation completed successfully");
        console.timeEnd("Fast operation");
    })
    .catch((error) => {
        console.error("Fast operation error:", error.message);
    });


console.time("Slow operation");

withTimeout(wait(5000), 2000)
    .then(() => {
        console.log("Slow operation completed successfully");
    })
    .catch((error) => {
        console.error("Slow operation error:", error.message);
        console.timeEnd("Slow operation");
    });