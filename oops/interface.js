// JS has no interfaces; a base class whose method throws plays that role.
class Animals {
  sound() {
    throw new Error("sound() must be implemented");
  }
}

class Cat extends Animals {
  sound() {
    console.log("Cat Meows");
  }
}

const animal = new Cat();
animal.sound();
