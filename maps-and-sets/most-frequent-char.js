function mostFrequent(s) {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (map.has(ch)) {
      const freq = map.get(ch);
      map.set(ch, freq + 1);
    } else {
      map.set(ch, 1);
    }
  }

  let maxFreq = 0;
  for (const ch of map.keys()) {
    const freq = map.get(ch);
    if (freq > maxFreq) {
      maxFreq = freq;
    }
  }

  // Among the most frequent characters, pick the alphabetically smallest
  let ans = "z";
  for (const ch of map.keys()) {
    const freq = map.get(ch);
    if (freq === maxFreq && ch < ans) {
      ans = ch;
    }
  }
  return ans;
}

const s = "testsample";
console.log(mostFrequent(s));
