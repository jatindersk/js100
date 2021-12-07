let str = 'launch school tech & talk';

let upperArr = str.split(' ').map(str => {
  return str[0].toUpperCase() + str.substring(1, str.length);
});

console.log(upperArr.join(' '));