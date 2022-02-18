// const person: {
//     name: string;
//     age: number;
// } = {
//     name: "Max",
//     age: 30
// }; //not good practise

//do like this
// const personProper: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]; //tuple
// } = {
//     name: "John",
//     age: 30,
//     hobbies: ["fishing", "Bowling"],
//     role: [2, "author"]
// }

// let activities: string[] = ["a"]

// console.log(personProper.name);

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// enum makes this easier

enum Role {ADMIN = 5, READ_ONLY = "READ_ONLY", AUTHOR = 2} // will default to 0,1,2... if specified, must specify all

const person = {
    name: "John",
    age: 30,
    hobbies: ["fishing", "Bowling"],
    role: [2, "author"],
    privelage: Role.ADMIN
}

console.log(person.privelage)

// there is also a any type, but do not use if possible