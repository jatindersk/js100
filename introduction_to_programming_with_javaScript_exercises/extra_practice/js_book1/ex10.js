// let numberRange = num => {
//   switch (num) {
//     case (num < 0): 
//       console.log(`${num} is less than 0`);
//       break;
//     case (0 <= num <= 50): 
//       console.log(`${num} is between 0 and 50.`);
//       break;
//     case (51 <= num <= 100): 
//       console.log(`${num} is between 51 and 100.`);
//       break;
//     default: 
//       console.log(`${num} is greater than 100`);
//   }
// }

// switch statement didn't work in this case because the conditional expression on line 2 (num) is
// matched for strict equality against each case value. Hence we cannot employ comparison operators here
// In short, a switch statement compares a single value agaist multiple values. It can't employ expressions for comparions

function numberRange(number) {
  if (number < 0) {
    console.log(`${number} is less than 0`);
  } else if (number <= 50) {
    console.log(`${number} is between 0 and 50`);
  } else if (number <= 100) {
    console.log(`${number} is between 50 and 100`);
  } else {
    console.log(`${number} is greater than 100`);
  }
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);