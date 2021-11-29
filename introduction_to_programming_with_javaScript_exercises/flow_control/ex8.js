let numberRange = num => {
  if (num < 0) {
    console.log(`${num} is less than 0`);
  } else if (num > 0 && num <= 50) {
    console.log(`${num} is between 0 and 50`);
  } else if (num > 50 && num <= 100) {
    console.log(`${num} is between 51 and 100`);
  } else {
    console.log(`${num} is greater than 100`);
  }
}

// switch statement cannot be used in this scenario because it compares a value against
// multiple values for strict equality (===). In order to compare expressions, we have
// use if else statements

// let numberRange2 = num => {
//   switch (num) {
//     case (num < 0):
//       console.log(`${num} is less than 0`);
//       break;
//     case (num > 0 && num <= 50):
//       console.log(`${num} is between 0 and 50`);
//       break;
//     case (num > 50 && num <= 100):
//       console.log(`${num} is between 51 and 100`);
//       break;
//     default:
//       console.log(`${num} is greater than 100`);
//       break;
//   }
// }

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);

// numberRange2(25);
// numberRange2(75);
// numberRange2(125);
// numberRange2(-25);