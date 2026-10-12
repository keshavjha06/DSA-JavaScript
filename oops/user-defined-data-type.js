// classes are blueprint and objects are real world entity
class Student {
  constructor() {
    this.name = null;
    this.rno = 0;
    this.cgpa = 0.0;
  }

  print() {
    console.log(this.name + " " + this.rno + " " + this.cgpa);
  }
}

const inputRno = 34;

const s1 = new Student();
s1.name = "Sam";
s1.rno = 32;
s1.cgpa = 1.0;

const s2 = new Student();
s2.name = "Lavish";
s2.rno = 33;
s2.cgpa = 2.2;

const s3 = new Student();
s3.name = "Anagha";
s3.rno = inputRno;
s3.cgpa = 7.7;

console.log(s1.name + " " + s1.rno + " " + s1.cgpa);
s2.cgpa = 9.7;
console.log(s3.rno);

s1.print();
s2.print();
s3.print();
