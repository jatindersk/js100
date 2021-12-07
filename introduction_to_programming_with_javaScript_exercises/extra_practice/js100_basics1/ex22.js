let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

// let contains = (city, arr) => {
//   arr.forEach(el => {

//     if (city === el) {
//       console.log('true');
//     } else {
//       console.log('false');
//     }
//   })
// }

let contains = (city, arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (city === arr[i]) {
      return true;
    }
  }

  return false;
}

console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false