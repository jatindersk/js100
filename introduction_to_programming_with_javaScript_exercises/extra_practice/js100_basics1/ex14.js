function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();

// ReferenceError
// This is because the variable a declared on line 6 will shadow the
// variable from line 2 within the if block. Even though the variable is declared
// and initialized after line 5, it still shadows the variable from line 2.
// This is called temporal dead zone.