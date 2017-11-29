// ## A simple line of 10 stars
//
// ```
// **********
// ```
const star = ("*");

let starline = [];
for(let i=0; i < 10; i++) {
  starline.push(star);
}
console.log(starline.join(""));
