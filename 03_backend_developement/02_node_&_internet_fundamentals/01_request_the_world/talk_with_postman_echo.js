const request = require("request");

function simpleGet(callback) {
  request(
    {
      url: "https://postman-echo.com/get",
      method: "GET"
    },
    function(error, response, result) {
      callback(result);
    }
  );
}
function simpleGetWithParams(callback) {
  request(
    {
      url: "https://postman-echo.com/get?people=Frieda&people=Francis",
      method: "GET",
      form : {
        foo : "bar",
        program : "camp2",
        //people : ["Frieda", "Francis"]
      }
    },
    function(error, response, result) {
      callback(JSON.parse(result).args);
    }
  );
}
function validateTimestamp(callback) {
  const today = new Date ();
  const today2 = today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate();

  request(
    {
      url: `https://postman-echo.com/time/valid?timestamp=${today2}`,
      method: "GET",
    },
    function(error, response, result) {
      callback(result);
    }
  );
}

module.exports = {
  simpleGet : simpleGet,
  simpleGetWithParams : simpleGetWithParams,
  validateTimestamp : validateTimestamp
};
