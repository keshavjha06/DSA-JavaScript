const set = new Set();
set.add(77);
set.add(65);
set.add(21);
set.add(2);
set.add(11);
set.add(45);
set.add(3);

let line = "";
for (const ele of set) {
  line += ele + " ";
}
console.log(line + set.size);
console.log(set);
console.log(set.has(45) + " " + set.has(18));
set.delete(21);
console.log(set.has(21));
console.log(set.size);
