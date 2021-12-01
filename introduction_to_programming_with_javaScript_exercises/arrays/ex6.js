let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

let oddLengths = array => array.map(el => el.length).filter(len => len % 2 !== 0);

console.log(oddLengths(arr)); // => [1, 5, 3]