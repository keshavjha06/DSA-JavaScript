function checkTriangle(a, b, c) {
  if (a + b > c && b + c > a && c + a > b) {
    console.log('Valid Triangle');
  } else {
    console.log('Invalid Triangle');
  }
}

const side1 = 3;
const side2 = 4;
const side3 = 5;
checkTriangle(side1, side2, side3);
