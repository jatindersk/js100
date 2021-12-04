if (false || true) {
  console.log('Yes!');
} else {
  console.log('No...');
}

// It will always output Yes! as the code in if block will always run irrispective of the value passed on to it's conditional expression
// This is because the if block uses logical OR (||) which will return true if the value is either false or true.