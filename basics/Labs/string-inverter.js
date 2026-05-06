/**
 * Lab: Build a String Inverter
 * 
 * Description: build a simple string inverter that reverses
 *              the characters of a given string.
 * 
 * Example: "hello" → "olleh"
 */


function reverseString(string) {
  return string.split("").reverse().join("");
}
