function twoSumWithMap(nums, target) {
  const result = [0, 0];
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      result[1] = i;
      result[0] = map.get(target - nums[i]);
      return result;
    }
    map.set(nums[i], i);
  }
  return result;
}

// 2nd method: brute force
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
}

const nums = [7, 11, 2, 5, 4, 6];
const target = 10;
console.log('[' + twoSum(nums, target).join(', ') + ']');
console.log('[' + twoSumWithMap(nums, target).join(', ') + ']');
