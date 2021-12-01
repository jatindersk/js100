let myArray = [[1, 3, 6, 11], [4, 2, 4], [9, 17, 16, 0],];

let evenNum = arr => {
  arr.forEach(el => el.forEach(num => {
    if (num % 2 === 0) {
      console.log(num);
    }
  }))
}

evenNum(myArray);