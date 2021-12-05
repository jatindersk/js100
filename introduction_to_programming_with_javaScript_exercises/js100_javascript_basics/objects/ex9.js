let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

let obj = {};

nestedArray.forEach(el => {
  // console.log(`${el[0]}: ${el[1]}`)
  obj[el[0]] = el[1];
})

console.log(obj);

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }