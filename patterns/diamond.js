function printDiamond(n) {
  // upper half diamond
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

  // lower half diamond
  for (let i = n - 1; i >= 1; i--) {
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

// Another method (similar to pyramid): track number of spaces (nsp) and stars (nst)
function printDiamondSpacesStars(n) {
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

  nsp = 1;
  nst = 2 * n - 3;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= nsp; j++) {
      row += "  ";
    }
    for (let j = 1; j <= nst; j++) {
      row += "* ";
    }
    nsp++;
    nst = nst - 2;
    console.log(row);
  }
}

const rows = 5;
printDiamond(rows);
printDiamondSpacesStars(rows);
