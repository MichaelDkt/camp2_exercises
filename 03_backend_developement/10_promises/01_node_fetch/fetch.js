const fetch = require("node-fetch");

fetch("https://decath-product-api.herokuapp.com/products/efe288cb-fb63-4b23-b8df-529f04b8b02b")
  .then(response => {
    return response.json();
  })
  .then(function(result){
    return result.brand_id;
  })
  .then(function(brand_id){
    return fetch(`https://decath-product-api.herokuapp.com/brands/${brand_id}`);
  })
  .then(function(brand){
    return brand.json();
  })
  .then(function(result) {
    console.log(result.title);
  })
  .catch((error) => {
    console.warn(error);
  });
