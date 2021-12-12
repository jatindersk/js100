let isNotANumber = arg => (arg !== arg) ? 'true' : 'false';

console.log(isNotANumber(NaN));
console.log(isNotANumber('NaN'));
console.log(isNotANumber(876));