let animal = 'horse';

switch (animal) {
  case 'duck':
    console.log('quack');
  case 'squirrel':
    console.log('nook nook');
  case 'horse':
    console.log('neigh');
  case 'bird':
    console.log('tweet tweet');
  default:
    console.log('*cricket*');
}

// It will log neigh, tweet tweet and *cricket* to the console as there is no break statement present after the case clause has run.
// Hence, the execution will fall through to the next case irrespective of their case value.