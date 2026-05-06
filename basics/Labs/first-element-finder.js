/**
 * Lab: Build a First Element Finder
 * 
 * Description: In this lab, you will create a function that looks
 *              through an array and returns the first element
 *              that passes a test function
 * 
 * Example: ([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) → 8
 */

const findElement = (arr, func) => {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i]))
      return arr[i];
  }
  return undefined;
}