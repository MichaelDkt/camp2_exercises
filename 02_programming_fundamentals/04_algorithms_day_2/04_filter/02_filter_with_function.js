// filter takes an array of integer and a function of filtering
// such as filter([1, 2, 3, 4, 5], pickEvenNumbers) returns [2, 4]
function odd(x) {
  return (x % 2) === 0;
}

const x = [1, 2, 3, 4, 5].filter(odd);
x === [2, 4];

// do not remove this line, it is for tests
module.exports = filter;
