let compareByLength = (str1, str2) => {
  let len1 = str1.length;
  let len2 = str2.length;

  if (len1 < len2) {
    return -1
  } else if (len1 > len2) {
    return 1;
  } else {
    return 0;
  }
}

console.log(compareByLength('patience', 'perseverance')); // -1
console.log(compareByLength('strength', 'dignity'));      //  1
console.log(compareByLength('humor', 'grace'));           //  0