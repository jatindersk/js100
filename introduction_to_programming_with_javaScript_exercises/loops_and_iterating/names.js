let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];
let index = 0;

while (index < names.length) {
  let name = names[index].toUpperCase();
  upperNames.push(name);
  index += 1;
}

console.log(upperNames);