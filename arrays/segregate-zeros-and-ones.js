function segregateByCounting(arr) {
  let numberOfZeros = 0;
  for (const ele of arr) {
    if (ele === 0) {
      numberOfZeros++;
    }
  }
  for (let i = 0; i < numberOfZeros; i++) {
    arr[i] = 0;
  }
  for (let i = numberOfZeros; i < arr.length; i++) {
    arr[i] = 1;
  }
}

// Another approach: two pointers
function segregateTwoPointers(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if (arr[i] === 0) {
      i++;
    } else if (arr[j] === 1) {
      j--;
    } else if (arr[i] === 1 && arr[j] === 0) {
      arr[i] = 0;
      arr[j] = 1;
      i++;
      j--;
    }
  }
}

const first = [1, 0, 0, 1, 1, 0, 1];
segregateByCounting(first);
console.log(first.join(' '));

const second = [1, 0, 0, 1, 1, 0, 1];
segregateTwoPointers(second);
console.log(second.join(' '));
