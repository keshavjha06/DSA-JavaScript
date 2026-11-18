const arr = [2, 1, 2, 2, 2, 1, 0];

let numberOfZeros = 0;
let numberOfOnes = 0;
for (const ele of arr) {
  if (ele === 0) {
    numberOfZeros++;
  } else if (ele === 1) {
    numberOfOnes++;
  }
}

for (let i = 0; i < numberOfZeros; i++) {
  arr[i] = 0;
}
for (let i = numberOfZeros; i < numberOfZeros + numberOfOnes; i++) {
  arr[i] = 1;
}
for (let i = numberOfZeros + numberOfOnes; i < arr.length; i++) {
  arr[i] = 2;
}

console.log(arr.join(' '));
