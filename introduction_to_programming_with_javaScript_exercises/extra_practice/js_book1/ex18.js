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
console.log(qux);   // hello

// Objects are passed by reference and primitive values are passed by value.
// argument1 on line 8 references object foo from line 1 and hence it's 'a' property
// gets mutated to string hi. Whereas, parameter argument2 receives a primitive value 'hello'
// as the argument. The local variable or paramter argument2 is reassigned a new value which
// has does not mutate the value of qux variable from line6.