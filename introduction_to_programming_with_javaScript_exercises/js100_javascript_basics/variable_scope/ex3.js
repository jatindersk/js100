if (true) {
  let myValue = 20;
}

console.log(myValue); // ReferenceError: Cannot access 'myValue' before initialization

// This is because variable myValue is decalred with let keyword and hence is block scoped.
// It's scope is limited within the code block of if statement and thus cannot be accessed outside of it.