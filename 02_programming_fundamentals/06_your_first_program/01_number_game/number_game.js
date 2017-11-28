function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let mysteryNumber = randomInt(1, 100);

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function test(input) {
  if (parseInt(input, 10) === mysteryNumber) {
    console.log("Right !");
    reader.close();

  } else if (parseInt(input, 10) > mysteryNumber && parseInt(input, 10) < 100) {
    console.log("Too high");
    reader.question("What is the number?\n", test);

  } else if (parseInt(input, 10) < mysteryNumber && parseInt(input, 10) > 0) {
    console.log("Too low");
    reader.question("What is the number?\n", test);

  } else if (parseInt(input, 10) < 0 !== parseInt(input, 10) > 100) {
    console.log("The number is between 1 and 100");
    reader.question("What is the number?\n", test);

  } else if (Number.isInteger(parseInt(input, 10)) === false) {
    console.log("This is not a number");
    reader.question("What is the number?\n", test);
  }
}

reader.question("What is the number?\n", test);
