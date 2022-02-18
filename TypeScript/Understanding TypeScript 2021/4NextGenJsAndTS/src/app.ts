const useName = "Max"


// const add = (a: number, b: number) => {
//     return a + b
// }

// console.log(add(3, 4))

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];

activeHobbies.push(...hobbies);

console.log(activeHobbies);

const person = {
    firstName: "Ben",
    age: 30
};

const copiedPerson = { ...person };

console.log(copiedPerson);

const add = (...numbers: number[]): number => {
    return numbers.reduce((accumulator, currentVal) => accumulator + currentVal, 0);
}

console.log(add(3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14))

const [hobby1, hobby2, ...remainingHobbies] = hobbies;


const { firstName: userName, age: userAge } = person;

console.log(userName, userAge, person);


