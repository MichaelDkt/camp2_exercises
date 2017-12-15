const express = require("express");
const app = express();
const PG = require("pg");
const client = new PG.Client();
const request = require("request");
const port = process.env.PORT || 3000;
let compteur = 0;
client.connect();


function UIDCategories(callback) {
  client.query(
    "SELECT id FROM categories", function(error,result){
      if(error) {
        console.warm(error);
      } else {
        result.rows.forEach( category => {
          callback(category.id);
        });
      }
    });
}

function productByUID(id) {
  request(
    {
      url: `https://decath-product-api.herokuapp.com/categories/${id}/products`,
      method: "GET"
    },
    function(error, response, result) {
      if (error) {
        console.log(error);
      } else {
        JSON.parse(result).forEach(product => {
          compteur ++;
          client.query(
            "INSERT INTO products_by_categories VALUES ($1::uuid, $2::uuid)",
            [id, product.id],
            function(error, result) {
              if (error) {
                console.warn(error);
              } else {
                return result;
              }
            });
        });
        console.log(compteur);
      }
    }
  );
}

UIDCategories(productByUID);
