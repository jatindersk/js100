let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

// Write some code here.
console.log(passcode.join('-'));
// Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'

// Alternate solution (incomplete)
// let pwdString = '';

// passcode.forEach(str => {
//   pwdString += str + '-'; 
// })

// console.log(pwdString);

let str = '';
for (let val of passcode) {
  console.log(val);
}