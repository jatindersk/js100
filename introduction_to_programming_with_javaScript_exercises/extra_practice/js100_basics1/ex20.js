let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
// energy.shift();
// energy.push('geothermal')
// console.log(energy);

// energy.splice(0, 1);
// energy.push('geothermal');
// console.log(energy);

energy = energy.slice(1);
energy.push('geothermal');
console.log(energy);