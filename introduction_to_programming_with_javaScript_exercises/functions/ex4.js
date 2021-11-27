function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');

// The code won't log anything as the return statement on line 3 causes the function
// to stop running. Hence, the code inside the function body after the return statemnent
// will be ignored.