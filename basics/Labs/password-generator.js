/**
 * Lab: Build a Password Generator App
 * 
 * Description: In this lab, you'll practice using functions
 *              by building a random password generator.
 * 
 */

function generatePassword(passwordLength) {
  const pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let generatedPassword = "";
  for (let i = 0; i < passwordLength; i++) {
    generatedPassword += pool[Math.round(Math.random() * pool.length)];
  }

  return generatedPassword;
}

const password = generatePassword(12);
console.log(`Generated password: ${password}`);