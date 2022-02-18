// using dogs api
const XMLHttpRequest = require('xhr2');
const xhr = new XMLHttpRequest();

xhr.open("GET", "https://dog.ceo/api/breeds/list/all");
xhr.onreadystatechange = () => {
    if(xhr.readyState === XMLHttpRequest.DONE) {
        const response = JSON.parse(xhr.responseText);
        const breeds = Object.keys(response.message);
        const firstBreed = breeds[0];

        const xhr2 = new XMLHttpRequest();

        xhr2.open("GET", `https://dog.ceo/api/breed/${firstBreed}/images/random`);
        xhr2.onreadystatechange = () => {
            if(xhr2.readyState === XMLHttpRequest.DONE) {
                console.log(xhr2.responseText);                
            }
        }
        xhr2.send(null);

    }
}
xhr.send(null);

// imageine how this code would look if we had to make 5 http requests. We would need to channel everything through the callbacks and it would be 
// a disaster

