"use strict";
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
const merge = (objA, objB) => {
    return Object.assign(objA, objB);
};
const mergedObj = merge({ name: "Ben" }, { age: 25, hobbies: ["Fishing"] });
console.log(mergedObj.age);
const countAndDescribe = (element) => {
    return [element, `Length: ${element.length}`];
};
console.log(countAndDescribe("Hi There"));
// keyof constraint
// const extractAndConvert = (obj: object, key: string) => {
//     return "Value: " + obj[key]
// }
// console.log(extractAndConvert({}, "name"))
const extractAndConvert = (obj, key) => {
    return "Value: " + obj[key];
};
console.log(extractAndConvert({ name: "Ben" }, "name"));
// generic classes
// objects in this type of storage is a red flag regarding the removeItem method -> js looks for memory location
class StorageThing {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new StorageThing();
textStorage.addItem("Benja");
textStorage.addItem("Mike");
textStorage.removeItem("Benja");
console.log(textStorage.getItems());
const numberStorage = new StorageThing();
const createCourseGoal = (title, description, date) => {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeWhen = date;
    return courseGoal;
};
// Read Only
const names = ["Max", "Benj"];
// names.push("Someone Else");
// names.pop();
