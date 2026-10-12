class StudentData {
  constructor(marks) {
    this.name = null;
    this.rno = 0;
    this.size = 0;
    // copy the array; `this.marks = marks` would share it and print 40 below
    this.marks = marks.slice();
  }

  // replaces the Java overloaded constructor StudentData(int size)
  static withSize(size) {
    return new StudentData(new Array(size).fill(0));
  }
}

const arr = [4, 1, 7, 3, 5];
const s1 = new StudentData(arr);
s1.marks[0] = 40;
console.log(arr[0]);
const s2 = StudentData.withSize(2);
