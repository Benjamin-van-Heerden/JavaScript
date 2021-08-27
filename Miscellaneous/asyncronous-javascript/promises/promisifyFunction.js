const capitalize = (text) => {
    return text[0].toUpperCase() + text.substring(1)
}

console.log(capitalize("hello"))

const promisifiedCapitalize = (text) => {
    return new Promise((resolve, reject) => {
        if (typeof text != "string") return reject(new Error("Argument must be of type string"));
        const result = text[0].toUpperCase() + text.substring(1)
        return resolve(result)
    })
}

console.log(promisifiedCapitalize("hello").then(
    (result) => {
        console.log(result);
    },
    (err) => {
        console.log(err);
    }
));

console.log(promisifiedCapitalize(42).then(
    (result) => {
        console.log("sucess" + result);
    },
    (err) => {
        console.log(err+"");
    }
));