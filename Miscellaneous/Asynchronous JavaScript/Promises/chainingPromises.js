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

calculateSquare(3).then(
    (result) => {
        console.log(result);
        return 42
    }
).then(
    (result) => {
        console.log(result);
        throw new Error("Some Error")
    }
).then(
    (result) => {
        console.log(result);
    },
    (err) => {
        console.log(err+"");
    }
)

calculateSquare(3).then(
    (result) => {
        console.log(result);
        return calculateSquare("42")
    }
).then(
    (result) => {
        console.log(result);
        return calculateSquare(42)
    }
).then(
    (result) => {
        console.log(result);
    }
).catch(
    (err) => {
        console.log(err+"")
    }
)