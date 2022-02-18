const calculateSquare = (num) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof num != 'number') return reject(new Error("Argument of type number is expected"));
            const result = num * num
            resolve(result)
        }, 2001);
    });
    return promise
}

module.exports = calculateSquare