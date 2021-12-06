let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar); // 1

// No invoking the foo function has no affect on the output
// as it declares a new variable bar on line 3 whose scope is
// limited to the function's body.