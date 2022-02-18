"use strict";
// const Logger = (constructor: Function) => {
//     console.log("Logging...")
//     console.log(constructor)
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// Decorator factory
const Logger = (logString) => {
    return (constructor) => {
        console.log(logString);
        console.log(constructor);
    };
};
const WithTemplate = (template, hookId) => {
    return (constructor) => {
        console.log("Rendering");
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector("h1").textContent = p.name;
        }
    };
};
// can also add more than one decorator - execute bottom up
let Person = class Person {
    constructor() {
        this.name = "Benja";
        console.log("Creating a new person");
    }
};
Person = __decorate([
    Logger("LOGGING - PERSON"),
    WithTemplate("<h1>My Person</h1>", "app")
], Person);
const person = new Person();
console.log(person);
// Property decorators
const Log = (target, propertyName) => {
    console.log("Property decorator");
    console.log(target, propertyName);
};
// can also add decorators to accessors
const Log2 = (target, name, descriptor) => {
    console.log("Accessor decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
};
// and methods
const Log3 = (target, name, descriptor) => {
    console.log("Method decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
};
// and even parameters
const Log4 = (target, name, position) => {
    console.log("Parameter decorator");
    console.log(target);
    console.log(name);
    console.log(position);
};
class Product {
    constructor(title, price) {
        this.title = title;
        this._price = price;
    }
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error("Price must be positive");
        }
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
// this is useful!!!
const Autobind = (_, __, descriptor) => {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
};
class Printer {
    constructor() {
        this.message = "This works!";
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    Autobind
], Printer.prototype, "showMessage", null);
const p = new Printer();
const button = document.querySelector("button");
// withought AutoBind
// button.addEventListener("click", p.showMessage.bind(p));
button.addEventListener("click", p.showMessage.bind(p));
const registeredValidator = {};
const Required = (target, propName) => {
    var _a, _b;
    registeredValidator[target.constructor.name] = Object.assign(Object.assign({}, registeredValidator[target.constructor.name]), { [propName]: [...((_b = (_a = registeredValidator[target.constructor.name]) === null || _a === void 0 ? void 0 : _a[propName]) !== null && _b !== void 0 ? _b : []), 'required'] });
};
const PositiveNumber = (target, propName) => {
    var _a, _b;
    registeredValidator[target.constructor.name] = Object.assign(Object.assign({}, registeredValidator[target.constructor.name]), { [propName]: [...((_b = (_a = registeredValidator[target.constructor.name]) === null || _a === void 0 ? void 0 : _a[propName]) !== null && _b !== void 0 ? _b : []), 'positive'] });
};
const validate = (obj) => {
    const objvalidatorConfig = registeredValidator[obj.constructor.name];
    if (!objvalidatorConfig) {
        return true;
    }
    let isValid = true;
    for (const prop in objvalidatorConfig) {
        for (const validator of objvalidatorConfig[prop]) {
            switch (validator) {
                case "required":
                    isValid = isValid && !!obj[prop];
                    break;
                case "positive":
                    isValid = isValid && (obj[prop] > 0);
                    break;
            }
        }
    }
    return isValid;
};
class Course {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
__decorate([
    Required
], Course.prototype, "title", void 0);
__decorate([
    PositiveNumber,
    Required
], Course.prototype, "price", void 0);
const courseForm = document.querySelector("form");
courseForm.addEventListener("submit", event => {
    event.preventDefault();
    const titleEl = document.getElementById("title");
    const priceEl = document.getElementById("price");
    const title = titleEl.value;
    const price = +priceEl.value;
    const createdCourse = new Course(title, price);
    if (!validate(createdCourse)) {
        alert("Invalid input, please try again");
        return;
    }
    console.log(createdCourse);
});
