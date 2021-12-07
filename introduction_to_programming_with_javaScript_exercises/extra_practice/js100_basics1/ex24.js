let calculateBMI = (height, weight) => {
  let heightInMeters =  height / 100;
  let bmi = weight / heightInMeters**2;

  return bmi.toFixed(2);
}

console.log(typeof(calculateBMI(180, 80))); // String
console.log(calculateBMI(180, 80)); // "24.69"