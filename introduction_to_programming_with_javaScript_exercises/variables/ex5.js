let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

// This code logs bar to the console as the foo variable declared on line 3 is
// different from the one defined on line 1. Also, the scope of the new foo variable
// is limited to the block in which it is defined. As, foo variable with value bar is
// is present outside of the block the string bar gets logged.

// LS explanation:
// Line 1 initializes a variable named foo with the value'bar'.
// Line 2 starts a block, which creates a new scope for let variables.
// The variable on line 1 is still visible at this point, but line 3 declares 
// a new variable named foo that shadows (hides) the variable from line 1. 
// This second variable gets initialized to 'qux', but it goes out of scope on line 
// 4 when the block ends. That brings foo from line 1 back into scope, so line 6 logs its value: bar.