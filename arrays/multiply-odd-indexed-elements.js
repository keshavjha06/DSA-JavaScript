const arr = [10, 20, 30, 40, 50, 60];
let output = '';
for (let i = 0; i < arr.length; i++) {
  if (i % 2 === 1) {
    arr[i] = arr[i] * 2;
  } else {
    arr[i] = arr[i] + 10;
  }
  output += arr[i] + ' ';
}
console.log(output);
