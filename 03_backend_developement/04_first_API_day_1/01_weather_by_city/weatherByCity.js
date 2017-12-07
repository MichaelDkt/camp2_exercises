const request = require("request");
const ID_WEATHERMAP = process.env.ID_WEATHERMAP;

request(
  {
    url: "api.openweathermap.org/data/2.5/weather?q={city name}&APPID={ID_WEATHERMAP}",
    method: "GET",
    headers: {
      "Authorization": "APPID={APIKEY}"
    }
  },
  function(error, response, result) {
    console.log("result:", result); // Print the HTML for the Google homepage.
  }
);
