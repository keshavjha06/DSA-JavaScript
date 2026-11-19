function missingNum(arr) {
  const n = arr.length + 1;
  let sum = (n * (n + 1)) / 2;
  for (const num of arr) {
    sum = sum - num;
  }
  return sum;
}

const arr = [2, 4, 1, 8, 6, 3, 7];
console.log(missingNum(arr));
