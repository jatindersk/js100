let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2); // false
console.log(array1 == array2);  // false

// Both the variables point to different references in memory even though the arrays have the same value.
// Hence, they are distinct and thus not equal.