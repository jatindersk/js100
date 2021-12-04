console.log(greeting); // not defined error

var greeting = 'Hello world!';

// This is because JS executes a program line by line. The greeting variable on line 1 hasn't
// been decalared yet. Hence JS will raise an exception when we try to log the greeting variable.

// Refer to LS for correct explanation