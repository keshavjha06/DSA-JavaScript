function printNumberAlphabetTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      if (i % 2 === 0) {
        row += String.fromCharCode(j + 64) + " ";
      } else {
        row += j + " ";
      }
    }
    console.log(row);
  }
}

const rows = 5;
printNumberAlphabetTriangle(rows);
