const add = (n1: number, n2: number, showResult: Boolean, resPhrase: string) => {
    if (showResult) {
        console.log(`${resPhrase} ${n1 + n2}`);
    }
    else {
        return n1 + n2
    }
}

const number1: number = 5; //redundant and not best practise
const number2: number = 6;
const printResult: boolean = true;
const resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);


