const add = (n1: number, n2: number): number => {
    return n1 + n2;
}

// if there is no reason to add return type -> let compiler infer

const printResult = (num: number) => {
    console.log(`Result: ${num}`);
}

// the above "returns" the "void" type, which is inferred by the compiler

printResult(add(4, 3));

let combineValues: (a: number, b: number) => number; //function types

combineValues = add;

// combineValues = printResult;

// combineValues = 8;

console.log(combineValues(8,8));

const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
    const result = n1 + n2;
    cb(result);
}

addAndHandle(1, 2, (x) => console.log(x));