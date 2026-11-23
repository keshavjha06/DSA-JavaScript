function isAnagram(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }
  const map = new Map();
  for (let i = 0; i < s1.length; i++) {
    const ch = s1[i];
    map.set(ch, (map.get(ch) || 0) + 1);
  }
  for (let i = 0; i < s2.length; i++) {
    const ch = s2[i];
    if (!map.has(ch)) {
      return false;
    }
    const freq = map.get(ch);
    if (freq === 0) {
      return false;
    }
    map.set(ch, freq - 1);
  }
  return true;
}

const s1 = "listen";
const s2 = "silent";
console.log(isAnagram(s1, s2));
