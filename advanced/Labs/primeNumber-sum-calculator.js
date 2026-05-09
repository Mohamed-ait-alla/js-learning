/**
 * Lab: Build a Prime Number Sum Calculator
 * 
 * Description: In this lab, you will build a calculator that takes a number and
 *              returns the sum of all prime numbers that are less than
 *              or equal to that number.
 * 
 * Example: 5 → 10
 */

function isPrime(num) {
  if (num < 2)
    return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0)
      return false;
  }
  return true;
}

function sumPrimes(num) {
  if (num < 2)
    return 0;
  return Array.from({length: num - 1}, (_, i) => i + 2) // [2, 3, 4, ...num]
         .filter(isPrime)                               // keep only primes
		 .reduce((sum, prime) => sum += prime, 0);      // sum them all
}

console.log(sumPrimes(10)) // 17