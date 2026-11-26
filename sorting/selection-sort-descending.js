// Select the largest element and place it at the beginning
function selectionSortDescending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let max = -Infinity;
    let maxIndex = -1;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] > max) {
        max = arr[j];
        maxIndex = j;
      }
    }
    const temp = arr[i];
    arr[i] = arr[maxIndex];
    arr[maxIndex] = temp;
  }
}

const arr = [4, 1, 0, -1, 11, 9, 10];
selectionSortDescending(arr);
console.log("[" + arr.join(", ") + "]");
