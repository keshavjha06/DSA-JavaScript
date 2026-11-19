function linearSearch(arr, target) {
  let flag = false; // false means target doesn't exist in array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      console.log('Target exist in array at index ' + i);
      flag = true;
      break;
    }
  }
  if (flag) {
    console.log('Target exists in Array');
  } else {
    console.log('Target missing in Array');
  }
}

// Another way: -1 can never be a valid index
function linearSearchWithIndex(arr, target) {
  let found = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      found = i;
      break;
    }
  }
  if (found !== -1) {
    console.log('Target exists in Array at index ' + found);
  } else {
    console.log('Target missing in Array');
  }
}

const arr = [20, 30, 40, 20, 50, 60, 70, 80, 90, 100];
linearSearch(arr, 70);
linearSearchWithIndex(arr, 20);
