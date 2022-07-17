// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

import Stack from "./stack.js";

class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  add(record) {
    while (this.stack1.peek()) {
      this.stack2.push(this.stack1.pop());
    }
    this.stack1.push(record);
    while (this.stack2.peek()) {
      this.stack1.push(this.stack2.pop());
    }
  }

  remove() {
    return this.stack1.pop();
  }

  peek() {
    return this.stack1.peek();
  }
}

const q = new Queue();
q.add(1);
q.add(2);
q.add(3);
q.add(4);
q.add(5);
console.log(q.peek()); // returns 1
console.log(q.remove()); // returns 1
console.log(q.remove()); // returns 2
console.log(q.remove()); // returns 3
console.log(q.remove()); // returns 4
console.log(q.remove()); // returns 5
console.log(q.remove()); // returns undifined

export default Queue;
