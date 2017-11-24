// ## Iteration on arrays with filter using while
//
// -  Create an array called `litteralDigits` from `zero` to `nine` where each array entry is a spelled-out number;
// -  Using `length`, write on `stdout` each odd values of the table.

const litteralDigits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"].filter(odd);

for(let i = 0 ; i < litteralDigits.length; i++) {
  console.log(litteralDigits[i]);
}

function odd(litteralDigits) {
  return (litteralDigits % 2) !== 0;
}
