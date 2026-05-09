/**
 * Lab: Implement a Range-Based LCM Calculator
 * 
 * Description: In this lab, you will create a function that takes an array of two numbers and
 *              returns the least common multiple (LCM) of those two numbers and
 *              all the numbers between them.
 * 
 * Example:[1, 5] → 60
 */

// helper function that returns the GCD (Greatest Common Divisor)
function gcd(a, b) {
  while (a % b !== 0) {
    let temp = a;
    a = b;
    b = temp % b;
  }
  return b;
}

// main function
function smallestCommons(arr) {
  if (arr[0] < arr[1]) {
    let temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
  }

  // get the range between the two passed numbers
  const range = Array.from({length: (arr[0] - arr[1]) + 1}, (_, i) => i + arr[1]);

  // calculate the LCM
  let result = range.reduce((lcm, num) => (lcm * num) / gcd(lcm, num));
  
  return result;
}

console.log(smallestCommons([2, 10])); // 2520
