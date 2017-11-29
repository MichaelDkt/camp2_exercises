// ## Right triangle of size 5
//
//
// ```
// *
// **
// ***
// ****
// *****
// ```

const star = ("*");

let triangle = [];

for(let i=0; i < 5; i++) {
  triangle.push(star);
  console.log(triangle.join(""));
}
