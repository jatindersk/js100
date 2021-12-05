let catAge = yrs => {
  let catYrs = 0;
  switch(yrs) {
    case 0:
      return catYrs;
    case 1:
      return catYrs += 15;
    case 2:
      return catYrs += 24;
    default:
      return catYrs += 24 + ((yrs - 2) * 4);
  }
} 

console.log(catAge(0)); // 0
console.log(catAge(1)); // 15
console.log(catAge(2)); // 24
console.log(catAge(3)); // 28
console.log(catAge(4)); // 32