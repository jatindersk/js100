let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

// This code logs 1 to the console.
// No, the execution of foo function has no effect on the output.
// This is because the bar variable initialized inside the function body is a
// different entity and does not affect the value of bar variable initialized
// on line 1 outside of the foo function's scope. Hence, value 1 gets logged by the code on line 7.