const askJohn = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("John has pen"), 3000)
    });
}

const askSusie = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Susie has pen"), 2000)
    });
}

const askBen = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error("Ben does not have a pen")), 1000)
    });
}

const askShop = () => {
    return Promise.resolve("We always have pens! You can buy one for $1.")
}

Promise.race(
    [
        askJohn(),
        askSusie(),
        askBen(),
        askShop()
    ]
).then(
    (value) => {
        console.log(value);
    }
).catch(
    reasons => {
        console.log(reasons+"");
    }
)

