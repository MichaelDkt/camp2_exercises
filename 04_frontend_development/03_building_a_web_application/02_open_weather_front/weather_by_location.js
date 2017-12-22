// const express = require("express");
// const app = express();

//const port = process.env.PORT || 3000;

const fetch = require("node-fetch");

const API_KEY = process.env.ID_WEATHERMAP;
const API_KEY_GOOGLE = process.env.ID_GOOGLE_PLACE;

// client.connect();
//
// // products
// function products() {
//   app.get("/products", function(error, result) {
//     client.query("SELECT * FROM products", function(errorQuery, resultQuery) {
//       if (errorQuery) {
//         result.send(error);
//       } else {
//         result.send(weatherByCity(resultQuery));
//       }
//     });
//   });
// }

function weatherByCity(city) {
  return fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${city}&key=${API_KEY_GOOGLE}`)
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
  document.getElementById("input1").value = weatherByCity();
}
