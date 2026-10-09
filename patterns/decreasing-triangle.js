function printDecreasingTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j < i; j++) {
      row += "  ";
    }
    for (let j = 1; j <= n - i + 1; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

const rows = 5;
printDecreasingTriangle(rows);
