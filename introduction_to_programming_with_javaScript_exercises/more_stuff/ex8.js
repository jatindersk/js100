let isNotANumber = val => val !== val;

console.log(isNotANumber(NaN));
console.log(isNotANumber(5));
console.log(isNotANumber('star'));