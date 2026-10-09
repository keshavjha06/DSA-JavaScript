function printStarPlus(n) {
  // Java's n / 2 is integer division, so use Math.floor in JS
  const mid = Math.floor(n / 2) + 1;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      if (i === mid || j === mid) {
        row += "* ";
      } else {
        row += "  ";
      }
    }
    console.log(row);
  }
}

const rows = 5;
printStarPlus(rows);
