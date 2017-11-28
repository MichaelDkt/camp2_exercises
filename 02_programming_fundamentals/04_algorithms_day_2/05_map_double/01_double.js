// Create a function `double` which take an array of integer as parameter and return a new array with all values doubled.
// WARNING: You're not allowed to use `Array.map`!

function double(numbers, multiplytwo) {
  let numbersmulttwo = [];

  for(let i=0; i<numbers.length; i++);
  numbersmulttwo = numbers * 2;

  return numbersmulttwo;
}

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = double;
