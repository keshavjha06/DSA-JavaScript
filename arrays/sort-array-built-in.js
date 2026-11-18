function print(arr) {
  let output = '';
  for (let i = 0; i < arr.length; i++) {
    output += arr[i] + ' ';
  }
  console.log(output);
}

const arr = [4, 1, 7, 5, -3, 10, 2];
print(arr);
// JS sort compares as strings by default, so pass a number comparator
arr.sort((a, b) => a - b);
print(arr);
