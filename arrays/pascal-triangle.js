function generate(numRows) {
  const ans = [];
  let prev = null;
  for (let i = 0; i < numRows; i++) {
    const row = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        row.push(1);
      } else {
        row.push(prev[j - 1] + prev[j]);
      }
    }
    prev = row;
    ans.push(row);
  }
  return ans;
}

console.log(JSON.stringify(generate(5)));
