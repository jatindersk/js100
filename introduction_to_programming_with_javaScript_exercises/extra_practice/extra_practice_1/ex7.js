let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

let contains = (name, array) => {
  console.log(`${array.filter(destination => destination === name)
    .length !== 0}`);
};


contains('Barcelona', destinations); // true
contains('Nashville', destinations); // false