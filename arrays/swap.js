function swap(arr, num1, num2) {
  const temp = arr[num1];
  arr[num1] = arr[num2];
  arr[num2] = temp;
}

function reverse(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    swap(arr, start, end);
    start++;
    end--;
  }
}

const arr = [1, 5, 7, 9, 10, 56];
reverse(arr);
console.log('[' + arr.join(', ') + ']');
