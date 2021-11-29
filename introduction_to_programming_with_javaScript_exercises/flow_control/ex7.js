let allCaps = text => {
  if (text.length > 10) {
    return text.toUpperCase();
  } else {
    return text;
  }
}

console.log(allCaps('HELLO WORLD'));
console.log(allCaps('goodbye'));