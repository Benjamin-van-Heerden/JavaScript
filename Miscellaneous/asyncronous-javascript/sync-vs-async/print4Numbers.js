const print1 = () => {
    const number1 = 1;
    console.log(number1);
}

const print2 = () => {
    const getNumberTwo = () => {
        return 2
    }
    const number2 = getNumberTwo();
    console.log(number2);
}

const print3 = () => {
    const fs = require('fs');
    fs.readFile("./number3.txt", "utf-8", (error, number3) => {
        console.log(number3);
        print4();
    })
    console.log("here")
}

const print4 = () => {
    const number4 = 4;
    console.log(number4);
}

print1();
print2();
print3();
