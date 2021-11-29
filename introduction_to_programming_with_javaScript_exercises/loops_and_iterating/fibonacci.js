// A sequence where a number is the sum of last two numbers in the sequence is called a fibonacci sequence.
// In fibonacci sequence, fibonacci(0) = 0 and fibonacci(1) = 1. These are the predefined values in fibonacci sequence.
// The expression of fibonacci sequence is: f(n) = f(n-1) + f(n-2) where n >= 2. ### f is an abbreviation of word fibonacci.


function fibonacci(num) {
  if (num < 2) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

console.log(fibonacci(8));
console.log(fibonacci(6));
console.log(fibonacci(20));