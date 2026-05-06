/**
 * Lab: Design a Sum All Numbers Algorithm
 * 
 * Description: In this lab you will create a function that
 *              named 'sumAll' that accepts an array of two numbers.
 *              the function should return the sum of all numbers
 *              between the passed two numbers including them.
 *              The lowest number will not always come first.
 * 
 * Example: [4, 1] → 10
 */

function sumAll(array) {
  let sum = 0;
  if (array[0] > array[1]) {
    const temp = array[1];
    array[1] = array[0];
    array[0] = temp;
  }

  for (let i = array[0]; i <= array[1]; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumAll([4, 1])) // 10