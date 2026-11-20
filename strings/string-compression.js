function compress(s) {
  s = s.replaceAll(" ", "");
  let result = "";
  let count = 1;
  for (let i = 0; i < s.length; i++) {
    if (i < s.length - 1 && s.charAt(i) === s.charAt(i + 1)) {
      count++;
    } else {
      result += s.charAt(i);
      result += count; // a3b2z2t1k2a2
      count = 1;
    }
  }
  return result;
}

// Another approach: inner while loop skips over the repeated characters
function compressWithWhile(str) {
  str = str.replaceAll(" ", "");
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let counter = 1;
    while (i < str.length - 1 && str.charAt(i) === str.charAt(i + 1)) {
      counter++;
      i++;
    }
    result += str.charAt(i);
    result += counter;
  }
  return result;
}

const s = "aaa bb zz t kk aa";
console.log(compress(s));
console.log(compressWithWhile(s));
