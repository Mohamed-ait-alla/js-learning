/**
 * Lab: Build the Largest Number Finder
 * 
 * Description: In this lab, you will build a function that returns
 *              an array consisting of the largest number
 * 				from each provided sub-array.
 * 
 * Example: [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]] → [27, 5, 39, 1001]
 */


const largestOfAll = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++)
  {
    result.push(Math.max(...arr[i]));
  }
  return result;
}
