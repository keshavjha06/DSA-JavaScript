// Queue: push to add at the back, shift to remove from the front.

const queue = [];
queue.push(10);
queue.push(20);
queue.push(30);
queue.push(40);
console.log(queue); // [10, 20, 30, 40]
console.log(queue.shift()); // poll -> 10
console.log(queue); // [20, 30, 40]
console.log(queue[0]); // peek -> 20
console.log(queue.length === 0); // false
queue.length = 0; // clear
console.log(queue.length === 0); // true

console.log('--------------------------------');

// Deque: add/remove at both ends
const deque = [];
deque.push(10); // offer
deque.unshift(20); // offerFirst
deque.unshift(30);
deque.unshift(40);
console.log(deque); // [40, 30, 20, 10]
console.log(deque.shift()); // pollFirst -> 40
console.log(deque); // [30, 20, 10]
console.log(deque.pop()); // pollLast -> 10
console.log(deque); // [30, 20]
console.log(deque[0]); // peekFirst -> 30
console.log(deque[deque.length - 1]); // peekLast -> 20
console.log(deque);
console.log(deque.length === 0); // false
deque.length = 0; // clear
console.log(deque.length === 0); // true
