// filter takes an array of integer and a string with either odd or even
// such as filter([1, 2, 3, 4, 5], 'even') returns [2, 4]
function filter(number) {
  const oddOrEvenFilter = [];

  for(let i = 0; i < number.length; i++) {
    if (number[i] === 1 || number[i] === 3 || number[i] === 5) {
      oddOrEvenFilter.push(number[i], "odd");

    } else if (number[i] === 2 || number[i] === 4) {
      oddOrEvenFilter.push(number[i], "even");
    }
  }
  return (oddOrEvenFilter);
}
// do not remove this line, it is for tests
module.exports = filter;


// Target
//const oddArray = ([1, 3, 5], "odd");
//const evenArray = ([2, 4], "even");
