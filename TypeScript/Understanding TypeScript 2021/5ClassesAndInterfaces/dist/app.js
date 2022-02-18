"use strict";
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase);
    };
    return Person;
}());
var user = new Person("Benj", 30);
user.greet("Hi");
var addTwo = function (a, b) {
    return a + b;
};
var anotherAddTwo = function (a, b) {
    return a + b;
};
