let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b); // false

// This is because the variable b declared on line 5 has a block scope and thus is limited to the code block of if statement
// Outside of the if block, variable b declared on lne 2 is available and gets logged to the console.