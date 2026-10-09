function printPyramid(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
      row += "  ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

// 2nd method: track number of spaces (nsp) and stars (nst)
function printPyramidSpacesStars(n) {
  let nsp = n - 1;
  let nst = 1;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= nsp; j++) {
      row += "  ";
    }
    for (let j = 1; j <= nst; j++) {
      row += "* ";
    }
    nsp--;
    nst = nst + 2;
    console.log(row);
  }
}

const rows = 5;
printPyramid(rows);
printPyramidSpacesStars(rows);
