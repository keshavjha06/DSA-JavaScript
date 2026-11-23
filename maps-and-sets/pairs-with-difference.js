// Brute force: check every pair of indices
function countPairs(arr, k) {
  const set = new Set();
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (Math.abs(arr[i] - arr[j]) === k) {
        set.add(i + "," + j);
      }
    }
  }
  return set.size;
}

// Alternative: count earlier elements equal to (ele - k) or (ele + k) using a map
function countPairsUsingMap(arr, k) {
  const map = new Map();
  let count = 0;
  for (const ele of arr) {
    if (map.has(ele - k)) {
      count += map.get(ele - k);
    }
    if (map.has(ele + k)) {
      count += map.get(ele + k);
    }
    map.set(ele, (map.get(ele) || 0) + 1);
  }
  return count;
}

const arr = [1, 4, 1, 4, 5];
const k = 3;
console.log(countPairs(arr, k));
console.log(countPairsUsingMap(arr, k));
