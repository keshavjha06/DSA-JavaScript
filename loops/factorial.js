function factorial(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
}

const number = 5;
console.log('Factorial of ' + number + ' is ' + factorial(number));
