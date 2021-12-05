let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

// Assumption: return statement on line 8 terminates the scope of forEach's callback function but this is not the case as the console statement is getting printed
let contains = (city, arr) => {
  arr.forEach(el => {
    if (el === city) return true;
//    console.log(el);
  })

  return false;
}

// LS solution:

// function contains(element, list) {
//   for (let i = 0; i < list.length; i++) {
//     if (list[i] === element) {
//       return true;
//     }
//   }

//   return false;
// }

console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false