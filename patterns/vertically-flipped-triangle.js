function printVerticallyFlippedTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      if (i + j > n) {
        row += "* ";
      } else {
        row += "  ";
      }
    }
    console.log(row);
  }
}

// Alternate approach: print spaces first, then stars
function printVerticallyFlippedTriangleAlternate(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
      row += "  ";
    }
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

function printNumbers(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
      row += "  ";
    }
    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }
    console.log(row);
  }
}

function printLetters(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
      row += "  ";
    }
    for (let j = 1; j <= i; j++) {
      row += String.fromCharCode(i + 64) + " ";
    }
    console.log(row);
  }
}

const rows = 5;
printVerticallyFlippedTriangle(rows);
printVerticallyFlippedTriangleAlternate(rows);
console.log();
printNumbers(rows);
console.log();
printLetters(rows);
