const arr = [5, -3, 8, -1, 0, -7];

let output = '';
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    output += arr[i] + ' ';
  }
}
console.log(output);
