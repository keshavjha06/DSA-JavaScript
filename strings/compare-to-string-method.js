// Our own version of Java's compareTo: difference of the first mismatched char codes,
// or the difference in lengths if one string is a prefix of the other
function compareTo(a, b) {
  let i = 0;
  let j = 0;
  const len1 = a.length;
  const len2 = b.length;
  while (i < len1 && j < len2) {
    if (a.charAt(i) !== b.charAt(j)) {
      return a.charCodeAt(i) - b.charCodeAt(j);
    }
    i++;
    j++;
  }
  return len1 - len2;
}

const a = "raghav"; // harmeet
const b = "preet"; // harsh   m - s -> -6
console.log(compareTo(a, b)); // r - p i.e 2
