// ## A Rectangle of 10 by 10
//
// ```
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// ```

// ligne de 10
const star = ("*");

let starline = [];
for(let i=0; i < 10; i++) {
  starline.push(star);
}

// 10 lignes de 10
for(let i=0; i < 10; i++) {
  console.log(starline.join(""));
}
