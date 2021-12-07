// let initGame = function () {
//   return {
//     level: 1,
//     score: 0
//   }
// };

let initGame = () => ({ level: 1, score: 0});

// JS interprets a statement beggining with a brace ({) a block.
// Hence, the odd behaviour.

let game = initGame();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score);