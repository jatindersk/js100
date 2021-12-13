let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a); // hi
console.log(qux); /// hello

// This is because the argument1 references the foo object from line 1 and thus mutates it on line 9
// whereas qux holds a primitive value which is passed onto argument2 paramter as it is. On line 10
// the local variable argument2 is reassigned a new string value hi