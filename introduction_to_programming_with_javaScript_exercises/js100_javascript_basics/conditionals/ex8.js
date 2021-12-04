if (true && false) {
  console.log('Yes!');
} else {
  console.log('No...');
}

// It will always output No... as if code block will never be executed.
// THis is because the conditional epression of if block uses && logical operator
// which evaulates to a truthy value only if both the operands are truthy.
// This is not possible as a value cannot be both truthy and falsy at the same time.