// Map keeps keys unique, but different keys can map to the same value.
// Unlike Java's HashMap, a JS Map keeps insertion order.

const map = new Map();
map.set('India', 'New Delhi');
map.set('France', 'Paris');
map.set('Japan', 'Tokyo');
console.log(map);
console.log(map.get('India'));
console.log(map.has('India'));
console.log([...map.values()].includes('New Delhi')); // containsValue
console.log(map.size);

const removedValue = map.get('India');
map.delete('India');
console.log(removedValue); // New Delhi

console.log([...map.keys()]); // [France, Japan]
console.log([...map.values()]); // [Paris, Tokyo]
console.log([...map.entries()]);

// getOrDefault
const capital = map.has('France') ? map.get('France') : 'NONE';
console.log(capital); // Paris

// replace returns the old value
const oldValue = map.get('France');
map.set('France', 'New York');
console.log(oldValue); // Paris
console.log(map);

map.clear();
console.log(map);
console.log(map.size === 0); // isEmpty

const map1 = new Map();
map1.set(1, 'One');
map1.set(2, 'Two');

for (const [key, value] of map1) {
  console.log('key: ' + key + ' value: ' + value);
}
