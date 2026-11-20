// JS strings are immutable and there is no StringBuilder,
// so we use an array of characters and join it when printing
const s = "Keshav";
const chars = s.split("");
let i = 0;
let j = chars.length - 1;
while (i <= j) {
  const temp1 = chars[i];
  const temp2 = chars[j];
  chars[i] = temp2;
  chars[j] = temp1;
  i++;
  j--;
}
console.log(chars.join("")); // vahseK
chars.splice(1, 1); // remove the char at index 1
console.log(chars.join("")); // vhseK
chars.splice(1, 0, "a"); // insert 'a' at index 1
console.log(chars.join("")); // vahseK

// Reverse a string using the built-in array reverse
let str = "Aditya";
str = str.split("").reverse().join("");
console.log(str); // aytidA
