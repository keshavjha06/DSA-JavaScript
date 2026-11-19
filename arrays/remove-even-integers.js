function printArray(arr) {
  const n = arr.length;
  let output = '';
  for (let i = 0; i < n; i++) {
    output += arr[i] + ' ';
  }
  console.log(output);
}

function removeEven(arr) {
  let oddCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddCount++;
    }
  }
  const result = new Array(oddCount).fill(0);
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result[index] = arr[i];
      index++;
    }
  }
  return result;
}

const arr = [3, 2, 4, 7, 10, 6, 5];
printArray(arr);
printArray(removeEven(arr));
