function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

// This function accepts a string as an argument. It then splits the string using the
// space character as an argument which returns an array of words. It then reverses the
// order of the array and the map method called upon this array will return an array
// containing the length of each element in the array. The array of lengths returned
// by the map method is then returned by the function.