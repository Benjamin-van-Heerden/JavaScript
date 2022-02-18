let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";
if (typeof userInput == "string") userName = userInput


// never type

const generateError = (message: string, code: number): never => {
    throw {message: message, code: code}; //this cancels our script
}

generateError("Error occurred", 500)