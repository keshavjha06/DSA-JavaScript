function countKdivPairs(arr, k) {
  const map = new Map();
  for (const ele of arr) {
    const rem = ((ele % k) + k) % k;
    map.set(rem, (map.get(rem) || 0) + 1);
  }
  let ans = 0;

  for (const ele of arr) {
    const rem = ((ele % k) + k) % k;
    map.set(rem, map.get(rem) - 1);
    const target = (k - rem) % k;
    ans = ans + (map.get(target) || 0);
  }

  return ans;
}

const arr = [2, 2, 1, 7, 5, 3];
const k = 4;
// 5 pairs: (2, 2), (1, 7), (7, 5), (1, 3), (5, 3)
console.log(countKdivPairs(arr, k));
