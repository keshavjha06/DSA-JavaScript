function printArray(arr) {
  let output = '';
  for (let i = 0; i < arr.length; i++) {
    output += arr[i] + ' ';
  }
  console.log(output);
}

// JS arrays grow on their own, but this mirrors Java's fixed-size array resize
function resize(arr, capacity) {
  const temp = new Array(capacity).fill(0);
  for (let i = 0; i < arr.length; i++) {
    temp[i] = arr[i];
  }
  return temp;
}

let original = [5, 1, 2, 9, 10];
console.log('The size of original array is ' + original.length);
original = resize(original, 10);
console.log('The size of original array after resize is ' + original.length);
