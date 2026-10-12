class Car {
  // default params play the role of Java's default constructor values
  constructor(seats = 0, name = null, length = 0.0) {
    this.seats = seats;
    this.name = name;
    this.length = length;
  }

  print() {
    console.log(this.seats + " " + this.name + " " + this.length);
  }
}

const c1 = new Car(4, "Kia", 3.99);
c1.print();
const c2 = new Car(5, "Altos", 3.75);
c2.print();
const c3 = new Car();
c3.name = "Honda Amaze";
