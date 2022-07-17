// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data, children = []) {
    this.data = data;
    this.children = children;
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter((el) => el.data !== data);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    const array = [this.root];

    while (array.length) {
      const node = array.shift();
      //   node.children.forEach((child) => array.push(child));
      array.push(...node.children);
      fn(node);
    }
  }

  traverseDF(fn) {
    const array = [this.root];
    while (array.length) {
      const node = array.shift();
      array.unshift(...node.children);
      fn(node);
    }
  }

  traverseDFrecursive(fn, node = this.root) {
    fn(node);

    node.children.forEach((child) => {
      this.traverseDF(fn, child);
    });
  }
}

const node = new Node(20);

const tree = new Tree();
tree.root = node;
node.add(0);
node.add(40);
node.add(-15);
tree.root.children[0].add(12);
tree.root.children[0].add(-2);
tree.root.children[0].add(1);
tree.root.children[2].add(-3);
// tree.traverseBF((node) => (node.data += 10));
// console.log(tree);
const arrBF = [];
tree.traverseBF((node) => {
  arrBF.push(node.data);
});
console.log(arrBF);
const arrDF = [];
tree.traverseDF((node) => {
  arrDF.push(node.data);
});
console.log(arrDF);
module.exports = { Tree, Node };
