// JS fields are not hidden per class like Java, so the parent value is stored under its own name.
class Parent {
  constructor() {
    this.parentX = 10;
  }
}

class Child extends Parent {
  constructor() {
    super();
    this.x = 20;
  }

  show() {
    console.log("Child x: " + this.x);
    console.log("Parent x: " + this.parentX);
  }
}

const child = new Child();
child.show();
