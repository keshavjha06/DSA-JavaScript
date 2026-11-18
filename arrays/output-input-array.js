const inputValues = [4, 7, 1, 9, 3, 8, 2];

const karan = new Array(7).fill(0);
for (let i = 0; i < 7; i++) {
  karan[i] = inputValues[i];
}

let output = '';
for (let i = 0; i < 7; i++) {
  output += 2 * karan[i] + ' ';
}
console.log(output);
