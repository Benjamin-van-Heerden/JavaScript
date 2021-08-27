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


//this is clearly superior to the way of doing this with callbacks
calculateSquare(2)
    .then((result) => {
        console.log(result);
        return calculateSquare(result)
    })
    .then((result) => {
        console.log(result);
        return calculateSquare(result)
    })
    .then((result) => {
        console.log(result);
        return calculateSquare(result)
    })
    .then((result) => {
        console.log(result);
        return calculateSquare(result)
    })
    .then((result) => {
        console.log(result);
        return calculateSquare(result)
    })
    .then((result) => {
        console.log(result);
        return calculateSquare(result)
    })
    .then((result) => {
        console.log(result);
        return calculateSquare(result)
    })