function findTwoSum(arr, target) {
  const set = new Set();
  for (const ele of arr) {
    const rem = target - ele; // ele + rem = target
    if (set.has(rem)) {
      return true;
    }
    set.add(ele);
  }
  return false;
}

const arr = [1, 3, -1, 8, 4, 2];
const target = 5;
console.log(findTwoSum(arr, target));
