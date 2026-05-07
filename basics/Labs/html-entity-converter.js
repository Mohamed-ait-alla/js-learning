/**
 * Lab: Implement an HTML Entity Converter
 * 
 * Description: In This lab is about converting special characters
 *              in a string with their corresponding HTML entities.
 * 
 * Example: "Dolce & Gabbana" → Dolce &amp; Gabbana
 */

function convertHTML(string) {
  let copy = string.split("");
  for (let i = 0; i < copy.length; i++) {
    if (copy[i] === "&") {
      copy.splice(i, 1, "&amp;")
    } else if (copy[i] === "<") {
      copy.splice(i, 1, "&lt;");
    } else if (copy[i] === ">") {
      copy.splice(i, 1, "&gt;");
    } else if (copy[i] === "\"") {
      copy.splice(i, 1, "&quot;");
    } else if (copy[i] === "\'") {
      copy.splice(i, 1, "&apos;");
    }
  }
  return copy.join("");
}

console.log(convertHTML("Dolce & Gabbana"));