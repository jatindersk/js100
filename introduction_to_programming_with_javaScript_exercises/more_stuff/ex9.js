// let negZero = num => (num / 0 === -Infinity) ? true : false ; // Incorrect approach
let negZero = num => 1 / num === -Infinity; or (value === 0) && (1 / value === -Infinity); // LS approach


console.log(negZero(-0));
console.log(negZero(0));
console.log(negZero(8));
console.log(negZero(-6));