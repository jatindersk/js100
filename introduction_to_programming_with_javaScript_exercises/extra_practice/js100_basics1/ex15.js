const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a);

// It displays an TypeError as the code on line 4 attempts to reassign the variable a from line 1
// Variable a is a constant and thus cannot be reassigned to a new value.
// argument a passed to the myFunction function on line 7 is an
// excess argument since myFunction does not declare any parameters and is simply ignored
// when the fuction is invoked.