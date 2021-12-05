let text = 'launch school tech & talk';

let textArr = text.split(' ');
//console.log(textArr);

let newTxtArr = textArr.map(str => str[0].toUpperCase() + str.slice(1));
console.log(newTxtArr);

let finalText = newTxtArr.reduce((acc, el) => {
  return acc + el + ' ';
}, '')

console.log(finalText);