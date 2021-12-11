let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

// The conditional expression for while loop is an re-assignment which always
// return a truthy value and hence the condition is always true. Also, the
// break statement never executes as the conditional expression of if statement
// never becomes true as value of counter variable is always 2 in each iteration.