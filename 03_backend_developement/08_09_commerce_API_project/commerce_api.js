const request = require("request");
const PG = require("pg");
const client = new PG.Client();
client.connect();

// function exportCategoriesInDB (data) {
//   client.query(
//     "INSERT INTO categories VALUES ($1::uuid, $2::integer, $3::varchar(255))",
//     [data.id,data.decathlon_id, data.label ],
//     function (error, result) {
//       if (error) {
//         console.warn(error);
//       } else {
//         return data;
//       }
//     }
//   );
// }
// function exportBrandsInDB (data) {
//   client.query(
//     "INSERT INTO brands VALUES ($1::uuid, $2::varchar(255))",
//     [data.id, data.title],
//     function (error, result) {
//       if (error) {
//         console.warn(error);
//       } else {
//         return data;
//       }
//     }
//   );
// }
function exportProductsInDB (data) {
  client.query(
    "INSERT INTO products VALUES ($1::uuid, $2::integer, $3::varchar(255), $4::text, $5::varchar(255), $6::float, $7::float, $8::float, $9::integer, $10::text, $11::float)",
    [data.id,data.decathlon_id, data.title, data.description, data.brand_id, data.min_price, data.max_price, data.crossed_price, data.ercent_reduce, data.image_path, data.rating],
    function (error, result) {
      if (error) {
        console.warn(error);
      } else {
        return data;
      }
    }
  );
}

// function categoriesImport() {
//   request({
//     url: "https://decath-product-api.herokuapp.com/categories",
//     method: "GET",
//   },
//   function(error, response, result) {
//     const jsonCategories = JSON.parse(result);
//     console.log(jsonCategories);
//     return jsonCategories.forEach(exportCategoriesInDB);
//   }
//   );
// }
// categoriesImport();

// function brandsImport() {
//   request({
//     url: "https://decath-product-api.herokuapp.com/brands",
//     method: "GET",
//   },
//   function(error, response, result) {
//
//     const jsonBrands = JSON.parse(result);
//
//     console.log(jsonBrands);
//     return jsonBrands.forEach(exportBrandsInDB);
//   }
//   );
// }
// brandsImport();
//
function productsImport() {
  request({
    url: "https://decath-product-api.herokuapp.com/products",
    method: "GET",
  },
  function(error, response, result) {

    const jsonProducts = JSON.parse(result);

    console.log(jsonProducts);
    return jsonProducts.forEach(exportProductsInDB);
  }
  );
}
productsImport();
