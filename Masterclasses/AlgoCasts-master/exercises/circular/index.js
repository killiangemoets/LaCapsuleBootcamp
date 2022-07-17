// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

import { Node, LinkedList as List } from "./linkedlist.js";

function circular2(list) {
  let slow = list.head,
    fast = list.head;

  while (fast) {
    fast = fast.next?.next;
    slow = slow.next;
    if (fast === slow) return true;
  }

  return false;
}

function circular(list) {
  let slow = list.getFirst(),
    fast = list.getFirst();

  let indexSlow = 1,
    indexFast = 2;
  while (fast) {
    fast = list.getAt(indexFast);
    slow = list.getAt(indexSlow);
    if (fast === slow) return true;
    indexSlow += 1;
    indexFast += 2;
  }

  return false;
}

const l = new List();
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
l.head = a;
a.next = b;
b.next = c;
c.next = b;
console.log(circular(l)); // true

module.exports = circular;
