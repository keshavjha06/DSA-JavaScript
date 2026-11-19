function containsDuplicate(arr) {
  // sort without using the built-in sort
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  for (let k = 1; k < arr.length; k++) {
    if (arr[k] === arr[k - 1]) {
      return true;
    }
  }
  return false;
}

const nums = [1, 2, 3, 1];
console.log(containsDuplicate(nums));
