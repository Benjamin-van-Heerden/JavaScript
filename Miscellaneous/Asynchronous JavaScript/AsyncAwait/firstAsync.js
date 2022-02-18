// async functions always return promises
// if you don't specifically return a promise then js automatically wraps it in one (it will be a resolved promise with that same value)

const myAsync = async () => {
    return Promise.reject(new Error("Something went wrong"))

    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(true), 2000)
    });
}

const var1 = myAsync();

console.log(var1+"");
console.log("hi")