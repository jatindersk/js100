let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

// cities.forEach(str => {
//   if (str === null) {
//     continue;
//   }

//   console.log(str.length);
// }
// )

for (let i = 0; i < cities.length; i += 1) {
  if (cities[i] === null) {
    continue;
  }
  
  console.log(cities[i].length);
}