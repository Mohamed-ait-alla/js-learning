/**
 * Lab: Implement a Value Remover Function
 * 
 * Description: In this lab, you will create a function that takes an initial array as its first argument,
 *              followed by one or more additional arguments representing the values to remove.
 * 
 * Example: ([1, 2, 3, 1, 2, 3], 2, 3) → [1, 1]
 */

function destroyer(arr, ...rest) {
  const args = rest.map(arg => arg);
  const result = arr.filter(elm => !args.includes(elm));

  return result;
}


console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));