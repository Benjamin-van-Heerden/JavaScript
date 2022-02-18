type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee

const e1: ElevatedEmployee = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; //string | number | boolean

type OverloadAdd = {
    (a: number, b: number): number;
    (a: number, b: string): string;
    (a: string, b: number): string;
    (a: string, b: string): string;    
}

// const add: OverloadAdd = (a: Combinable, b: Combinable) => {
const add = (a: Combinable, b: Combinable) => {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}

const resultNum = add(5, 3); //should understand the result to be a number
const resStr2 = add(5, "s")
const resultStr = add ("Hi", "There"); //should understand to be a string

// console.log(resultStr.split("i"));

const fetchedUserData = {
    id: "1",
    name: "max",
    // job: {
    //     title: "CEO",
    //     desc: "My Own Company"
    // }
}

// console.log(fetchedUserData.job?.title); //optional chaining

const userInput = null;

const storedData = userInput || "DEFAULT"; //userInput ?? "DEFAULT"; -> nullish coalescing only is "null" or "undefined"


type UnknownEmployee = Employee | Admin;

const printEmployeeInfo = (emp: UnknownEmployee) => {
    console.log("Name: " + emp.name);

    if ("privileges" in emp) {
        console.log("Privileges: " + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("Start Date: " + emp.startDate);
    }
}

printEmployeeInfo(e1);

printEmployeeInfo({name: "Max", startDate: new Date})

class Car {
    drive() {
        console.log("Driving...")
    }
}

class Truck {
    drive() {
        console.log("Driving a truck...")
    }

    loadCargo(cargo: string) {
        console.log("Loading cargo: " + cargo)
    }
}

type Vehicle = Car | Truck;

const v1 = new Car;
const v2 = new Truck;

const useVehicle = (vehicle: Vehicle) => {
    vehicle.drive();
    // if ("loadCargo" in vehicle) {
    //     vehicle.loadCargo("something");
    // }
    if (vehicle instanceof Truck) {
        vehicle.loadCargo("something");
    }
}

useVehicle(v1);
useVehicle(v2);

// Discriminated Unions 

interface Bird {
    type: "bird";
    flyingSpeed: number;
}

interface Horse {
    type: "horse";
    runningSpeed: number;
}

type Animal = Bird | Horse

const moveAnimal = (animal: Animal) => {
    switch (animal.type) {
        case "bird":
            console.log("Moving with speed: " + animal.flyingSpeed);
            break;
        case "horse":
            console.log("Moving with speed: " + animal.runningSpeed);
    }
}

moveAnimal({type: "bird", flyingSpeed: 10});
moveAnimal({type: "horse", runningSpeed: 7});

const paragraph = document.querySelector("p"); //ts knows this is a p element

const input = document.getElementById("input"); // now ts can only recognise this a general HTML element

const input2 = document.getElementById("input")! as HTMLInputElement; // ! -> "won't return null"

input2.value = "Hi there!";


// Index Types

interface ErrorContainer {
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: "Not a valid email!",
    username: "Must start with a capital letter!"
}




