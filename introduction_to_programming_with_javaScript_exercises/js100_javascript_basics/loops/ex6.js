let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for (let i = 0; i <= cities.length; i += 1) {
  if (cities[i] !== null) console.log(cities[i].length);
  else continue;
}