let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

let oddLengths = arr => { 
   return arr.reduce((acc, el) => {
  
  if (el.length % 2 === 1) {
    acc.push(el.length);
  }

  return acc;
}, []);
}

// function oddLengths(strings) {
//   return strings.reduce((filteredNumbersArray, letters) => {
//     let length = letters.length;
//     if (length % 2 === 1) {
//       filteredNumbersArray.push(length);
//     }

//     return filteredNumbersArray;
//   }, []);
// }

console.log(oddLengths(arr)); // => [1, 5, 3]