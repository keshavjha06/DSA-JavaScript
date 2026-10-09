// i + jmax = n + 1, so row i has n + 1 - i items
function printStars(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n + 1 - i; j++) {
      row += " * " + " ";
    }
    console.log(row);
  }
}

function printRowNumbers(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n + 1 - i; j++) {
      row += i + " ";
    }
    console.log(row);
  }
}

function printColumnNumbers(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n + 1 - i; j++) {
      row += j + " ";
    }
    console.log(row);
  }
}

function printUpperColumnLetters(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n + 1 - i; j++) {
      row += String.fromCharCode(j + 64) + " ";
    }
    console.log(row);
  }
}

function printUpperRowLetters(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n + 1 - i; j++) {
      row += String.fromCharCode(i + 64) + " ";
    }
    console.log(row);
  }
}

function printLowerColumnLetters(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n + 1 - i; j++) {
      row += String.fromCharCode(j + 96) + " ";
    }
    console.log(row);
  }
}

const rows = 5;
printLowerColumnLetters(rows);
console.log();
printStars(rows);
console.log();
printRowNumbers(rows);
console.log();
printColumnNumbers(rows);
console.log();
printUpperColumnLetters(rows);
console.log();
printUpperRowLetters(rows);
