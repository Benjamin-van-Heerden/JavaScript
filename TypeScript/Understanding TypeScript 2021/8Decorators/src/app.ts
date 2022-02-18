// const Logger = (constructor: Function) => {
//     console.log("Logging...")
//     console.log(constructor)
// }

// Decorator factory

const Logger = (logString: string) => {
    return (constructor: Function) => {
        console.log(logString);
        console.log(constructor);
    };
};

const WithTemplate = (template: string, hookId: string) => {
    return (constructor: any) => {
        console.log("Rendering");
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector("h1")!.textContent = p.name;
        }
    };
};

// can also add more than one decorator - execute bottom up

@Logger("LOGGING - PERSON")
@WithTemplate("<h1>My Person</h1>", "app")
class Person {
    name: string = "Benja";
    constructor() {
        console.log("Creating a new person");
    }
}

const person = new Person();

console.log(person);

// Property decorators

const Log = (target: any, propertyName: string | Symbol) => {
    console.log("Property decorator");
    console.log(target, propertyName);
};

// can also add decorators to accessors

const Log2 = (target: any, name: string | Symbol, descriptor: PropertyDescriptor) => {
    console.log("Accessor decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
};

// and methods

const Log3 = (target: any, name: string | Symbol, descriptor: PropertyDescriptor) => {
    console.log("Method decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
};

// and even parameters

const Log4 = (target: any, name: string | Symbol, position: number) => {
    console.log("Parameter decorator");
    console.log(target);
    console.log(name);
    console.log(position);
};

class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error("Price must be positive");
        }
    }

    constructor(title: string, price: number) {
        this.title = title;
        this._price = price;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}


// this is useful!!!
const Autobind = (_: any, __: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,

        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}


class Printer {
    message = "This works!";
    
    @Autobind
    showMessage() {
        console.log(this.message)
    }
}

const p = new Printer();

const button = document.querySelector("button")!;

// withought AutoBind
// button.addEventListener("click", p.showMessage.bind(p));

button.addEventListener("click", p.showMessage.bind(p));


//---

interface ValidatorConfig {
    [property: string]: {
        [validatable: string]: string[] // ["required", "positive"]
    }
}

const registeredValidator: ValidatorConfig = {};


const Required = (target: any, propName: string) => {
    registeredValidator[target.constructor.name] = {
        ...registeredValidator[target.constructor.name],
        [propName]: [...(registeredValidator[target.constructor.name]?.[propName] ?? []), 'required']
    }
}

const PositiveNumber = (target: any, propName: string) => {
    registeredValidator[target.constructor.name] = {
        ...registeredValidator[target.constructor.name],
        [propName]: [...(registeredValidator[target.constructor.name]?.[propName] ?? []), 'positive']
    }
}

const validate = (obj: any) => {
    const objvalidatorConfig = registeredValidator[obj.constructor.name];
    if (!objvalidatorConfig) {
        return true
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
}

class Course {
    @Required
    title: string;
    @PositiveNumber
    @Required
    price: number;

    constructor(title: string, price: number) {
        this.title = title;
        this.price = price;
    }
}


const courseForm = document.querySelector("form")!;

courseForm.addEventListener("submit", event => {
    event.preventDefault();
    const titleEl = document.getElementById("title") as HTMLInputElement;
    const priceEl = document.getElementById("price") as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;

    const createdCourse = new Course(title, price);

    if (!validate(createdCourse)) {
        alert("Invalid input, please try again");
        return
    }

    console.log(createdCourse);
});