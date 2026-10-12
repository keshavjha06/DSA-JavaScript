class Parentss {
  constructor() {
    console.log("Parent constructor");
  }
}

class Childss extends Parentss {
  constructor() {
    super();
    console.log("Child constructor");
  }
}

const child = new Childss();
