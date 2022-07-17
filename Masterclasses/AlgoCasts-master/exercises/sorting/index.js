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

function mergeSort(arr) {}

// Left and Right are sorted arrays
// The goal of the merge function is to merge this 2 sorted arrays
function merge(left, right) {}

console.log(bubbleSort([100, -40, 500, -124, 0, 21, 7]));
console.log(selectionSort([100, -40, 500, -124, 0, 21, 7]));

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
