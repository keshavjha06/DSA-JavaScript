function firstUniqChar(s) {
  const freq = new Array(256).fill(0); // supports all ASCII characters
  for (let i = 0; i < s.length; i++) {
    freq[s.charCodeAt(i)]++;
  }
  for (let i = 0; i < s.length; i++) {
    if (freq[s.charCodeAt(i)] === 1) {
      return i;
    }
  }
  return -1;
}

console.log(firstUniqChar("racecar"));
