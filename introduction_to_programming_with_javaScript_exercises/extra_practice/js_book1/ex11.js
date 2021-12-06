let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

// The value of counter is always 2 when the code execution reaches line 7
// Hence, the break statement in the if block never gets executed.
// Also, the value of counter variable resets to 1 in the conditional expression on line 3
// on every subsequent iteration. Therefore, the value of counter always remains 2 when execution
// reaches the if statement.