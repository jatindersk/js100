let evenOrOdd = (num) => {
  if (Number.isInteger(num)) {
    if ((num % 2) === 0 ) {
      console.log('even');
    } else {
      console.log('odd');
    }
  } else {
    console.log('Error: The number is not an integer.');
    return;
  }
}

evenOrOdd(44);
evenOrOdd(75);
evenOrOdd(59.87);