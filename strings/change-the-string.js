function isUpperCase(ch) {
  return "A" <= ch && ch <= "Z";
}

function changeTheString(s) {
  let str = "";
  if (s.length > 0) {
    const firstChar = s.charAt(0);
    if (isUpperCase(firstChar)) {
      str = s.toUpperCase();
    } else {
      str = s.toLowerCase();
    }
  }
  return str;
}

const s = "TbCD";
console.log(changeTheString(s));
