// Java's ArrayList maps to a plain JS array.

function sortDescending(numbers) {
  numbers.sort((a, b) => b - a);
}

const arr = [];
arr.push(25);
arr.push(12);
arr.push(2);
arr.push(89);
arr.push(9);
console.log(arr[2]);
arr[3] = 50;
console.log(arr);

let line = '';
for (let i = 0; i < arr.length; i++) {
  line += arr[i] + ' ';
}
console.log(line);

line = '';
for (const element of arr) {
  line += element + ' ';
}
console.log(line);

// 25 12 2 50 9
arr.push(78); // 25 12 2 50 9 78
arr.splice(1, 0, 100); // insert 100 at index 1
console.log(arr); // 25 100 12 2 50 9 78
arr.pop();
console.log(arr);

let i = 0;
let j = arr.length - 1;
while (i < j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  i++;
  j--;
}
console.log(arr);

let list = [];
list.push(100);
list.push(200);
list.push(300);

const list2 = [];
list2.push(400);
list2.push(500);
list2.push(600);

list.push(...list2); // addAll
console.log(list);
list = list.filter((element) => !list2.includes(element)); // removeAll
console.log(list);

console.log(list.length);

console.log('printing list2:', list2);
list2.length = 0; // clear
console.log(list2.length);

// traverse list using an iterator
const iterator = list.values();
let step = iterator.next();
while (!step.done) {
  console.log('Element: ' + step.value);
  step = iterator.next();
}

const list3 = [];
list3.push(11);
list3.push(12);
list3.push(14);
console.log(list3[2]);
console.log('Before Set', list3);
list3[0] = 100;
console.log('After Set', list3);

// toArray -> copy into a new array
const array = [...list3];
for (const item of array) {
  console.log(item + ' ');
}

// contains -> includes
console.log(list3.includes(100)); // true

list.push(12);
list.push(6);
console.log('Printing Entire list', list);

// default sort() compares as strings, so pass a number comparator
list.sort((a, b) => a - b);
console.log('After sorting ascending', list);

const descendingList = [...list];
sortDescending(descendingList);
console.log('After sorting descending', descendingList);

const newList = [...list]; // clone
console.log('Printing Entire newList:', newList);

// JS arrays grow automatically, there is no ensureCapacity
const marks = [];
console.log(marks.length === 0); // isEmpty -> true

console.log(newList.indexOf(100)); // 2
