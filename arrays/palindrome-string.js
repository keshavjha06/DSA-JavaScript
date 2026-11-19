function isPalindrome(word) {
  if (word === null) {
    throw new Error('Input string cannot be null');
  }
  if (word.length === 0) {
    return true;
  }
  const charArray = word.split('');
  let start = 0;
  let end = word.length - 1;
  while (start < end) {
    if (charArray[start] !== charArray[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

console.log(isPalindrome('madam'));
