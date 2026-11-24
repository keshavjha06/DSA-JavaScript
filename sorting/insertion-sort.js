function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j] < arr[j - 1]) {
      const temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
      j--;
    }
  }
}

const arr = [3, 1, 0, 11, 9, 2];
insertionSort(arr);

let output = "";
for (const ele of arr) {
  output += ele + " ";
}
console.log(output);
