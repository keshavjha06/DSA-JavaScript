function findMinimum(arr) {
  if (arr === null || arr.length === 0) {
    throw new Error('Invalid input');
  }
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

const arr = [4, 9, 3, 1, 10, 15];
console.log(findMinimum(arr));
