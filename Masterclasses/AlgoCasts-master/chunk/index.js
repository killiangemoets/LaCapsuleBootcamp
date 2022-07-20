// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   let newArray = [];

//   let i = 0;
//   while (i < array.length) {
//     let subarray = [];
//     for (let j = 0; j < size; j++) {
//       if (array[i]) subarray.push(array[i]);
//       i++;
//     }
//     newArray.push(subarray);
//   }
//   return newArray;
// }

// function chunkArray(array, size) {
//   let newArray = [];
//   let count = 0;
//   let sub = [];
//   for (let el of array) {
//     sub.push(el);
//     count++;
//     if (count === size) {
//       newArray.push(sub);
//       sub = [];
//       count = 0;
//     }
//   }
//   if (sub.length > 0) newArray.push(sub);

//   return newArray;
// }

function chunk(array, size) {
  let newArray = [];
  for (let i = 0; i < array.length; i = i + size) {
    newArray.push(array.slice(i, i + size));
  }
  return newArray;
}

// function chunk(array, size) {
//   const chunked = [];

//   for (let element of array) {
//     const last = chunked[chunked.length - 1];
//     console.log(`IN: Element: ${element}, Chunked: ${chunked}, Last: ${last}`);

//     if (!last || last.length === size) {
//       chunked.push([element]);
//     } else {
//       last.push(element);
//     }

//     console.log(`OUT: Element: ${element}, Chunked: ${chunked}, Last: ${last}`);
//   }

//   return chunked;
// }

console.log(chunk([1, 2, 3, 4], 2));
console.log(chunk([1, 2, 3, 4, 5], 2));
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(chunk([1, 2, 3, 4, 5], 4));
console.log(chunk([1, 2, 3, 4, 5], 10));

module.exports = chunk;
