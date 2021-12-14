let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

let oddLengths = arr => arr.map(el => el.length).filter(el => (el % 2 !== 0))

console.log(oddLengths(arr)); // => [1, 5, 3]