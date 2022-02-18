const calcSquareErrorFirst = (number, callback) => {
    setTimeout(
        () => {
            if (typeof number != "number") {
                callback(new Error("Argument of type number is expected"));
                return;
            }
            const result = number * number
            callback(null, result); //no error inside
        },
        1000
    )
}

calcSquareErrorFirst(1, (err, result) => {
    if (err != null) {
        console.log("Caught: " + err);
        return;
    }
    console.log(result)
})

calcSquareErrorFirst(2, (err, result) => {
    if (err != null) {
        console.log("Caught: " + err);
        return;
    }
    console.log(result)
})

calcSquareErrorFirst(3, (err, result) => {
    if (err != null) {
        console.log("Caught: " + err);
        return;
    }
    console.log(result)
})

// This should wait 1000ms before printing to console. This is not the case since each of the calls to the function
// are placed on the message queue and after about 1000ms ALL THREE return their results
// calcSquareErrorFirst is async, but we are calling it as if it were synchronous
// how do we remedy this and get the desired behaviour??

calcSquareErrorFirst(4, (err, result) => {
    if (err != null) {
        console.log("Caught: " + err);
        return;
    }
    console.log(result)
    calcSquareErrorFirst(5, (err, result) => {
        if (err != null) {
            console.log("Caught: " + err);
            return;
        }
        console.log(result)
        calcSquareErrorFirst(6, (err, result) => {
            if (err != null) {
                console.log("Caught: " + err);
                return;
            }
            console.log(result)
            calcSquareErrorFirst(7, (err, result) => {
                if (err != null) {
                    console.log("Caught: " + err);
                    return;
                }
                console.log(result)
                calcSquareErrorFirst(8, (err, result) => {
                    if (err != null) {
                        console.log("Caught: " + err);
                        return;
                    }
                    console.log(result)
                })
            })
        })
    })
})

// this works as expected, but one should start to see a problem here, the tower structure is known as callback hell and is an
// artifact of using callbacks that is resolved through promises and async/await