const fetch = require("node-fetch");
const readline = require("readline");

const API_KEY = process.env.ID_WEATHERMAP;
const API_KEY_GOOGLE = process.env.ID_GOOGLE_PLACE;

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function localisation() {
  reader.question("What is you site?\n", (site) =>{
    weatherByCity(site)
      .then(() => {
        reader.close();
      });
  });
}
function weatherByCity(site) {
  return fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${site}&key=${API_KEY_GOOGLE}`)
    .then (response => {
      return response.json();
    })
    .then (response => {
      return response.results[0].geometry.location;
    })
    .then (response => {
      return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${response.lat}&lon=${response.lng}&units=metric&APPID=${API_KEY}`);
    })
    .then (response => {
      return response.json();
    })
    .then (result => {
      return result.main.temp;
    })
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.warn(error);
    });
}
localisation();
