function addOne(digits) {
  const result = [];
  let carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] + carry <= 9) {
      result.push(digits[i] + carry);
      carry = 0;
    } else {
      // digits[i] + carry = 10
      result.push(0);
      carry = 1;
    }
  }
  if (carry === 1) {
    result.push(1);
  }
  result.reverse();
  return result;
}

const digits = [9, 9, 9];
const result = addOne(digits);

let output = '';
for (const digit of result) {
  output += digit + ' ';
}
console.log(output);
