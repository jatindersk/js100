let evenOrOdd = num => {
  if (Number.isInteger(num)) {
    (num % 2) === 0 ? console.log('even') : console.log('odd');
  } else {
    return console.log('Error: Number is not an integer!');
  }
}

evenOrOdd(8);
evenOrOdd(9);