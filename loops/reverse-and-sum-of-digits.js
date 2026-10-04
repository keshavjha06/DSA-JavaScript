// 1234 reversed is 4321 and the sum of both is 5555
function reverseNumber(n) {
  let rev = 0;
  while (n !== 0) {
    rev = rev * 10;
    rev = rev + (n % 10);
    n = Math.trunc(n / 10);
  }
  return rev;
}

const number = 1234;
const reversed = reverseNumber(number);
const sum = number + reversed;
console.log('Reverse: ' + reversed);
console.log('Sum of number and its reverse: ' + sum);
