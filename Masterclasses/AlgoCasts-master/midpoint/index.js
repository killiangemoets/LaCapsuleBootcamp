// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

import { LinkedList } from "./linkedlist.js";

function midpoint2(list) {
  console.log(list);
  let slow = list.head,
    fast = list.head;

  while (fast) {
    fast = fast.next?.next;
    if (fast) slow = slow.next;
  }

  return slow;
}

function midpoint(list) {
  // console.log(list);
  let slow = list.getFirst(),
    fast = list.getFirst();

  let indexSlow = 1,
    indexFast = 2;

  while (fast) {
    fast = list.getAt(indexFast);
    if (fast) slow = list.getAt(indexSlow);
    indexSlow += 1;
    indexFast += 2;
  }

  return slow;
}

const l = new LinkedList();
l.insertLast("a");
l.insertLast("b");
l.insertLast("c");
l.insertLast("d");
l.insertLast("e");
l.insertLast("f");
l.insertLast("g");
console.log(midpoint(l)); // returns { data: 'b' }

export default midpoint;
