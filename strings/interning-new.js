// JS has no string pool / intern(). new String() creates a wrapper object,
// so === compares it like Java's == (by reference), while comparing values works like equals()
const s1 = "Keshav";
const s2 = new String("Keshav");
console.log(s1 === s2.toString()); // like s1.equals(s2)
console.log(s1 === s2); // like s1 == s2

const s3 = s2.toString(); // closest thing to intern(): get the plain string value
console.log(s1 === s3.toString());
console.log(s1 === s3);
