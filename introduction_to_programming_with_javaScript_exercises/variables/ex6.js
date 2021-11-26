const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO); // bar

// No it will not produce and error as the variable initialized on line 3
// is different from the one initialized on line 1. The FOO variable from line 3
// goes out of scope after the block ends. Thus, the value of FOO variable from
// line 1 is logged by the code on line 6.

// LS explnation:
// For much the same reason as the previous exercise, this program doesn't raise
// an error, and it logs bar on line 6. One key difference, though, is that we 
// are using const instead of let, which may have led you to believe an error 
// would occur on line 3. However, since the two const variables are separate entities, no error occurs.