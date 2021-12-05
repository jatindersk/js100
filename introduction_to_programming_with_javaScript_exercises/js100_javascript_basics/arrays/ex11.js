let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

// Your code.
let contents = groceryList.length;

while (contents) {
  console.log(groceryList.shift());
  contents = groceryList.length;
}

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

console.log(groceryList); // []