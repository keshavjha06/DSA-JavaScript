// No StringBuilder in JS: a plain string with + works the same way here
// (JS strings have no capacity, so only the length is printed)
let sb = "Keshav";
console.log(sb.length);
console.log(sb);
sb += "Jha";
console.log(sb);
sb = sb.substring(0, 1) + "o" + sb.substring(2); // like setCharAt(1, 'o')
console.log(sb);
const t = sb.toString();
console.log(t);
