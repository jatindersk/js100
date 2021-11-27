
// let name = rlSync.question(`What's your name? `);
// console.log(`Hello, ${name}!`);

let getName = text => {
  let name = rlSync.question(`${text}`);
  let rlSync = require('readline-sync');
  return name;
}

let firstName = getName(`What's your first name? `);
let lastName = getName(`What's your last name? `);

console.log(`Hello, ${firstName} ${lastName}`);