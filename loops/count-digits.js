function countDigits(n) {
  if (n === 0) {
    n = 1;
  }
  let count = 0;
  while (n !== 0) {
    // Math.trunc mimics Java's integer division: 563 -> 56 -> 5 -> 0
    n = Math.trunc(n / 10);
    count++;
  }
  return count;
}

const number = 563;
console.log(countDigits(number));
