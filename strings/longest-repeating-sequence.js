function longestRepeatingSequence(str) {
  let lrs = "";
  const n = str.length;

  const substringCounts = new Map();
  // Generate all possible substrings and count their occurrences
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      const sub = str.substring(i, j);
      const oldCount = substringCounts.get(sub) || 0;
      substringCounts.set(sub, oldCount + 1);
    }
  }
  // Find the longest substring that appears at least twice (count > 1)
  for (const [sub, count] of substringCounts) {
    if (count > 1 && sub.length > lrs.length) {
      lrs = sub;
    }
  }
  return lrs;
}

const str = "acbdfghybdf";
console.log("Longest repeating sequence: " + longestRepeatingSequence(str));
