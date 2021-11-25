console.log('5' + 10); // 510

// This is because,  incase of + operator if either of the operands is a string the non string value gets implicitly coerced to a string.

// LS explanation:
// The code logs 510 since every + expression that has a string operand produces a string result no matter what the other operand is.
//  In other words, the Number 10 gets coerced to a String and then gets concatenated to the String '5', which produces '510'.