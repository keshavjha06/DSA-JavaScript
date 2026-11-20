class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class InsertNode {
  constructor() {
    this.head = null;
  }

  display() {
    let output = "";
    let current = this.head;
    while (current !== null) {
      output += current.data + " --> ";
      current = current.next;
    }
    console.log(output + "null");
  }

  insertFirst(value) {
    const newNode = new ListNode(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  insert(position, value) {
    // 1 -> 4 -> 5  becomes  1 -> 6 -> 4 -> 5
    const node = new ListNode(value);
    if (position === 1) {
      node.next = this.head;
      this.head = node;
    } else {
      let previous = this.head;
      let count = 1;
      while (count < position - 1) {
        previous = previous.next;
        count++;
      }
      const current = previous.next;
      node.next = current;
      previous.next = node;
    }
  }

  insertLast(value) {
    const newNode = new ListNode(value);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }
}

const sll = new InsertNode();
sll.insert(1, 3); // 3 -> null
sll.insert(2, 5); // 3 -> 5 -> null
sll.insert(1, 2); // 2 -> 3 -> 5 -> null
sll.insert(2, 4); // 2 -> 4 -> 3 -> 5 -> null
sll.insert(5, 7); // 2 -> 4 -> 3 -> 5 -> 7 -> null
sll.display();
