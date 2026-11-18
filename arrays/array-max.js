function maxRange(arr, start, end) {
  if (start > end) {
    return -1;
  }
  if (arr === null) {
    return -1;
  }
  let maxVal = arr[start];
  for (let i = start; i <= end; i++) {
    if (arr[i] > maxVal) {
      maxVal = arr[i];
    }
  }
  return maxVal;
}

function max(arr) {
  if (arr.length === 0) {
    return -1;
  }
  let maxVal = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxVal) {
      maxVal = arr[i];
    }
  }
  return maxVal;
}

const arr = [1, 3, 23, 9, 20, 24];
console.log(max(arr));
console.log(maxRange(arr, 2, 4));
