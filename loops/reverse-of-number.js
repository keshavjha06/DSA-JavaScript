function reverseNumber(num) {
  let rev = 0;
  while (num !== 0) {
    rev = rev * 10;
    rev = rev + (num % 10);
    num = Math.trunc(num / 10);
  }
  return rev;
}

const number = 12345;
console.log('The Reverse is: ' + reverseNumber(number));
