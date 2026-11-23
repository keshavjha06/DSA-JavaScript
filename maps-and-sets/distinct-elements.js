function countDistinct(arr) {
  const set = new Set();
  for (const ele of arr) {
    set.add(ele);
  }
  return set.size;
}

const arr = [2, 2, 3, 2];
console.log(countDistinct(arr));
