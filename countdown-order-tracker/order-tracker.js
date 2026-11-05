console.log("Order placed");

setTimeout(() => {
    console.log("Order confirmed");

    setTimeout(() => {
        console.log("Cooking");

        setTimeout(() => {
            console.log("On the way");

            setTimeout(() => {
                console.log("Delivered");
            }, 1000);

        }, 1000);

    }, 1000);

}, 1000);