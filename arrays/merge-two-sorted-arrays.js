function merge(c, a, b) {
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      c[k] = a[i];
      i++;
      k++;
    } else {
      c[k] = b[j];
      j++;
      k++;
    }
  }
  // b is finished, take the remaining elements of a
  while (i < a.length) {
    c[k] = a[i];
    i++;
    k++;
  }
  // a is finished, take the remaining elements of b
  while (j < b.length) {
    c[k] = b[j];
    j++;
    k++;
  }
}

const a = [2, 5, 6, 9, 20];
const b = [1, 3, 4, 5, 7, 8];
const c = new Array(a.length + b.length).fill(0);

console.log(c.join(' '));
merge(c, a, b);
console.log(c.join(' '));
