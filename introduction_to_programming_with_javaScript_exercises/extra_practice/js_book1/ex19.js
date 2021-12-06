let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2); // [1, 4, 3]

// array2 and array1 reference the same array in memory. Hence, a change in
// the array made by array1 is reflected by array2 as well.