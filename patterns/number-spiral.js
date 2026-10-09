function printNumberSpiral(n) {
  for (let i = 1; i <= 2 * n - 1; i++) {
    let row = "";
    for (let j = 1; j <= 2 * n - 1; j++) {
      let a = i;
      let b = j;
      if (i > n) {
        a = 2 * n - i;
      }
      if (j > n) {
        b = 2 * n - j;
      }
      row += Math.min(a, b) + " ";
    }
    console.log(row);
  }
}

const n = 4;
printNumberSpiral(n);
