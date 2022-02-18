// const f1 = (callback) => {
//     setTimeout(() => callback(), 0); //puts into the message queue
// }

// f1(() => console.log("This is a callback"))

// console.log("Hello World")

//^^here hello world is printed before the callback function is executed. The function is async

function f2(callback) {
    callback();
}

f2(() => console.log("This is a callback"))

console.log("Hello World")

//^^here the callback is executed first. This is synchronous