let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  // add code here
  greet: function(txt) {
    console.log(`Hej, ${txt}!`);
  },
};

jane.greet('Bobby'); // Hej, Bobby!