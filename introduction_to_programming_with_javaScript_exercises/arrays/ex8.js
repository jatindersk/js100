let oddLengths = strArr => {
  return strArr.reduce((acc, el) => { 
    if (el.length % 2 !== 0) {
      acc.push(el.length);
    }
    return acc;
  }, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]