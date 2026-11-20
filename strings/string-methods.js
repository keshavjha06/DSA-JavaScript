const arr = ["K", "e", "s", "h", "a", "v"];
let line = "";
for (const ele of arr) {
  line += ele + " ";
}
const str = "Keshav";
console.log(line + str);

const s = "Keshav Jha";
console.log(s.indexOf("s"));
console.log(s.lastIndexOf("a"));
console.log(s.indexOf("t")); // -1 as it's not there
console.log(s.toLowerCase());
console.log(s.toUpperCase());
console.log(s.trim()); // remove leading and trailing whitespaces
console.log(s.includes("Kesh")); // true
console.log(s.startsWith("Kesh")); // true
console.log(s.endsWith("Kesh")); // false
console.log(s.length === 0); // false (Java's isEmpty)
console.log(s.length); // 10
console.log(s.replaceAll("Keshav", "Utkarsh")); // Utkarsh Jha
console.log(s.replace("Utkarsh", "Keshav")); // replace() changes only the first match, like replaceFirst
console.log(s.replaceAll("Keshav", "Utkarsh")); // Utkarsh Jha
console.log(s.substring(0, 3));
console.log(s.substring(3));
