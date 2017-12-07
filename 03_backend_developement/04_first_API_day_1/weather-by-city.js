const request = require("request");
const ID_WEATHERMAP = process.env.ID_WEATHERMAP;
console.log(ID_WEATHERMAP);
request(
  {
    url: "api.openweathermap.org/data/2.5/weather?q={city name}&APPID={ID_WEATHERMAP}",
    method: "GET",
    headers: {
      "Authorization": "bearer <TOKEN>"
    }
  },
  function(error, response, result) {
    console.log("error:", error); // Print the error if one occurred
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    console.log("result:", result); // Print the HTML for the Google homepage.
  }
);
