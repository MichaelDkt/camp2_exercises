const express = require("express");
const app = express();
const PG = require("pg");
const client = new PG.Client();
const port = process.env.PORT || 3000;

client.connect();

// products
function products() {
  app.get("/products", function(error, result) {
    client.query("SELECT * FROM products", function(errorQuery, resultQuery) {
      if (errorQuery) {
        result.send(error);
      } else {
        result.json(resultQuery.rows);
      }
    });
  });
}
products();

// products/:id
function products_id() {
  app.get("/products/:id", function(request, result) {
    client.query(
      "SELECT * FROM products WHERE id = $1::uuid",
      [request.params.id],
      function(errorQuery, resultQuery) {
        if (errorQuery) {
          result.send(errorQuery);
        } else {
          result.json(resultQuery.rows);
        }
      }
    );
  });
}
products_id();
//brands
function brands() {
  app.get("/brands", function(error, result) {
    client.query("SELECT * FROM brands", function(errorQuery, resultQuery) {
      if (errorQuery) {
        result.send(error);
      } else {
        result.json(resultQuery.rows);
      }
    });
  });
}
brands();
// brands/:id
function brands_id() {
  app.get("/brands/:id", function(request, result) {
    client.query(
      "SELECT * FROM brands WHERE id = $1::uuid",
      [request.params.id],
      function(errorQuery, resultQuery) {
        if (errorQuery) {
          result.send(errorQuery);
        } else {
          result.json(resultQuery.rows);
        }
      }
    );
  });
}
brands_id();
//categories
function categories() {
  app.get("/categories", function(error, result) {
    client.query("SELECT * FROM categories", function(errorQuery, resultQuery) {
      if (errorQuery) {
        result.send(error);
      } else {
        result.json(resultQuery.rows);
      }
    });
  });
}
categories();

// categories/:id
function categories_id() {
  app.get("/categories/:id", function(request, result) {
    client.query(
      "SELECT * FROM categories WHERE id = $1::uuid",
      [request.params.id],
      function(errorQuery, resultQuery) {
        if (errorQuery) {
          result.send(errorQuery);
        } else {
          result.json(resultQuery.rows);
        }
      }
    );
  });
}
categories_id();

//categories/:id/products" -> return all products from a specific category


app.listen(port, function () {
  console.log("Server listening on port:" + port);
});

module.exports =
categories;
categories_id;
brands;
brands_id;
products;
products_id;
