let repeat = (num, str) => {
  let finalStr = '';

  for (let i = 0; i < 3; i += 1) {
    finalStr = finalStr + str;
  }

  return finalStr;
}

console.log(repeat(3, 'ha')); // 'hahaha'