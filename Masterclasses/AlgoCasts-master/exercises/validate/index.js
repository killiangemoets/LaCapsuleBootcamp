// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate2(node, min = -Infinity, max = Infinity) {
  if (node.data > min && node.data < max) {
    //Check left
    const maxLeft = node.data;
    const minLeft = min;
    const nodeLeft = node.left;

    // Check right
    const maxRight = max;
    const minRight = node.data;
    const nodeRight = node.right;

    if (nodeLeft && nodeRight)
      return (
        validate(nodeLeft, minLeft, maxLeft) &&
        validate(nodeRight, minRight, maxRight)
      );
    else if (!nodeLeft && nodeRight)
      return validate(nodeRight, minRight, maxRight);
    else if (nodeLeft && !nodeRight)
      return validate(nodeLeft, minLeft, maxLeft);
    else if (!nodeLeft && !nodeRight) return true;
  } else {
    return false;
  }
}

function validate(node, min = null, max = null) {
  if (max && node.data > max) {
    return false;
  }

  if (min && node.data < min) {
    return false;
  }

  if (node.left && !validate(node.left, min, node.data)) {
    return false;
  }

  if (node.right && !validate(node.right, node.data, max)) {
    return false;
  }

  return true;
}

module.exports = validate;
