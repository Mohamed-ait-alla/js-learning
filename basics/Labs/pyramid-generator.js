/**
 * Lab: Build a Pyramid Generator
 * 
 * Description: In this lab, you will create a function that takes three
 *              arguments, the pattern, rows, and a boolean value.
 *              the function should return a string in which the pattern
 *              character is repeated and arranged to form a pyramid having
 *              the vertex facing upwards when the third argument is false
 *              and downwards when the third argument is true.
 * 
 *                                   o
 *                                  ooo
 * Example: ("o", 4, false) →      ooooo
 *                                ooooooo
 */


function pyramid(pattern, rows, isUpWards) {
  let generatedPyramid = "\n";
  if (!isUpWards) {
    let nbSpaces = Math.floor(((rows * 2) - 1) / 2);
    for (let i = 0; i < rows; i++) {
      generatedPyramid += `${" ".repeat(Math.floor(nbSpaces))}${pattern.repeat(((i + 1) * 2) - 1)}\n`;
      nbSpaces--;
    }
  }
  else {
    for (let i = 0; i < rows; i++) {
      generatedPyramid += `${" ".repeat(Math.floor((i * 2) / 2))}${pattern.repeat(((rows * 2) - (i * 2) -1))}\n`;
    }
  }

  return generatedPyramid;
}

console.log(pyramid("o", 4, true));