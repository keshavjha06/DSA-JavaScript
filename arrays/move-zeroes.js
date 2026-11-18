// Move zeroes to the end: [0, 1, 0, 4, 12] -> [1, 4, 12, 0, 0]
function moveZeros(arr, n) {
  let j = 0; // j points at zero elements
  for (let i = 0; i < n; i++) {
    if (arr[i] !== 0 && arr[j] === 0) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    if (arr[j] !== 0) {
      j++;
    }
  }
}

function printArray(arr) {
  let output = '';
  for (let i = 0; i < arr.length; i++) {
    output += arr[i] + ' ';
  }
  console.log(output);
}

function arrayDemo() {
  const arr = [0, 1, 0, 2, 1, 0, 4, 12];
  printArray(arr);
  moveZeros(arr, arr.length);
  printArray(arr);
}

arrayDemo();
