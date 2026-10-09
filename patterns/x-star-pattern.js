function printXStarPattern(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      if (i === j || j === n + 1 - i) {
        row += "* ";
      } else {
        row += "  ";
      }
    }
    console.log(row);
  }
}

const n = 5;
printXStarPattern(n);
