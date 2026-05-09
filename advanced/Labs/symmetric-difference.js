/**
 * Lab: Build a Symmetric Difference Function
 * 
 * Description: Compare two arrays and return a new array with any items only found in one of the two given arrays,
 *              but not both. In other words, return the symmetric difference of the two arrays.
 * 
 * Example:(["diamond", "stick", "apple"], ["stick", "emerald", "bread"]) → ["diamond", "apple", "emerald", "bread"]
 */

function diffArray(arr1, arr2) {
  let diffArrayFromArr2 = arr1.filter(elm => !arr2.includes(elm));
  let diffArrayFromArr1 = arr2.filter(elm => !arr1.includes(elm));

  const result = [...diffArrayFromArr2, ...diffArrayFromArr1];

  return result;
}

console.log(diffArray(["diamond", "stick", "apple"], ["stick", "emerald", "bread"]));