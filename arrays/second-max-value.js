function findSecondMax(arr) {
  let max = -2147483648; // Java's Integer.MIN_VALUE
  let secondMax = -2147483648;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] !== max) {
      secondMax = arr[i];
    }
  }
  return secondMax;
}

const arr = [13, 34, 2, 34, 33, 1];
console.log(findSecondMax(arr));
