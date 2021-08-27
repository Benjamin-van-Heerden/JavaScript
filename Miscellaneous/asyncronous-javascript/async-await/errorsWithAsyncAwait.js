// can handle with try catch
const fetch = require("node-fetch");

const f = async () => {
    try {
        const response = await fetch("https://some-host.com/wrong-url")
    } catch (e) {
        console.log(e.message);
    }
}

f();

// alternatively

const g = async () => {
    const response = await fetch("https://some-host.com/wrong-url")
}

g().catch(e => console.log(e.message));