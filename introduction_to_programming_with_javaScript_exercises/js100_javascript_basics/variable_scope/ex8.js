let a = 1;

function myFunction(a) {
  console.log(a);
}

let b = 2;

myFunction(b); // 2

// This code logs 2 as the parameter a on line 3 is distinct from the one declared on line 1
// It gets initialized by the value of b passed in as argument and later gets referenced on line 4 by the
// log method. 