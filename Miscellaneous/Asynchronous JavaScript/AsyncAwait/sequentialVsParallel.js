const print1 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("print1 is finished");
            resolve(1);
        }, 2000);
    });
}

const print2 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("print2 is finished");
            resolve(2);
        }, 2000);
    });
}

const oneByOne = async () => {
    const number1 = await print1();
    const number2 = await print2();
    console.log(number1, number2);
}

oneByOne();

const inParallel = async () => {
    const promise1 = print1();
    const promise2 = print2();
    // const [number1, number2] = [await promise1, await promise2];
    console.log(...[await promise1, await promise2]);
}

inParallel();

