function greatestOfThree(a, b, c) {
  if (a >= b) {
    if (a >= c) {
      return a;
    }
    return c;
  }
  // b > a
  if (b >= c) {
    return b;
  }
  return c;
}

const first = 12;
const second = 45;
const third = 7;
console.log(greatestOfThree(first, second, third));
