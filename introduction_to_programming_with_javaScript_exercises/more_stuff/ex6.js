let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

let allMatches = (arr, reg) => {
  return arr.filter(el => {
    if (reg.test(el)) return el;
  });
  
}

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']