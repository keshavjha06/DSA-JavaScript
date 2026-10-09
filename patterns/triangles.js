function printStars(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += " * " + " ";
    }
    console.log(row);
  }
}

function printColumnNumbers(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }
    console.log(row);
  }
}

function printRowNumbers(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += i + " ";
    }
    console.log(row);
  }
}

function printColumnLetters(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += String.fromCharCode(j + 64) + " ";
    }
    console.log(row);
  }
}

function printRowLetters(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += String.fromCharCode(i + 64) + " ";
    }
    console.log(row);
  }
}

const rows = 5;
printRowLetters(rows);
console.log();
printStars(rows);
console.log();
printColumnNumbers(rows);
console.log();
printRowNumbers(rows);
console.log();
printColumnLetters(rows);
