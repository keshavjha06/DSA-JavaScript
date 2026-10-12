class Animal {
  sound() {
    console.log("Animal makes sound");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Dog barks");
  }
}

class Lion extends Animal {
  sound() {
    console.log("Lion Roars");
  }
}

const a = new Dog();
const b = new Lion();
a.sound();
b.sound();
