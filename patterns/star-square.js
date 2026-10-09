function printRowNumbers(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      row += i + " ";
    }
    console.log(row);
  }
}

function printColumnNumbers(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      row += j + " ";
    }
    console.log(row);
  }
}

function printStars(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

const rows = 5;
printRowNumbers(rows);
console.log();
printColumnNumbers(rows);
console.log();
printStars(rows);
