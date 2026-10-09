function printStarRectangle(rows, cols) {
  for (let i = 1; i <= rows; i++) { // number of lines
    let row = "";
    for (let j = 1; j <= cols; j++) { // items printed in each line
      row += "* ";
    }
    console.log(row);
  }
}

const rows = 5;
const cols = 7;
printStarRectangle(rows, cols);
