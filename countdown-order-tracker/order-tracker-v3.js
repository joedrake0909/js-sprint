function processStage(stage, callback) {
    setTimeout(() => {

        const randomNumber = Math.random();

        if (randomNumber < 0.2) {
            const error = new Error(`${stage} failed`);

            callback(error, null);
        }
        else {
            const result = `${stage} completed`;

            callback(null, result);
        }

    }, 1000);

}

console.log("Order placed");

processStage("Order confirmation", (err, result) => {
    if (err) {
        console.log("Failed:", err.message);
        return;
    }

    console.log(result);

    processStage("Cooking", (err, result) => {
        if (err) {
            console.log("Failed:", err.message);
            return;
        }

        console.log(result);


        processStage("On the way", (err, result) => {
            if (err) {
                console.log("Failed:", err.message);
                return;
            }

            console.log(result);


            processStage("Delivered", (err, result) => {
                if (err) {
                    console.log("Failed:", err.message);
                    return;
                }

                console.log(result);
            });
        });
    });
});