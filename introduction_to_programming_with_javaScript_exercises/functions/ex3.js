let rlSync = require('readline-sync');

let num1 = parseFloat(rlSync.question(`Enter first number - `));
let num2 = parseFloat(rlSync.question('Enter second number - '));

let multiply = (num1, num2) => console.log(`${num1} * ${num2} = ${num1 * num2}`);

multiply(num1, num2);