const logToConsole = (promise) => {
    promise.then((result) => console.log(result))
}

const promise = new Promise((resolve, reject) => {
    resolve("Hello")
})

logToConsole(promise);

const value = "Hello world";

//logToConsole(value);//this will fail since value is not a promise

// how do we "force" value to be a promise?

logToConsole(Promise.resolve(value));

//promise.resolve() helps us create a resolved promise out of a non-promise value

//similarly promise.reject() for rejected promise

const rejected = Promise.reject(new Error("Some Error"))

