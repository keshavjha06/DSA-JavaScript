const map = new Map();
map.set("Keshav", 22);
map.set("Anirudh", 21);
map.set("Manas", 11);
map.set("Ritik", 26);
for (const key of map.keys()) {
  console.log(key + " : " + map.get(key));
}
console.log(map, map.size);
map.delete("Manas");
console.log(map, map.size);
console.log(map.get("Keshav"));
map.set("Ritik", 23);
console.log(map, map.size);
console.log(map.has("Anirudh"));
