import axios from "axios";

const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

const GOOGLE_API_KEY = "AIzaSyD7DIPLVJTOW170jcGYIofvM-l_d3jLW-Y";

type GoogleGeocodingResponse = {
    results: { geometry: { location: { lat: number; lng: number } } }[];
    status: "OK" | "ZERO_RESULTS";
};

const searchAddressHandler = (event: Event) => {
    event.preventDefault();
    const address = addressInput.value;

    // send to Google Api
    axios
        .get<GoogleGeocodingResponse>(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(address)}&key=${GOOGLE_API_KEY}`
        )
        .then((response) => {
            if (response.data.status != "OK") {
                throw new Error("Could not fetch anything!");
            }
            const coordinates = response.data.results[0].geometry.location;

            const map = new google.maps.Map(document.getElementById("map")!, {
                center: coordinates,
                zoom: 16,
            });

            const marker = new google.maps.Marker({
                position: coordinates,
                map: map,
            });
        })
        .catch((err) => {
            alert(err.message);
            console.log(err);
        });
};

form.addEventListener("submit", searchAddressHandler);
