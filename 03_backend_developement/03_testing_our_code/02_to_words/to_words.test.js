const toWords = require("./to_words");

test("split sentence to x words", function() {
  const result = toWords("Michael");
  expect(result).toEqual(["Michael"]);
});
