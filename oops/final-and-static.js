class Cricketer {
  // static: belongs to the class, shared by all objects
  static country = "NZ";

  constructor() {
    this.runs = 0;
    this.name = null;
    this.avg = 0.0;
  }

  print() {
    console.log(this.runs + " " + this.name + " " + this.avg);
  }

  static greet() {
    console.log(" I only believe in Jassi Bhai");
  }
}

Cricketer.greet();
console.log(Cricketer.country);
