const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a); // { firstName: 'Jane', lastName: 'Doe' }

// This is because although a constant variable is assigned to the object on line 1
// the individual components of the object can still be mutated. Hence, line 7 reference
// the object a's firstName property and mutates it.