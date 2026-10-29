function printArray(arr) {
  const n = arr.length;
  let output = '';
  for (let i = 0; i < n; i++) {
    output += arr[i] + ' ';
  }
  console.log(output);
}

const myArray = [5, 1, 2, 9, 10];
printArray(myArray);
