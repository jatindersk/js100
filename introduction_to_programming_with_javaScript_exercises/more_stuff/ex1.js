let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

// [1, 4, 3]
// This is because array1 and array2 point to the same array.
// Thus, array2 logs the updated array as the code on line 3 mutates the array.