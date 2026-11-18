const arr = [10, 20, 30, 40];

// copy element by element
const brr = new Array(arr.length).fill(0);
for (let i = 0; i < arr.length; i++) {
  brr[i] = arr[i];
}

// const x = arr; would only copy the reference (shallow), so x[0] = 100 changes arr too
const y = arr.slice(); // like Java's Arrays.copyOf
y[0] = 100;
console.log(y[0]);
console.log(arr[0]);
