const request = require("request");
const port = process.env.PORT || 3000;
const express = require("express");
const nunjucks = require("nunjucks");
const fetch = require("node-fetch");
const product = require("./categoriesImport");

const app = express();

nunjucks.configure("views", {
  autoescape: true,
  express: app
});

app.set("views", __dirname + "/views");
app.set("view engine", "njk");

app.get("/", function(request, result) {
  result.render("home");
});

app.listen(port, function () {
  console.log("Server listening on port:" + 3000);
});

app.get("/categories", function(request, result) {
  product.categoriesImport("categories")
  .then(categoriesDkt => {
    result.render("categories", {categories : categoriesDkt})
  })
  .catch(error => {
    console.warn(error);
  });
});
app.get("/categories/:id/products", function(request, result) {
  product.categoriesImport(`categories/${request.params.id}/products`)
  .then(productDkt => {
    result.render("product_list", {categories : productDkt})
  })
  .catch(error => {
    console.warn(error);
  });
});
app.get("/product_list/:id", function(request, result) {
  product.categoriesImport(`products/${request.params.id}`)
  .then(productPage => {
    result.render("product_list", {product : productPage})
  })
  .catch(error => {
    console.warn(error);
  });
});
app.get("/page_product/:id", function(request, result) {
  product.categoriesImport(`products/${request.params.id}`)
  .then(productInfo => {
    result.render("page_product", {product : productInfo})
  })
  .catch(error => {
    console.warn(error);
  });
});
