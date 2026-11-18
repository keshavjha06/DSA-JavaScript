// arrays are passed by reference, so changes inside the function are visible outside
function change(y) {
  y[2] = 99;
}

const x = [10, 3, 29, 38];
console.log(x[2]);
change(x);
console.log(x[2]);
