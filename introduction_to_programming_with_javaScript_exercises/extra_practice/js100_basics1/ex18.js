let isBlank = str => (str.trim().length !== 0) ? false : true;

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // true
console.log(isBlank(''));     // true