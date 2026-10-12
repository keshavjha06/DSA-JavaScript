// JS has no abstract keyword, so the base method throws if a child does not override it.
class Vehicle {
  start() {
    throw new Error("start() must be implemented by the child class");
  }

  fuelType() {
    console.log("Petrol/Diesel");
  }
}

class Car extends Vehicle {
  start() {
    console.log("Car starts with key");
  }
}

const vehicle = new Car();
vehicle.start();
vehicle.fuelType();
