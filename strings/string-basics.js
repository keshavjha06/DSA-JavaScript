const s = "abc"; // immutable
const s2 = "abc";
const s1 = "abc" + "d";

// No StringBuilder/StringBuffer in JS: build strings with + or an array
let sb = "abc";
sb += "a"; // abca
sb = sb.substring(0, 1) + "b" + sb.substring(1); // insert "b" at index 1 -> abbca
sb = sb.split("").reverse().join(""); // acbba

const str = "abc";
const str1 = "abc";

const sameLiteral = s === s2; // true: === compares string values in JS (Java needs equals)
const isEqual = s1 === str1; // false: "abcd" vs "abc"

const len = s1.length; // 4
for (let i = 0; i < len; i++) {
  const c = s1.charAt(i); // a, b, c, d
  console.log(c);
}

const chars = s1.split("");
const str3 = chars.join("");

for (let i = 0; i < chars.length; i++) {
  console.log(chars[i]);
}

const b = "I am practicing GFG";
const words = b.split(/\s+/); // ["I", "am", "practicing", "GFG"]
const noSpaces = b.replaceAll(" ", ""); // IampracticingGFG
const withoutPract = b.replaceAll("pract", ""); // I am icing GFG
const noWhitespace = b.replace(/\s+/g, ""); // IampracticingGFG
const firstSpaceRemoved = b.replace(" ", ""); // Iam practicing GFG
const str4 = "I am practicing".split(" ");
const str5 = str4.join("-"); // I-am-practicing

const e = s.charAt(0); // a
const f = String.fromCharCode(65); // A

// ASCII -> A to Z -> 65 to 90, a to z -> 97 to 122
const ch = "1";
const isDigit = "0" <= ch && ch <= "9"; // true

const g = "123";
const a = parseInt(g); // 123

const h = 12;
const i = a + "";
const hAsString = String(h);
