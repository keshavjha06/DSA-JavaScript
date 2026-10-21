// Java's Stack.search returns the 1-based position from the top, or -1 if not found.
function searchStack(stack, value) {
  for (let i = stack.length - 1; i >= 0; i--) {
    if (stack[i] === value) {
      return stack.length - i;
    }
  }
  return -1;
}

const stack = [];
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
console.log(stack); // [10, 20, 30, 40]
stack.pop();
console.log(stack); // [10, 20, 30]
console.log(stack[stack.length - 1]); // peek -> 30
console.log(searchStack(stack, 50)); // -1
console.log(stack.length === 0); // false
stack.length = 0; // clear
console.log(stack.length === 0); // true
