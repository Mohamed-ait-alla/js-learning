/*
 * Workshop: Build a Palindrome Checker
 */

const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

const isPalindrome = (text) => text === text.split('').reverse().join("");

checkBtn.addEventListener("click", () => {
  const enteredText = textInput.value.toLowerCase();

  if (enteredText === "") {
    alert("Please input a value");
    return ;
  }

  const cleanedText = enteredText.replace(/[^a-z0-9]/g, "");

  result.textContent = isPalindrome(cleanedText) ? `${enteredText} is a palindrome` : `${enteredText} is not a palindrome`;
  textInput.value = "";
})