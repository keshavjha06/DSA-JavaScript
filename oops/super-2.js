class Parents {
  show() {
    console.log("Parent method");
  }
}

class Childs extends Parents {
  show() {
    console.log("Child method");
  }

  display() {
    this.show();
    super.show();
  }
}

const child = new Childs();
child.display();
