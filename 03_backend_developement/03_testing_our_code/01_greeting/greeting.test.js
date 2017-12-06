const greet = require("./greeting");

test("say hello name", function() {
  const result = greet("Name");
  expect(result).toBe("Hello NAME!");
});

test("say hello world", function() {
  const result = greet();
  expect(result).toBe("Hello WORLD!");
});
