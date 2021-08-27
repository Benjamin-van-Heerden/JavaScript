const calcSquare = (number, callback) => {
    setTimeout(
        () => {
            if (typeof number != "number") {
                throw new Error("Argument of type number is expected")
            }
            const result = number * number
            callback(result);
        },
        1000
    )
}

// this is async now
// how do we handle errors??

try {
    calcSquare(3, (res) => console.log(res));
} catch (err) {
    console.error(err);
}

// try {
//     calcSquare("3", (res) => console.log(res));
// } catch (err) {
//     console.error(err);
// }
//^^ notice the error here is uncaught.
// remember setTimeout will put our callback inside the message queue so the code in the surrounding try catch block has already been
// executed before the error is caught

// we handle errors in async callbacks via arguments of the callback -> error first callbacks


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

calcSquareErrorFirst("bad argument", (err, result) => {
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