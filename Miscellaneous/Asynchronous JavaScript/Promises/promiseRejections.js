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

calculateSquare(1)
    .then(
        (result) => {
            console.log(result);
            throw new Error("Something Else Happened");
            return calculateSquare(result);
        },
        (err) => console.log("+ " + err)
    )
    .then(
        (result) => {
            console.log(result);
            throw new Error("Something Happened"); //without the catch statement this error will never be caught
        },
        (err) => {
            console.log("I am here");
            console.log(""+ err);
            throw new Error("Something Happened");
        }
    )
    .catch(err => {
        console.log("I am there")
        console.log("" + err)
    });
