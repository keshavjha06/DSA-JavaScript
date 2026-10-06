function fact(x) {
  let f = 1;
  for (let i = 1; i <= x; i++) {
    f = f * i;
  }
  return f;
}

const n = 5;
const r = 2;

const ncr = Math.floor(fact(n) / (fact(r) * fact(n - r)));
const npr = Math.floor(fact(n) / fact(n - r));
console.log(ncr + " " + npr);
