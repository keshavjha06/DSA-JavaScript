// Length of the longest substring without repeating characters (sliding window)
function lengthOfLongestSubstring(s) {
  if (s.length === 0) {
    return 0;
  }
  const lastIndex = new Map();
  let max = 0;
  let j = 0;
  for (let i = 0; i < s.length; i++) {
    const ch = s.charAt(i);
    if (lastIndex.has(ch)) {
      j = Math.max(j, lastIndex.get(ch) + 1);
    }
    lastIndex.set(ch, i);
    max = Math.max(max, i - j + 1);
  }
  return max;
}

const str = "pwwkew";
console.log(lengthOfLongestSubstring(str));
