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

module.exports = calcSquareErrorFirst;
