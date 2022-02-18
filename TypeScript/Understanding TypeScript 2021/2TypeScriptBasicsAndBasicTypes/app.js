var userInput;
var userName;
userInput = 5;
userInput = "Max";
if (typeof userInput == "string")
    userName = userInput;
// never type
var generateError = function (message, code) {
    throw { message: message, code: code }; //this cancels our script
};
generateError("Error occurred", 500);
