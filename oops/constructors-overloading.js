// JS has no constructor overloading, so a static method handles the (name, price) order.
class Car {
  constructor(price = 0, name = null) {
    this.price = price;
    this.name = name;
  }

  static fromNameAndPrice(name, price) {
    return new Car(price, name);
  }

  print() {
    console.log(this.price + " " + this.name);
  }
}

const c1 = new Car(1250000, "Kia");
c1.print();
const c2 = Car.fromNameAndPrice("Altos", 400000);
c2.print();
const c3 = new Car();
c3.name = "Honda Amaze";
