// Basic version: always runs all n - 1 passes
function bubbleSortBasic(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

// Optimized version: stops early when a pass makes no swaps
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;
    // The last i elements are already in place
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
}

const arr = [3, 5, 1, 4, 2, 0];
console.log("Arrays before Sorting", arr);
bubbleSort(arr);
console.log("Arrays after Sorting", arr);

const arr2 = [3, 5, 1, 4, 2, 0];
bubbleSortBasic(arr2);
console.log("Arrays after basic Sorting", arr2);
