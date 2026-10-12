// JS has no method overloading, so one add() uses a default third parameter.
class Calculator {
  add(a, b, c = 0) {
    return a + b + c;
  }
}

const calculator = new Calculator();
console.log(calculator.add(2, 3)); // 5
console.log(calculator.add(2, 3, 4)); // 9
console.log(calculator.add(2.5, 3.5)); // 6 (Java prints 6.0)
