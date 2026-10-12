class Fraction {
  constructor(num, denom) {
    this.num = num;
    this.denom = denom;
    this.simplify();
  }

  print() {
    console.log(this.num + "/" + this.denom);
  }

  add(f) {
    this.num = this.num * f.denom + this.denom * f.num;
    this.denom = this.denom * f.denom;
    this.simplify();
  }

  multiply(f) {
    this.num = this.num * f.num;
    this.denom = this.denom * f.denom;
    this.simplify();
  }

  divide(f) {
    this.num = this.num * f.denom;
    this.denom = this.denom * f.num;
    this.simplify();
  }

  simplify() {
    const isNegative = this.num * this.denom < 0;
    this.num = Math.abs(this.num);
    this.denom = Math.abs(this.denom);
    const gcd = this.hcf(this.num, this.denom);
    this.num = this.num / gcd;
    this.denom = this.denom / gcd;
    if (isNegative) {
      this.num = -this.num;
    }
  }

  hcf(a, b) {
    if (a === 0) {
      return b;
    }
    return this.hcf(b % a, a);
  }
}

const f1 = new Fraction(3, -7);
const f2 = new Fraction(7, 3);
f1.multiply(f2);
f1.print();
const f3 = new Fraction(-50, -100);
f3.print();
