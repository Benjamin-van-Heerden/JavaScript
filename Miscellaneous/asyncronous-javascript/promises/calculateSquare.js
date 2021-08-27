const calculateSquare = (num) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof num != 'number') return reject(new Error("Argument of type number is expected to be a number"));
            const result = num * num
            resolve(result)
        }, 1000);
    });
    return promise
}

calculateSquare(2).then(
    (result) => {
        console.log("Success: " + result);
    },
    (err) => {
        console.log("Reason for rejection: " + err);
    }
)

calculateSquare("2").then(
    (result) => {
        console.log("Success: " + result);
    },
    (err) => {
        console.log("Reason for rejection: " + err);
    }
)