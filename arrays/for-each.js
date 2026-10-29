const arr = [5, 8, 2, 6, 9];

for (let ele of arr) {
  ele = ele * 2;
}

// for...of doesn't change the original array
let output = '';
for (const ele of arr) {
  output += ele + ' ';
}
console.log(output);
