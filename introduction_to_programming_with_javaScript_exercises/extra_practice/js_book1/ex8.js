function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113'); // Product2, Product3, Product not found!

// The argument to the function matches the case value on line 5
// and thus it's corresponding case clause on line 6 gets executed.
// However, due to the absence of a break statement, the program execution
// falls through to the following case's irrespective of their case value