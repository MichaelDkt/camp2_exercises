const fetch = require("node-fetch");
const readline = require("readline");

const API_KEY = process.env.ID_WEATHERMAP;

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function localisation() {
  reader.question("What is you city?\n", (city) =>{
    weatherByCity(city)
      .then(() => {
        reader.close();
      });
  });
}

function weatherByCity(city) {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result.main.temp;
    })
    .then(result_temp => {
      console.log(result_temp + "°C");
    })
    .catch(error => {
      console.warn(error);
    });
}

localisation();
