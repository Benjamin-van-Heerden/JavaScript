"use strict";
var e1 = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date
};
// const add: OverloadAdd = (a: Combinable, b: Combinable) => {
var add = function (a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
};
var resultNum = add(5, 3); //should understand the result to be a number
var resStr2 = add(5, "s");
var resultStr = add("Hi", "There"); //should understand to be a string
// console.log(resultStr.split("i"));
var fetchedUserData = {
    id: "1",
    name: "max",
    // job: {
    //     title: "CEO",
    //     desc: "My Own Company"
    // }
};
// console.log(fetchedUserData.job?.title); //optional chaining
var userInput = null;
var storedData = userInput || "DEFAULT"; //userInput ?? "DEFAULT"; -> nullish coalescing only is "null" or "undefined"
var printEmployeeInfo = function (emp) {
    console.log("Name: " + emp.name);
    if ("privileges" in emp) {
        console.log("Privileges: " + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("Start Date: " + emp.startDate);
    }
};
printEmployeeInfo(e1);
printEmployeeInfo({ name: "Max", startDate: new Date });
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Driving...");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Driving a truck...");
    };
    Truck.prototype.loadCargo = function (cargo) {
        console.log("Loading cargo: " + cargo);
    };
    return Truck;
}());
var v1 = new Car;
var v2 = new Truck;
var useVehicle = function (vehicle) {
    vehicle.drive();
    // if ("loadCargo" in vehicle) {
    //     vehicle.loadCargo("something");
    // }
    if (vehicle instanceof Truck) {
        vehicle.loadCargo("something");
    }
};
useVehicle(v1);
useVehicle(v2);
var moveAnimal = function (animal) {
    switch (animal.type) {
        case "bird":
            console.log("Moving with speed: " + animal.flyingSpeed);
            break;
        case "horse":
            console.log("Moving with speed: " + animal.runningSpeed);
    }
};
moveAnimal({ type: "bird", flyingSpeed: 10 });
moveAnimal({ type: "horse", runningSpeed: 7 });
var paragraph = document.querySelector("p"); //ts knows this is a p element
var input = document.getElementById("input"); // now ts can only recognise this a general HTML element
var input2 = document.getElementById("input"); // ! -> "won't return null"
input2.value = "Hi there!";
var errorBag = {
    email: "Not a valid email!",
    username: "Must start with a capital letter!"
};
