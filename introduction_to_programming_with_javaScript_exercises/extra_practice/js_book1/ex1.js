// basics ex 2

let num = 4936;

let ones = num % 10;
console.log(ones);
num = (num - ones) / 10;

let tens = num % 10;
console.log(tens);
num = (num - tens) / 10;

let hundreds = num % 10;
console.log(hundreds);
num = (num - hundreds) / 10;

let thousands = num % 10;
console.log(thousands);