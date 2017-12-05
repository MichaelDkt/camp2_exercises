// ## A Pyramid of base 7
//
// ```
//    *
//   ***
//  *****
// *******
// ```

const space = ["", "", "", ""];
const space2 = ["", "", "", ""];
const star = ["*"];

const pyramid = [];
for (let i = 0; i <7; i++) {
  pyramid.push(space.pop());
  pyramid.push(star);
  pyramid.push(space2.pop());
  console.log(pyramid.join());
}
