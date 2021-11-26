{
  let foo = 'bar';
}

console.log(foo); // undefined

// The above code logs undefined to the console as scope of foo variable is limited to the block
// in which it was defined i.e it is only available from line 1 to line 3 of the code. This is
// because the let keyord creates variable with block scope and so are not available to other parts of the program.

// LS explanation:
// The program outputs an error since foo is out of scope: the let statement creates variables with block scope,
// which limits the visibility of the variable to the block. Even though console.log(foo) comes after the declaration
// and initialization of foo, we still get an error since we declared foo inside the block. Outside the block, foo doesn't exist.