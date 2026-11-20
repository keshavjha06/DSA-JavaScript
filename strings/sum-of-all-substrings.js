function sumOfAllSubstrings(s) {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      sum = sum + parseInt(s.substring(i, j + 1));
    }
  }
  return sum;
}

const s = "6759";
console.log(sumOfAllSubstrings(s));
