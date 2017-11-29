// ## Inverted Right triangle of size 5
//
// ```
// *****
//  ****
//   ***
//    **
//     *
// ```

const star = ["*", "*", "*", "*", "*"];

console.log(star.join(""));
for(let i=0; i < 4; i++) {
  star.pop();
  console.log(star.join(""));
}
