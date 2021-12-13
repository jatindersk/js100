let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let keysArr = Object.keys(obj).map(el => el.toUpperCase());
console.log(keysArr);