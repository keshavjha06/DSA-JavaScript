// (char)(j + 64) in Java -> String.fromCharCode(j + 64) in JS. A = 65, a = 97
function printUpperColumns(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      row += String.fromCharCode(j + 64) + " ";
    }
    console.log(row);
  }
}

function printLowerColumns(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      row += String.fromCharCode(j + 96) + " ";
    }
    console.log(row);
  }
}

function printUpperRows(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      row += String.fromCharCode(i + 64) + " ";
    }
    console.log(row);
  }
}

function printLowerRows(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      row += String.fromCharCode(i + 96) + " ";
    }
    console.log(row);
  }
}

const rows = 5;
printLowerRows(rows);
console.log();
printUpperColumns(rows);
console.log();
printLowerColumns(rows);
console.log();
printUpperRows(rows);
