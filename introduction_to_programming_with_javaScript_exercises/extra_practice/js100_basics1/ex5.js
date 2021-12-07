if (true && false) {
  console.log('Yes!');
} else {
  console.log('No...');
}

// This will always output No...
// The condition of the is statement on line 1 will always return false as
// AND operator needs both the operands to be truthy to return a truthy value.
// Hence, the condition never becomes truthy and thus the code in else block runs.