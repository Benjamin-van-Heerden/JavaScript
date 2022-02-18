// Open movie database
const fetch = require('node-fetch')

const API_KEY = "7009f5cd"


const request = fetch(`https://www.omdbapi.com/?s=batman&y=2018&apikey=${API_KEY}`);
//fetch returns a promise

request
    .then((response) => response.json())
    .then(data => console.log(data))