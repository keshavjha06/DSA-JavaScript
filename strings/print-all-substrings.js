function printAllSubstrings(s) {
  for (let i = 0; i < s.length; i++) {
    let row = "";
    for (let j = i; j < s.length; j++) {
      row += s.substring(i, j + 1) + " "; // i to j
    }
    console.log(row);
  }
}

const s = "gopi";
printAllSubstrings(s);
