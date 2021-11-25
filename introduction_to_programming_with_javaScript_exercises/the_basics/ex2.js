let num = 4936;

let ones = num % 10;
num = (num - ones) / 10;
console.log(ones);

let tens = num % 10;
num = (num - tens) / 10;
console.log(tens);

let hundred = num % 10;
num = (num - hundred) / 10;
console.log(hundred);

let thousands = num % 10;
console.log(thousands);