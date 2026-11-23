function missingRange(arr, low, high) {
  const set = new Set();
  for (const ele of arr) {
    set.add(ele);
  }
  const result = [];
  for (let i = low; i <= high; i++) {
    if (!set.has(i)) {
      result.push(i);
    }
  }
  return result;
}

const arr = [1, 4, 5, 7, 10];
const low = 1;
const high = 10;
console.log(missingRange(arr, low, high));
