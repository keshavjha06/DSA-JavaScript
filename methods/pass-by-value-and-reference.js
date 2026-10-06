// numbers are passed by value, so changing x inside does not affect the caller
function change(x) {
  x = 10;
}

const x = 6;
console.log(x); // 6
change(x);
console.log(x); // 6
