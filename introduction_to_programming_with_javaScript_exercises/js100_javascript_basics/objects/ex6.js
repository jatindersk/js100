let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  if (prop === true) {
    console.log("It's true!");
  }
}

// This is because the property names of an object are strings. The quotes are optional when the property name only contains
// alphanumeric characters. When the prop variable on line 11 iterates over property name 'true', it gets compared to a boolean value
// Since, the comparison is of strict quality type, both the value and type of operands need to be same for the conditional expression
// to become truthy which is never the case. Hence, code in the if block never executes.