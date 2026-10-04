function sumOfDigits(num) {
  if (num < 0) {
    num = -num;
  }
  let sum = 0;
  while (num !== 0) {
    sum = sum + (num % 10);
    num = Math.floor(num / 10);
  }
  return sum;
}

const number = -1234;
console.log('The sum is: ' + sumOfDigits(number));
