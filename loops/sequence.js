// for n = 11: 1, 10, 2, 9, 3, 8, 4, 7, 5, 6
function printSequence(n) {
  let output = '';
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      output += Math.floor((i + 1) / 2) + ' ';
    } else {
      output += (n - Math.floor(i / 2)) + ' ';
    }
  }
  console.log(output);
}

const number = 11;
printSequence(number);
