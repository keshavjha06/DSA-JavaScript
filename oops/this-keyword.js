class Car {
  constructor(price = 0, name = null) {
    this.price = price;
    this.name = name;
  }

  // replaces the Java overloaded constructor Car(String s, int x)
  static fromNameAndPrice(name, price) {
    return new Car(price, name);
  }

  print() {
    const price = 12; // local variable; this.price still reads the object's field
    console.log(this.price + " " + this.name);
  }
}

const c1 = new Car(1250000, "Kia Sonnet");
c1.print();
const c2 = Car.fromNameAndPrice("Lord Altos", 400000);
c2.print();
const c3 = new Car();
c3.name = "Honda Amaze";
