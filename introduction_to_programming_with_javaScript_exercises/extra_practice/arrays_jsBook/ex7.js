let array = [3, 5, 7];

let sumOfSquares = arr => arr.reduce((acc, el) => acc + (el * el), 0)  

console.log(sumOfSquares(array)); // => 83