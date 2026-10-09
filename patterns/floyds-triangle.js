function printFloydsTriangle(n) {
  let number = 1;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += number + " ";
      number++;
    }
    console.log(row);
  }
}

const rows = 5;
printFloydsTriangle(rows);
