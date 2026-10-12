class ComplexNumber {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  print() {
    if (this.y >= 0) {
      console.log(this.x + " + " + this.y + "i");
    } else {
      console.log(this.x + " - " + -this.y + "i");
    }
  }

  add(z) {
    this.x = this.x + z.x;
    this.y = this.y + z.y;
  }

  multiply(z) {
    const newX = this.x * z.x - this.y * z.y;
    const newY = this.x * z.y + this.y * z.x;
    this.x = newX;
    this.y = newY;
  }

  divide(z) {
    const denom = z.x * z.x + z.y * z.y;
    // Math.trunc mimics Java int division
    const newX = Math.trunc((this.x * z.x + this.y * z.y) / denom);
    const newY = Math.trunc((this.y * z.x - this.x * z.y) / denom);
    this.x = newX;
    this.y = newY;
  }
}

const z1 = new ComplexNumber(2, -5);
const z2 = new ComplexNumber(3, 4);
z1.print();
z2.print();
z1.add(z2);
z1.print();
z2.print();
z2.multiply(z1);
z1.print();
z2.print();
z2.divide(z1);
z1.print();
z2.print();
