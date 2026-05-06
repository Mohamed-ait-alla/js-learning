/**
 * Lab: Implement a Unique Sorted Union
 * 
 * Description: In this lab you will create a function that
 *              return a new array that contains unique
 *              values from the argument arrays.
 * 
 * Example: [1, 3, 2], [5, 2, 1, 4], [2, 1] → [1, 3, 2, 5, 4]
 */

function uniteUnique(...rest) {
  let result = [];
  for (let i = 0; i < rest.length; i++) {
    for (let j = 0; j < rest[i].length; j++) {
      if (!result.includes(rest[i][j])) {
        result.push(rest[i][j]);
      }
    }
  }
  return result;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));