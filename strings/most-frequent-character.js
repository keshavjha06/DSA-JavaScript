// Sort the characters, then count each run of equal characters (sliding window)
function mostFrequentBySorting(s) {
  const n = s.length;
  let maxFreq = -1;
  let ans = s.charAt(0);
  const arr = s.split("");
  arr.sort(); // aeelmpsstt
  let i = 0;
  let j = 0;
  while (j < n) {
    if (arr[i] === arr[j]) {
      j++;
    } else {
      const freq = j - i;
      if (freq > maxFreq) {
        maxFreq = freq;
        ans = arr[i];
      }
      i = j;
    }
  }
  const freq = j - i;
  if (freq > maxFreq) {
    maxFreq = freq;
    ans = arr[i];
  }
  return ans;
}

// Frequency array: index 0 is 'a', index 25 is 'z'
function mostFrequentByFrequencyArray(s) {
  const n = s.length;
  const freq = new Array(26).fill(0);
  for (let i = 0; i < n; i++) {
    const index = s.charCodeAt(i) - 97; // same as ch - 'a' in Java
    freq[index]++;
  }
  let maxFreq = 0;
  let ans = s.charAt(0);
  for (let i = 0; i < 26; i++) {
    if (freq[i] > maxFreq) {
      maxFreq = freq[i];
      ans = String.fromCharCode(i + 97);
    }
  }
  return ans;
}

const s = "testsample";
console.log(mostFrequentByFrequencyArray(s));
console.log(mostFrequentBySorting(s)); // e
