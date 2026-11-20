function factorial(n) {
  if (n === 0) {
    return 1;
  }
  const partialAns = factorial(n - 1);
  return n * partialAns;
}

const inputNumber = 5;
if (inputNumber < 0) {
  console.log("Error");
} else {
  console.log(factorial(inputNumber));
}
