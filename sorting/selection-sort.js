// Select the smallest element and place it at the beginning
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = Infinity;
    let minIndex = -1;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        minIndex = j;
      }
    }
    const temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
}

const arr = [3, 1, 0, 11, 9, 2];
selectionSort(arr);
console.log(arr);
