function printArray(arr) {
  const n = arr.length;
  let output = '';
  for (let i = 0; i < n; i++) {
    output += arr[i] + ' ';
  }
  console.log(output);
}

function reverse(numbers, start, end) {
  while (start < end) {
    const temp = numbers[start];
    numbers[start] = numbers[end];
    numbers[end] = temp;
    start++;
    end--;
  }
}

const numbers = [2, 11, 5, 7, 8, 10];
printArray(numbers);
reverse(numbers, 0, numbers.length - 1);
printArray(numbers);
