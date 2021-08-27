// anywhere we use promises we can now use async await.
// remember async await is just a syntax sugar used to make promises "appear" to be synchronous.

const fetch = require('node-fetch')

const API_KEY = "7009f5cd"

//using promises

// const getPromisedDog = () => {
//     fetch("https://dog.ceo/api/breeds/image/random").then(
//         (response) => response.json()
//     ).then(value => console.log(value.message))
// }

// getPromisedDog();

//async
// wherever we have then we await

const getAsyncDog = async () => {
    const dog = await fetch("https://dog.ceo/api/breeds/image/random");
    const dogJson = await dog.json();
    console.log(dogJson.message);
}

getAsyncDog();