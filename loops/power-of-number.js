function power(a, b) {
  let pow = 1;
  for (let i = 1; i <= b; i++) {
    pow = pow * a;
  }
  return pow;
}

const base = 2;
const exponent = 10;
console.log(base + ' raised to the power ' + exponent + ' is ' + power(base, exponent));
