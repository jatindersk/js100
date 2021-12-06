let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

let allMatches = (arr, reg) => arr.filter(str => reg.test(str));

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']