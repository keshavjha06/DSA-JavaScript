function isSubset(a, b) {
  const map = new Map();
  for (const ele of a) {
    if (map.has(ele)) {
      const freq = map.get(ele);
      map.set(ele, freq + 1);
    } else {
      map.set(ele, 1);
    }
  }

  for (const ele of b) {
    if (!map.has(ele)) {
      return false;
    }
    const freq = map.get(ele);
    if (freq === 0) {
      return false;
    }
    map.set(ele, freq - 1);
  }
  return true;
}

const a = [11, 1, 13, 21, 3, 7, 3];
const b = [11, 3, 7, 1];
console.log(isSubset(a, b));
