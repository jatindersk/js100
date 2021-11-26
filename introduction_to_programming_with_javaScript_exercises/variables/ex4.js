const NAME = 'Victor';
console.log('Good Morning, ' + NAME);     // Good Morning, Victor
console.log('Good Afternoon, ' + NAME);   // Good Afternoon, Victor 
console.log('Good Evening, ' + NAME);     // Good Evening, Victor

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

// The above code will execute and log the corresponding strings on line 2, 3 and 4.
// However, upon executing the code on line 6, an error will be thrown as NAME is a constant variable
// as it was declared using the const keyword and thus cannot be reassigned a new value.

// LS explanation:
// The program first greets Victor 3 times. It then encounters an error on line 6, which prevents it from greeting Joe. 
// The problem is that constants are, well, constant. You can't reassign a constant after defining it.
// You must use regular variables instead: