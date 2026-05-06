/**
 * Lab: Build a Title Case Converter
 * 
 * Description: In this lab you will create a function that converts a string
 *              to title case. Title case means that the first letter
 *              of each word is capitalized and the rest of the word
 *              is in lower case.
 * 
 * Example: "I like to code" → "I Like To Code"
 */

function titleCase(string) {
  let result = string.split(" ");
  for (let i = 0; i < result.length; i++)
  {
    result[i] = result[i][0].toUpperCase() + result[i].slice(1).toLowerCase();
  }
  return result.join(" ");
}

console.log(titleCase("sHoRt AnD sToUt"));