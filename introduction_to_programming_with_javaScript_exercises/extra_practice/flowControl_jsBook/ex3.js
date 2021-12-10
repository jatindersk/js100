let evenOrOdd = num => {
  if (!Number.isInteger(num)) {
    return console.log('Error: Not an integer.');
  } else {
    (num % 2 === 0) ? console.log('even') : console.log('odd');
  }
};

evenOrOdd(5);
evenOrOdd(56);
evenOrOdd(18.6);