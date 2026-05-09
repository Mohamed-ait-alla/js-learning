/**
 * Lab: Implement a Sorted Index Finder
 * 
 * Description: In this lab you will create a function that returns the lowest index at which
 *              a value should be inserted into an array once it has been sorted in ascending order.
 * 
 * Example:([1, 2, 3, 4], 1.5) → 1
 */

function getIndexToIns(arr, num) {
  arr.sort((a, b) => (a > b));
  const indexToInsert = arr.findIndex(nb => nb >= num);
  return (indexToInsert === -1) ? arr.length : indexToInsert;
}

console.log(getIndexToIns([3, 10, 5], 11)); // 3