// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth2(root) {
  const levels = [];
  const array = [{ node: root, level: 0 }];
  while (array.length) {
    const el = array.shift();
    el.node.children.forEach((child) => {
      array.push({ node: child, level: el.level + 1 });
    });
    levels[el.level] = levels[el.level] ? levels[el.level] + 1 : 1;
  }

  return levels;
}

function levelWidth(root) {
  const counters = [0];
  let currentLevel = 0;
  const array = [root, "up"];
  while (array.length > 1) {
    const el = array.shift();
    if (el === "up") {
      currentLevel += 1;
      counters[currentLevel] = 0;
      array.push("up");
    } else {
      array.push(...el.children);
      counters[currentLevel] += 1;
    }
  }

  return counters;
}

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

const root = new Node(20);
root.add(0);
root.add(40);
root.add(-15);
root.children[0].add(12);
root.children[0].add(-2);
root.children[0].add(1);
root.children[2].add(-3);
console.log(root);
console.log(levelWidth(root));

module.exports = levelWidth;
