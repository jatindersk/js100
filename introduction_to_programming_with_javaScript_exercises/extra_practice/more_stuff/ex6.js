let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

let allMatches = (arr, reg) => arr.filter(el => reg.test(el));

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']