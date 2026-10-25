function makeCounter() {
    // Closure: the returned methods retain access to this count variable
    // even after makeCounter() has finished executing.
    let count = 0;

    return {
        increment: function() {
            count++;
        },
        decrement: function() {
            count--;
        },
        get value() {
            return count;
        }
    }
};

function once(fn) {
    let called = false;
    let result;

    return function(...args) {
        if (!called) {
            result = fn(...args);
            called = true;
        }
        return result;
    }
}

function memoize(fn) {
    const cache = new Map();

    return function(input) {
        if (cache.has(input)) {
            return cache.get(input);
        }

        const result = fn(input);
        cache.set(input, result);
        return result;
    }
}

function slowSquare(n) {
    console.log("Calculating...");

    let result = 0;

    for (let i = 0; i < 100000000; i++) {
        result += 0;
    }

    return n * n;
}


const counterA = makeCounter();
const counterB = makeCounter();

counterA.increment();
counterA.increment();

counterB.increment();

console.log("Counter A:", counterA.value);
console.log("Counter B:", counterB.value);

counterA.decrement();

console.log("Counter A after decrement:", counterA.value);
console.log("Counter B remains:", counterB.value);

function add(a, b) {
    console.log("Running add...");
    return a + b;
}

const onceAdd = once(add);

console.log(onceAdd(2, 3));
console.log(onceAdd(10, 20));


function greet(name) {
    console.log("Running greet...");
    return `Hello, ${name}!`;
}

const onceGreet = once(greet);

console.log(onceGreet("Joseph"));
console.log(onceGreet("Ama"));


const memoizedSquare = memoize(slowSquare);

console.time("First call");
console.log("Result:", memoizedSquare(5));
console.timeEnd("First call");

console.time("Second call");
console.log("Result:", memoizedSquare(5));
console.timeEnd("Second call");