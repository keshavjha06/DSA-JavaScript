// Java's LinkedList maps to a plain JS array here.

const list = [];
list.push(40);
list.push(50);
list.push(60);
list.unshift(10); // addFirst
list.push(20); // addLast
list.splice(1, 0, 30); // add at index 1
console.log(list); // [10, 30, 40, 50, 60, 20]
list.shift(); // removeFirst
list.pop(); // removeLast
console.log(list); // [30, 40, 50, 60]

console.log(list[0]); // getFirst -> 30
console.log(list[list.length - 1]); // getLast -> 60

console.log(list[0]); // peek -> 30
console.log(list);
console.log(list.shift()); // poll -> 30
console.log(list); // [40, 50, 60]
list.push(100); // offer
console.log(true); // offer always returns true in Java
console.log(list); // [40, 50, 60, 100]
