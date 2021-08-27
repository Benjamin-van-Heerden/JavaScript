const myPromise = new Promise((resolve, reject) => {
    resolve("Hello World")
})

myPromise.then((res) => {
    console.log(res);
})

const anotherPromise = new Promise((resolve, reject) => {
    reject("reason");
})

anotherPromise.then(
    (res) => {
        console.log("This is inside the onFulfilled function");
    },
    (err) => {
        console.log("The promise was not fulfilled");
    }
)

console.log("This is writtern after promise.then")