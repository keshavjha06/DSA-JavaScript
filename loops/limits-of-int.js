// Java int limits. JS numbers are 64-bit floats, so they don't overflow at these values.
const x = 2147483647; // Integer.MAX_VALUE
const y = -2147483648; // Integer.MIN_VALUE
// Java needed a cast to long here; in JS this just works
const z = 2147483647 + 10;
console.log(x);
console.log(y);
console.log(z);
