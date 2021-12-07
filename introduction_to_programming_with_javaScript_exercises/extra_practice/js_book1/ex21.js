let isNegativeZero = num => (6 / num) === -Infinity ? true : false;

console.log(isNegativeZero(-0));
console.log(isNegativeZero(0));