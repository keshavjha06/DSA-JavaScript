function printOddNumberTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += (2 * j - 1) + " "; // odd number expression = 2 * j - 1
    }
    console.log(row);
  }
}

// Alternative solution: start at 1 and add 2 each time
function printOddNumberTriangleAlternate(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    let a = 1;
    for (let j = 1; j <= i; j++) {
      row += a + " ";
      a = a + 2;
    }
    console.log(row);
  }
}

const rows = 5;
printOddNumberTriangle(rows);
printOddNumberTriangleAlternate(rows);
