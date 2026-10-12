class Pokemon {
  #power;

  constructor(type = null, power = 0) {
    this.#power = power;
    this.type = type;
  }

  // replaces the Java overloaded constructor Pokemon(int power, String type)
  static fromPowerAndType(power, type) {
    return new Pokemon(type, power);
  }

  getPower() {
    return this.#power;
  }

  print() {
    console.log(this.#power + " " + this.type);
  }
}

const pikachu = new Pokemon("Electric", 70);
pikachu.type = "Fire";
const jigglypuff = Pokemon.fromPowerAndType(50, "Fairy");
console.log(pikachu.getPower());
pikachu.print();
jigglypuff.print();
const gengar = new Pokemon();
const x = 89; // const is like Java final: x can't be changed
