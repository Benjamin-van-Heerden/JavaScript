const myPromise = new Promise(
    (resolve, reject) => {
        resolve("value");
        resolve("value2");
        reject("reason");
    }
);

console.log(myPromise)

const anotherPromise = new Promise(
    (resolve, reject) => {
        reject("reason");
        resolve("value");
        resolve("value2");
    }
);

console.log(anotherPromise);