const request = require("request");

const API_KEY = process.env.ID_WEATHERMAP;


function weatherByCity(city) {
  const json = request({
    url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`,
    method: "GET",
  },
  function(error, response, result) {

    const json = JSON.parse(result);

    console.log(json.main.temp + "°C");
    return (json.main.temp + " °C");
  }
  );
  return json;
}
weatherByCity("London");

module.exports = weatherByCity;
