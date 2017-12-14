const express = require("express");
const app = express();
const PG = require("pg");
const client = new PG.Client();
const port = process.env.PORT || 3000;
const request = require("request");


function UIDCategories(callback) {
  request({
    url: "https://decath-product-api.herokuapp.com/categories",
    method: "GET",
  },
  function(error, response, result) {
    const UID = JSON.parse(result);
    UID.forEach(category => {
      callback(category.id);
    });
  }
  );
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
          client.query(
            "INSERT INTO products_by_categories VALUES ($1::uuid, $2::uuid)",
            [id, product.id],
            function(error, result) {
              if (error) {
                console.warn(error);
              } else {
                return result;
              }
            }
          );
        });
      }
    }
  );
}

UIDCategories(productByUID);
