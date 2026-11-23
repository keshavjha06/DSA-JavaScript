function equalPairs(s) {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    map.set(ch, (map.get(ch) || 0) + 1);
  }
  let pairs = 0;
  for (const ch of map.keys()) {
    const freq = map.get(ch);
    pairs = pairs + freq * freq;
  }
  return pairs;
}

const s = "ananya"; // a * 3 + n * 2 + y * 1 = 9 + 4 + 1 = 14
console.log(equalPairs(s));
