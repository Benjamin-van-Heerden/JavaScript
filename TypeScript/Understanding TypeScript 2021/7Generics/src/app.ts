// const names: Array<string | number> = ["Max", "Benj", 2];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Hi there")
//     }, 2000);
// });

// promise.then(data => {
//     console.log(data);
// });

// Own Generic Types (very cool)

const merge = <T extends object, U extends object>(objA: T, objB: U) => {
    return Object.assign(objA, objB);
};

const mergedObj = merge({ name: "Ben" }, { age: 25, hobbies: ["Fishing"] });

console.log(mergedObj.age);
//

interface hasLength {
    length: number;
}

const countAndDescribe = <T extends hasLength>(element: T) => {
    return [element, `Length: ${element.length}`];
};

console.log(countAndDescribe("Hi There"));

// keyof constraint

// const extractAndConvert = (obj: object, key: string) => {
//     return "Value: " + obj[key]
// }

// console.log(extractAndConvert({}, "name"))

const extractAndConvert = <T extends object, U extends keyof T>(
    obj: T,
    key: U
) => {
    return "Value: " + obj[key];
};

console.log(extractAndConvert({ name: "Ben" }, "name"));

// generic classes
// objects in this type of storage is a red flag regarding the removeItem method -> js looks for memory location
class StorageThing<T extends string | number | boolean > {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new StorageThing<string>();

textStorage.addItem("Benja");
textStorage.addItem("Mike");
textStorage.removeItem("Benja");

console.log(textStorage.getItems());

const numberStorage = new StorageThing<number>();


// Generic utility types

//Partial
interface CourseGoal {
    title: string;
    description: string;
    completeWhen: Date;
}

const createCourseGoal = (title: string, description: string, date: Date): CourseGoal => {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeWhen = date
    return courseGoal as CourseGoal
}

// Read Only

const names: Readonly<string[]> = ["Max", "Benj"]

// names.push("Someone Else");
// names.pop();