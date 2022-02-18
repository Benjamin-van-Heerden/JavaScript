"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var useName = "Max";
// const add = (a: number, b: number) => {
//     return a + b
// }
// console.log(add(3, 4))
var hobbies = ["Sports", "Cooking"];
var activeHobbies = ["Hiking"];
activeHobbies.push.apply(activeHobbies, hobbies);
console.log(activeHobbies);
var person = {
    firstName: "Ben",
    age: 30
};
var copiedPerson = __assign({}, person);
console.log(copiedPerson);
var add = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (accumulator, currentVal) { return accumulator + currentVal; }, 0);
};
console.log(add(3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14));
var hobby1 = hobbies[0], hobby2 = hobbies[1], remainingHobbies = hobbies.slice(2);
var userName = person.firstName, userAge = person.age;
console.log(userName, userAge, person);
