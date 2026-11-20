function checkAnagram(s1, s2) {
  if (s1.length !== s2.length) {
    console.log("Not Anagram");
    return;
  }

  const c1 = s1.split("");
  const c2 = s2.split("");

  c1.sort();
  c2.sort();

  // Arrays can't be compared with ===, so compare them as strings
  if (c1.join("") === c2.join("")) {
    console.log("Anagram");
  } else {
    console.log("Not Anagram");
  }
}

checkAnagram("LISTEN", "SILENT");
