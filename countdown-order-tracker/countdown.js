// Counter initially set at 10.
let counter = 10;

const timer = setInterval(() => {
    console.log(counter);

    if (counter === 0) {
        clearInterval(timer);
        console.log("Countdown complete!");
        return;
    };
    counter--;
},1000);