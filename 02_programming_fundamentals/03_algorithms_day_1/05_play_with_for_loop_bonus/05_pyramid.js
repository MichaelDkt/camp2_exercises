// ## A Pyramid of base 7
//
// ```
//    *
//   ***
//  *****
// *******
// ```

let fullLine = ["*", "*", "*", "*", "*", "*", "*"];

let startSpace = 0;
let endSpace = 7;

while (fullLine !== ["", "", "", "*", "", "", ""]) {

  (fullLine[startSpace]) = "" && (fullLine[endSpace] = "") && (startSpace = startSpace + 1) && (endSpace = endSpace - 1);

  console.log(fullLine.join(""));

}
