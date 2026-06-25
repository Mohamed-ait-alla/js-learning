/**
 * Lab: Build an Nth Fibonacci Number Calculator
 * 
 * Description: In this lab, you will create a function that takes a non-negative integer n
 * 				the function should use a dynamic programming approach to compute and return
 * 			 	the n-th number from the Fibonacci sequence.
 * 
 * Example: (15) → 610 
 */

const fibonacci = (n) => {
  const sequence = [0, 1];

  for (let i = 2; i <= n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }

  return sequence[n];
}

console.log(fibonacci(10)); // 55