function setZeroes(matrix) {
  const rowCoords = [];
  const colCoords = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        rowCoords.push(i);
        colCoords.push(j);
      }
    }
  }

  for (let i = 0; i < rowCoords.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[rowCoords[i]][j] = 0;
    }
  }

  for (let i = 0; i < colCoords.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      matrix[j][colCoords[i]] = 0;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    let row = '';
    for (let j = 0; j < matrix[0].length; j++) {
      row += matrix[i][j] + ' ';
    }
    console.log(row);
  }
}

const nums = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
setZeroes(nums);
