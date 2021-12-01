let array = [3, 5, 7];

// With accumulator supplied with an initial value of 0
function sumOfSquares(arr) {
  return arr.reduce((acc, num) => acc + (num * num), 0)
};

// Without supplying any value to the accumulator
function sumOfSquares(arr) {
  return arr.reduce((acc, num) => acc + (num * num)) // 3 + (5 * 5)   +   49 + 28 = 77
};

console.log(sumOfSquares(array)); // => 83