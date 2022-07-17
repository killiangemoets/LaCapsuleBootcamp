// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]
//matrix(5)
//     [1 , 2, 3 , 4   5]
//    [16, 17, 18, 19, 6]
//    [15, 24, 25, 20, 7]
//    [14, 23, 22, 21, 8]
//    [13, 12, 11, 10, 9]

function matrix(n) {
  let matrix = [],
    count = 1;
  for (let i = 0; i < n; i++) {
    matrix.push(Array(n).fill(0));
  }
  let columnMin = 0,
    columnMax = n,
    rowMin = 0,
    rowMax = n;

  //   while (count <= n * n) {
  while (columnMin <= columnMax && rowMin <= rowMax) {
    //From left to right
    for (let column = columnMin; column < columnMax; column++) {
      matrix[rowMin][column] = count;
      count += 1;
    }
    rowMin += 1;

    // From top to bottom
    for (let row = rowMin; row < rowMax; row++) {
      matrix[row][columnMax - 1] = count;
      count += 1;
    }
    columnMax -= 1;

    // From right to left
    for (let column = columnMax - 1; column >= columnMin; column--) {
      matrix[rowMax - 1][column] = count;
      count += 1;
    }
    rowMax -= 1;

    // From bottom to top
    for (let row = rowMax - 1; row >= rowMin; row--) {
      matrix[row][columnMin] = count;
      count += 1;
    }
    columnMin += 1;

    // console.log(count);
  }

  return matrix;
}

console.log(matrix(2));
console.log(matrix(3));
console.log(matrix(4));
console.log(matrix(10));

module.exports = matrix;
