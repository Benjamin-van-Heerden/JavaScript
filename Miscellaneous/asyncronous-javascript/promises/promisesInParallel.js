const askFirst = () => {
    return new Promise((resolve, reject) => {
        setTimeout(
            // () => (8000), 3000
            () => reject(new Error("Not Interested"))
        )
    })
}

const askSecond = () => {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => resolve(12000), 5000
        )
    })
}

const askThird = () => {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => resolve(10000), 8000
        )
    })
}

// Promise.all([askFirst(), askSecond(), askThird()])
//     .then(
//         prices => {
//             return Math.max(...prices)
//         }
//     )
//     .then(
//         bestPrice => console.log(bestPrice)
//     );

//Promise.all can also take non promise values

Promise.all([1, 2, "string", true])
    .then(
        stuff => {
            console.log(stuff)
        }
    );

// what about rejected promises?
// here we actually pass the errors if they appear
Promise.all(
    [
        askFirst().catch(error => "" + error),
        askSecond().catch(error => "" + error),
        askThird().catch(error => "" + error)
    ]
).then(
    prices => {
        const validPrices = prices.filter(x => typeof x === "number");
        console.log(validPrices);
    }
);