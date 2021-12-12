let isNegativeZero = num => (5 / num === Infinity) ? false : true;

console.log(isNegativeZero(-0));
console.log(isNegativeZero(0));