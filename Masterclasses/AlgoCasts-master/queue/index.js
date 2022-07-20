// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor(data = []) {
    this.data = data;
  }
  add(el) {
    this.data.unshift(el);
  }
  remove() {
    return this.data.pop();
  }
}

const q = new Queue();
q.add(1);
q.add(10);
q.add(8);
q.add("Hello");
console.log(q.remove());
console.log(q.remove());
console.log(q.remove());
console.log(q.remove());

module.exports = Queue;
