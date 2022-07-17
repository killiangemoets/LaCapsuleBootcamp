// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  let swap = true;
  while (swap) {
    swap = false;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        const temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
        swap = true;
      }
    }
  }
  return arr;
}

function bubbleSort2(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) indexOfMin = j;
    }
    if (indexOfMin !== i) {
      const temp = arr[i];
      arr[i] = arr[indexOfMin];
      arr[indexOfMin] = temp;
    }
  }
  return arr;
}

function mergeSort2(arr) {
  const newArray = [];
  arr.forEach((el) => {
    newArray.push([el]);
  });

  while (newArray[1]) {
    const mergeArray = merge(newArray[0], newArray[1]);
    newArray.shift();
    newArray.shift();
    newArray.unshift(mergeArray);
  }

  return newArray[0];
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

// Left and Right are sorted arrays
// The goal of the merge function is to merge this 2 sorted arrays
function merge(left, right) {
  const array = [];
  let next;
  while (left.length || right.length) {
    if ((left.length && !right.length) || left[0] < right[0]) {
      next = left.shift();
    } else {
      next = right.shift();
    }
    array.push(next);
  }

  return array;
}

console.log(bubbleSort([100, -40, 500, -124, 0, 21, 7]));
console.log(selectionSort([100, -40, 500, -124, 0, 21, 7]));
console.log(mergeSort([100, -40, 500, -124, 0, 21, 7]));
console.log(merge([-30, 22, 10], [0, 12, 97, 40]));

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
