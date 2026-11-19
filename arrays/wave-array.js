const arr = [2, 4, 7, 8, 9, 10];

for (let i = 0; i < arr.length - 1; i = i + 2) {
  const temp = arr[i];
  arr[i] = arr[i + 1];
  arr[i + 1] = temp;
}

console.log(arr.join(' '));
