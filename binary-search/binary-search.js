function binarySearch(arr, target) {
  const n = arr.length - 1;
  let low = 0;
  let high = n;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2); // Java int division drops the decimal
    if (arr[mid] < target) {
      low = mid + 1;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

const arr = [10, 20, 30, 40, 50];
console.log(binarySearch(arr, 40));
