function printBridge(n) {
  let topRow = "";
  for (let i = 1; i <= 2 * n - 1; i++) {
    topRow += "* ";
  }
  console.log(topRow);

  for (let i = 1; i <= n - 1; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
      row += "* ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      row += "  ";
    }
    for (let j = 1; j <= n - i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

const n = 5;
printBridge(n);
