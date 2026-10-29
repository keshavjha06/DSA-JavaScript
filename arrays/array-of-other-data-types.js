// Java's default char value is '\0'
const ch = '\0';
console.log(ch.charCodeAt(0));

const chars = new Array(8).fill('\0');
let output = '';
for (let i = 0; i < chars.length; i++) {
  output += chars[i] + ' ';
}

const names = ['Abhinav', 'Harsh', 'Achyut', 'Sahil', 'Isha'];
for (let i = 0; i < names.length; i++) {
  output += names[i] + ' ';
}
console.log(output);
