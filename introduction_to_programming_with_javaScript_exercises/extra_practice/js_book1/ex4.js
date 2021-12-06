let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo); // bar

// It will log bar to the console as the global variable foo declared on line 1
// is available outside the block.