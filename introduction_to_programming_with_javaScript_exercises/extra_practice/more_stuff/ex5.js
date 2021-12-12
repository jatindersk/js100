function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}
console.log(doSomething('I am who I am.'));

// This is an example of method chaining.
// It accepts a string as an argument. It then calls the split method on the input string with an empty string an the argument
// The split method splits the caller string with respect to the seperator and returns an array. The reverse method then
// reverses the elements of the array. Finally, the map method iterates and transforms the array elements and returns an array
// containing the length of each element. The function then returns the array returned by the map method.