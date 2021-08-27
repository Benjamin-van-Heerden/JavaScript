// await waits for promise to resolve, whether that be resolved or rejected

const getRandomNumber = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(Math.random()), 1000)
    });
}

// await only valid from within async function
// const randomNumber = await getRandomNumber();
// console.log(randomNumber);


// this function literally pauses for 1s, but js engine can still execute other code while this PROMISE is being resolved
const printRandomNum = async () => {
    const randomNumber = await getRandomNumber();
    console.log("Await: " + randomNumber);
}

// note how aync functions return promises, i.e. the above^^ function is equivalent to

const printRandomNumNormal = () => {
    getRandomNumber().then((randomNumber) => console.log("Normal Promise: " + randomNumber));
}

// the await keyword makes things more readable

printRandomNumNormal();

printRandomNum();

console.log("This line comes after"); // is printed before


