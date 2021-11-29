let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

// This is because the conditional expression on line 3 is infact assigning value 1 to counter variable
// Hence, after code on line 5 runs, counter gets incremented to value 2 and the execution goes back 
// to the expression on line 3 which then reassigns the variable to value 1. This results in an infinite loop
// as the counter variable never reaches the value 2 to execute the break statement on line 8.