// Type Aliases

type Combinable = number | string;
type ConversionDescriptor = "as-string" | "as-number"


// Union Types
// Literal Types
const combine = (
    input1: Combinable, 
    input2: Combinable, 
    resultConversion: ConversionDescriptor //literal type
    ) => {
    let result: number | string;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else if (typeof input1 != typeof input2) {
        return "Cannot combine mixed types: number and string"
    }
    else {
        result = input1.toString() + input2.toString();
    }

    if (resultConversion == "as-string") {
        return result.toString();
    }
    else if (resultConversion == "as-number") {
        return +result
    }
}


const combinedAges = combine(30, 26, "as-number")
const combinedStr = combine("hello", "world", "as-string")
const combinedFail = combine("hello", 42, "as-string")
const combinedStringNumbers = combine("4", "15", "as-number")

console.log(combinedAges);
console.log(combinedStr);
console.log(combinedFail);
console.log(combinedStringNumbers);

// 

