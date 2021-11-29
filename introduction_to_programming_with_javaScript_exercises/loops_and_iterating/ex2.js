let factorial = num => {
  let result = 1;
  for (let i = num; i > 0; i -= 1) {
    result = result * i; // 1*3, 3*2, 6*1
  }
  return result;
}

// Reverse Logic:

// let factorial = num => {
//   let result = 1;
//   for (let i = 1; i <= num; i += 1) {
//     result = result * i;
//    // result = result * i; // 1*3, 3*2, 6*1
//   }
//   return result;
// }

console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320