function reverseWords(s) {
  // trim leading/trailing spaces, then split by one or more spaces
  const words = s.trim().split(/\s+/);
  let result = "";

  for (let i = 0; i < words.length; i++) {
    const reversedWord = words[i].split("").reverse().join("");
    result += reversedWord;
    if (i < words.length - 1) {
      result += " ";
    }
  }
  return result;
}

let s = " Archit   is   a good  boy ";
console.log("Original: '" + s + "'");
s = reverseWords(s);
console.log("Reversed: '" + s + "'");
