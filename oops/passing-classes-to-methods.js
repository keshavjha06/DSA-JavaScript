class Car {
  constructor() {
    this.seats = 0;
    this.name = null;
    this.length = 0.0;
    this.type = null;
    this.torque = 0;
  }

  print() {
    console.log(this.seats + " " + this.name + " " + this.length + " " + this.type + " " + this.torque);
  }
}

// objects are passed by reference, so the change is visible outside
function change(car) {
  car.seats = 4;
}

const car = new Car();
car.length = 3.99;
car.name = "Kia Sonnet";
car.seats = 5;
car.type = "SUV";
car.torque = 100;

change(car);

console.log(car.seats);

car.print();
