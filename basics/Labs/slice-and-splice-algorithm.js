/**
 * Lab: Implement the Slice and Splice Algorithm
 * 
 * Description: In this lab, you will need to create an algorithm to merge two arrays.
 * 
 * Example: ([1, 2, 3], [4, 5], 1) → [4, 1, 2, 3, 5]
 */


// Solution 1: without builtin functions
function frankenSplice(arr1, arr2, index) {
  let result = [];
  let len = arr2.length + arr1.length;
  for (let i = 0; i < len; i++) {
    if (i === index) {
      len -= arr1.length;
      for (let j = 0; j < arr1.length; j++) {
        result.push(arr1[j]);
      }
      if (len <= 0)
        break;
    }
    result.push(arr2[i]);
  }
  return result;
}


// Solution 2: with builtin functions
function frankenSplice(arr1, arr2, index) {
	let result = [...arr2];
	result.splice(index, 0, ...arr1);
	return result;
}
