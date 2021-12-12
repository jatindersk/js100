// > let x = "5"
// > x = x + 1
// = "51"

let y = '5';
console.log(y++);
console.log(++y);

// It returns numeric value 5. This is because the incremenet operator
// coerces it's operand to a Numder data type. It then incremenets the operand by 1.
// However, as this a post increment operator it will return the original value of the variable
// i.e 5