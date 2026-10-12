class Arraylist {
  constructor(capacity) {
    this.arr = new Array(capacity).fill(0);
    this.index = 0;
    this.size = 0;
  }

  add(element) {
    if (this.index === this.arr.length) {
      this.capacityIncrease();
    }
    this.arr[this.index] = element;
    this.index++;
    this.size++;
  }

  removeFromEnd() {
    this.index--;
    this.size--;
  }

  capacity() {
    return this.arr.length;
  }

  capacityIncrease() {
    const newArr = new Array(this.arr.length * 2).fill(0);
    for (let i = 0; i < this.arr.length; i++) {
      newArr[i] = this.arr[i];
    }
    this.arr = newArr;
  }

  get(index) {
    return this.arr[index];
  }

  set(index, value) {
    this.arr[index] = value;
  }

  display() {
    let line = "";
    for (let i = 0; i < this.size; i++) {
      line += this.arr[i] + " ";
    }
    console.log(line);
  }
}

const list = new Arraylist(8);
list.add(10);
list.add(20);
list.add(30);
list.display();
console.log(list.get(1));
list.add(40);
list.add(40);
list.add(40);
list.add(40);
list.add(40);
list.add(40);
list.display();
