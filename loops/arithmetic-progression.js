// 2, 5, 8, 11 ... n terms
function printFixedAP(n) {
  let output = '';
  for (let i = 2; i <= 3 * n - 1; i = i + 3) {
    output += i + ' ';
  }
  console.log(output);
}

function printAP(n, a, d) {
  let output = '';
  for (let i = 1; i <= n; i++) {
    output += a + ' ';
    a = a + d;
  }
  console.log(output);
}

const terms = 5;
const firstTerm = 4;
const commonDifference = 6;
printFixedAP(terms);
printAP(terms, firstTerm, commonDifference);
