// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  // Iterative Solution
  insert2(data) {
    let comparator = this;
    let insert = false;

    while (!insert) {
      if (data === comparator.data) {
        insert = true;
      } else if (data < comparator.data) {
        if (comparator.left) comparator = comparator.left;
        else {
          comparator.left = new Node(data);
          insert = true;
        }
      } else {
        if (comparator.right) comparator = comparator.right;
        else {
          comparator.right = new Node(data);
          insert = true;
        }
      }
    }
  }

  // Recursive Solution
  insert(data) {
    if (data === this.data) return;
    if (data < this.data) {
      if (this.left) this.left.insert(data);
      else {
        this.left = new Node(data);
      }
    } else {
      if (this.right) this.right.insert(data);
      else {
        this.right = new Node(data);
      }
    }
  }

  // Iterative Solution
  contains2(data) {
    let comparator = this;
    let found = null;

    while (comparator && !found) {
      if (data === comparator.data) {
        found = comparator;
      } else if (data < comparator.data) {
        comparator = comparator.left;
      } else {
        comparator = comparator.right;
      }
    }

    return found;
  }

  // Recursive Solution
  contains3(data) {
    if (data === this.data) {
      return this;
    } else if (data < comparator.data) {
      if (comparator.left) return this.left.contains3(data);
      return null;
    } else {
      if (comparator.right) return this.right.contains3(data);
      return null;
    }
  }

  contains(data) {
    if (data === this.data) {
      return this;
    } else if (data < this.data && this.left) {
      // DON'T FORGET TO RETURN THE FUNCTION!!
      return this.left.contains(data);
    } else if (data > this.data && this.right) {
      return this.right.contains(data);
    }

    return null;
  }
}

module.exports = Node;
