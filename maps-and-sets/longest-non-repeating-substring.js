// Longest substring without repeating characters
function longestUniqueSubstring(s) {
  let i = 0;
  let j = 0;
  const map = new Map();
  let ans = 0;
  while (j < s.length) {
    const ch = s[j];
    map.set(ch, (map.get(ch) || 0) + 1);
    while (map.get(ch) > 1) {
      const ch2 = s[i];
      map.set(ch2, map.get(ch2) - 1);
      i++;
    }
    ans = Math.max(ans, j - i + 1);
    j++;
  }
  return ans;
}

const s = "geeksforgeeks"; // eksforg - 7
console.log(longestUniqueSubstring(s));
