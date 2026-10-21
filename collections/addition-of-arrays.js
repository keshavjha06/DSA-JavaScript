// { 3, 5, 2, 0, 7 } + { 9, 2, 1 } = { 3, 6, 1, 2, 8 }
function addArrays(arr1, arr2) {
  const result = [];
  let i = arr1.length - 1;
  let j = arr2.length - 1;
  let carry = 0;
  while (i >= 0 || j >= 0 || carry > 0) {
    let sum = carry;
    if (i >= 0) {
      sum = sum + arr1[i];
      i--;
    }
    if (j >= 0) {
      sum = sum + arr2[j];
      j--;
    }
    result.push(sum % 10);
    carry = Math.floor(sum / 10);
  }
  result.reverse();
  return result;
}

const arr1 = [3, 5, 2, 0, 7];
const arr2 = [9, 2, 1];
const result = addArrays(arr1, arr2);

let output = '';
for (const digit of result) {
  output += digit + ' ';
}
console.log(output);
