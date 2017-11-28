// Create a function `double` which take an array of integer as parameter and return a new array with all values doubled.
// WARNING: You're not allowed to use `Array.map`!

function double(numbers) {
  const doubleNumbers = [];

  for(let i=0; i<numbers.length; i++) {
    doubleNumbers.push (numbers[i] * 2);
  }
  return doubleNumbers;
}

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = double;
