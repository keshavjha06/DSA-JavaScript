function sortColors(nums) {
  let lo = 0;
  let high = nums.length - 1;
  let mid = 0;
  let temp;
  while (mid <= high) {
    switch (nums[mid]) {
      case 0:
        temp = nums[lo];
        nums[lo] = nums[mid];
        nums[mid] = temp;
        lo++;
        mid++;
        break;
      case 1:
        mid++;
        break;
      case 2:
        temp = nums[mid];
        nums[mid] = nums[high];
        nums[high] = temp;
        high--;
        break;
    }
  }
  console.log(nums.join(' '));
}

const nums = [2, 0, 2, 1, 1, 0];
sortColors(nums);
