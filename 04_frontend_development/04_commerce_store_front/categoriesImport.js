const request = require("request");
const fetch = require("node-fetch");


function categoriesImport(rootData) {
  return fetch(`https://decath-product-api.herokuapp.com/${rootData}`)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result
    })
    .catch(error => {
      console.warn(error);
    });
}
categoriesImport();


module.exports = {
categoriesImport : categoriesImport,
}
