let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2); // false

// The array1 and array2 are distinct arrays even though they have
// the same value. This is because arrays are objects in JS and variables
// store reference to the objects in memory, not their values.
// Hence, these two variables point to different arrays.