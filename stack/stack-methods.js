const stack1 = [];
console.log(stack1.length === 0);
stack1.push(34);
stack1.push(3);
stack1.push(54);
stack1.push(32);
stack1.push(7);
console.log(stack1);
stack1.pop(); // LIFO
console.log(stack1);
const peekedValue = stack1[stack1.length - 1];
console.log(peekedValue);
console.log(stack1);
console.log(stack1.includes(54));
stack1.splice(2, 0, 100); // insert 100 at index 2
console.log(stack1);
stack1.splice(0, 1); // remove element at index 0
console.log(stack1);
