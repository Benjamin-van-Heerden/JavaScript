const getRandomNumber = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(Math.random()), 1000)
    });
}

// node version >= 14.8 supports inline await (file extension mjs -> ecmascript module)

const number = await getRandomNumber();
console.log(number);

const anotherNumber = await getRandomNumber();
console.log(anotherNumber);


//this will throw an error
// const number = await getRandomNumber();
// console.log(number);

// we can fix this by wrapping it within an IIFE

// (async () => {
//     const number = await getRandomNumber();
//     console.log(number);
// })();
