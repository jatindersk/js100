let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

// fish.forEach(str => {
//   if (str !== 'Nemo') console.log(str);
// })

for (let i = 0; i <= fish.length; i += 1) {
  if (fish[i] !== 'Nemo') console.log(fish[i]);
  else break;
}