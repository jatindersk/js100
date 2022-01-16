let str = 'launch school tech & talk';

let newStr = str
  .split(' ')
  .map(word => word[0].toUpperCase() + word.slice(1))
  .join(' ');

console.log(newStr);