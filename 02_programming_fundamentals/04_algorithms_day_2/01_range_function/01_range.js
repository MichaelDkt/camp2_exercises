// Write a function that takes two input parameters, and returns a new array with defaults values between the start
// number and the end number.
//
// This function should work in both ascending or descending order.

// Complete this function.

function range(startNumber,endNumber) {
  const range2 = [];
  if (startNumber < endNumber) {
    for(let i = startNumber; i<=endNumber; i++) {
      range2.push(i);
    }
  } else {
    for(let i = startNumber; i>= endNumber; i--) {
      range2.push(i);
    }
  }
  return range2;

}


// function range_asc(min, max) {
//   const data = [];
//   for(let i = min; i <= max; i++) {
//     data.push(i);
//   }
//   return data;
// }
//
// function range_desc(max, min) {
//   const data = [];
//   for(let i = max; i >= min; i--) {
//     data.push(i);
//   }
//   return data;
// }
//
// function range(x, y) {
//   let f;
//   if (x < y) {
//     return range_asc(x, y);
//   } else {
//     return range_desc(x, y);
//   }
// }
//
//














// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = range;
