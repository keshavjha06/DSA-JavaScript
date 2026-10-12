class Dog {
  speak() {
    console.log("Bhau Bhau");
  }
}

class Cat {
  speak() {
    console.log("Meow Meow");
  }
}

class Lion {
  speak() {
    console.log("GRRRRRR");
  }
}

class Pikachu {
  speak() {
    console.log("Pika Pika");
  }
}

class Human {
  speak() {
    console.log("Hello");
  }
}

// JS has no method overloading, so the two Java max() versions get separate names.
function maxOfTwo(a, b) {
  return Math.max(a, b);
}

function maxOfThree(a, b, c) {
  return Math.max(a, Math.max(b, c));
}

const human = new Human();
const cat = new Cat();
const pikachu = new Pikachu();
const dog = new Dog();
const lion = new Lion();

dog.speak();
lion.speak();
human.speak();
cat.speak();
pikachu.speak();
console.log(maxOfThree(4, 5, 6));
