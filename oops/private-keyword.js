class Students {
  // # makes a field private, like Java's private keyword
  #rno = 0;

  constructor() {
    this.name = null;
    this.cgpa = 0.0;
  }

  print() {
    console.log(this.name + " " + this.#rno + " " + this.cgpa);
  }

  getRno() {
    return this.#rno;
  }

  setRno(x) {
    this.#rno = x;
  }
}

const inputLine = "Hello World";

const student = new Students();
student.print();
student.name = "Jack";
student.cgpa = 8.9;
student.setRno(45);
console.log(student.getRno());

console.log(inputLine); // prints the same given input
