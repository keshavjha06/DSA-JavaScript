function swap(a, b) {
  const temp = a;
  a = b;
  b = temp;
  console.log(a + " " + b);
}

// 2nd method: swap without a temp variable using XOR
function swapWithXor(a, b) {
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  console.log(a + " " + b);
}

// 3rd method: swap without a temp variable using sum
function swapWithSum(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;
  console.log(a + " " + b);
}

const a = 10;
const b = 20;

swap(a, b);
swapWithXor(a, b);
swapWithSum(a, b);
