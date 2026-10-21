// Set doesn't accept duplicates.
// Unlike Java's HashSet, a JS Set keeps insertion order (like LinkedHashSet).

const hashSet = new Set();
hashSet.add(10);
hashSet.add(20);
hashSet.add(30);
hashSet.add(40);
hashSet.add(50);
hashSet.add(60);
console.log(hashSet);
console.log(hashSet.has(10)); // true
console.log(hashSet.has(100)); // false
hashSet.delete(10);
console.log(hashSet);
hashSet.delete(100);
console.log(hashSet);
hashSet.clear();
console.log(hashSet);
console.log(hashSet.size === 0); // isEmpty -> true

const linkedHashSet = new Set();
linkedHashSet.add(10);
linkedHashSet.add(20);
linkedHashSet.add(30);
linkedHashSet.add(40);
linkedHashSet.add(50);
linkedHashSet.add(60);
console.log(linkedHashSet); // order of insertion is preserved
