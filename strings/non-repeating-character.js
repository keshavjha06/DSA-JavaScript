function nonRepeatingCharacter(s) {
  const freq = new Array(256).fill(0); // supports all ASCII characters
  for (let i = 0; i < s.length; i++) {
    freq[s.charCodeAt(i)]++;
  }
  for (let i = 0; i < s.length; i++) {
    if (freq[s.charCodeAt(i)] === 1) {
      return s.charAt(i);
    }
  }
  return "$"; // Return '$' if there is no non-repeating character
}

console.log(nonRepeatingCharacter("racecar"));
