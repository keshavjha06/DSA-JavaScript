function absoluteValue(n) {
  if (n < 0) {
    n = -n;
  }
  return n;
}

const number = -15;
console.log(absoluteValue(number));
