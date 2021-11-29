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

barCodeScanner('113');

// It will log the following:
// Product2, Product3, Product not found! The case value on line 5 matches the conditional expression, hence the 
// corresponding clause gets executed thereby logging string Product2 to the console. However, as there is no 
// break statement after line 6 to terminate execution, the execution follows to the next statement or 
// expression irrespective of the case value.