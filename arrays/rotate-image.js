function rotateImage(matrix) {
  const n = matrix.length;

  // Transpose
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  // Reverse each row
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < Math.floor(n / 2); j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[i][n - 1 - j];
      matrix[i][n - 1 - j] = temp;
    }
  }

  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < n; j++) {
      row += matrix[i][j] + ' ';
    }
    console.log(row);
  }
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
rotateImage(matrix);
