function printAlphabetAlternate(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      if (i % 2 === 0) {
        row += String.fromCharCode(i + 64) + " ";
      } else {
        row += String.fromCharCode(i + 96) + " ";
      }
    }
    console.log(row);
  }
}

const rows = 5;
printAlphabetAlternate(rows);
