let sale = true;
let admissionPrice = !sale ? 5.25 : 3.99;

console.log('$' + admissionPrice); // $3.99 (This is a string value as JS coerces non string value to a string when either of the operand in + operator is a string)
