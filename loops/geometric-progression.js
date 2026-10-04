function printGP(n) {
  let a = 1;
  const r = 2;
  for (let i = 1; i <= n; i++) {
    console.log(a);
    a = a * r;
  }
}

const terms = 10;
printGP(terms);
