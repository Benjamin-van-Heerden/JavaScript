interface Named {
    readonly name: string;
    surname?: string; //optional property or method (can also be used in classes and as function parameters)
}

interface HasAge {
    age: number;
}

interface Greetable extends Named, HasAge {
    greet(phrase: string): void;
}

class Person implements Greetable {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(phrase: string): void {
        console.log(phrase);
    }
}

const user: Person = new Person("Benj", 30);

user.greet("Hi")


interface Func2Num {
    (a: number, b: number): number
}

const addTwo: Func2Num = (a: number, b: number) => {
    return a + b;
}

//similarly
type FuncType = (a: number, b: number) => number

const anotherAddTwo: FuncType = (a: number, b: number) => {
    return a + b;
}

