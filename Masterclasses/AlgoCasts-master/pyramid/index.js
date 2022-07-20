// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)  L = 5; midpoint = 3
//       '  #  ' row = 1; l = 1; midpoint
//       ' ### ' row = 2; l = 3; midpoint-1, midpoint+1
//       '#####' row = 3; l = 5; midpoint-2 midpoint+2
//                  row;  l = 2¨row-1; midpoint + 1 - row  midpoint + row - 1

// 1) Iterative
function pyramidIterative(n) {
  // const lengthBase = 2 * n - 1;
  // for (let row = 1; row <= n; row++) {
  //   const lengthSquares = 2 * row - 1;
  //   const lenghtWhiteSpaces = (lengthBase - lengthSquares) / 2;
  //   console.log(
  //     " ".repeat(lenghtWhiteSpaces) +
  //       "#".repeat(lengthSquares) +
  //       " ".repeat(lenghtWhiteSpaces)
  //   );
  // }
  let midpoint = n;
  for (let row = 1; row <= n; row++) {
    let str = "";
    for (let column = 1; column <= 2 * n - 1; column++) {
      if (column < midpoint - (row - 1) || column > midpoint + (row - 1))
        str += " ";
      else str += "#";
    }
    console.log(str);
  }
}

// pyramidIterative(40);

//2) Recursive
function pyramidRecursive(n, row = 1, stair = "") {
  if (row > n) return;
  else if (stair.length === n * 2 - 1) {
    console.log(stair);
    pyramidRecursive(n, row + 1, "");
  } else {
    if (stair.length + 1 < n - (row - 1) || stair.length + 1 > n + (row - 1))
      stair += " ";
    else stair += "#";
    pyramidRecursive(n, row, stair);
  }
}
// pyramidRecursive(5);

//////////////////////////////////////////////

// 1) Iterative Solution
function pyramid2(n) {
  const l = 2 * n - 1;
  const midpoint = Math.floor(l / 2) + 1;
  for (let row = 1; row <= n; row++) {
    let str = "";
    for (let column = 1; column <= l; column++) {
      if (column >= midpoint + 1 - row && column <= midpoint + row - 1)
        str += "#";
      else str += " ";
    }
    console.log(str);
  }
}

function pyramid3(n) {
  const l = 1 + (n - 1) * 2;
  for (let i = 1; i <= n; i++) {
    const lsquare = 1 + (i - 1) * 2;
    const lspace = (l - lsquare) / 2;
    str = " ".repeat(lspace) + "#".repeat(lsquare) + " ".repeat(lspace);
    console.log(str);
  }
}

// 2) Recursive Solution
function pyramid4(n, i = 1) {
  if (i > n) return;

  const l = 2 * n - 1;
  const lsquare = 1 + (i - 1) * 2;
  const lspace = (l - lsquare) / 2;
  console.log(" ".repeat(lspace) + "#".repeat(lsquare) + " ".repeat(lspace));

  pyramid(n, i + 1);
}

function pyramid(n, row = 1, stair = "") {
  if (row > n) return;

  const l = 2 * n - 1;
  const midpoint = Math.floor(l / 2) + 1;

  if (stair.length === l) {
    console.log(stair);
    pyramid(n, row + 1);
  }

  if (
    stair.length + 1 >= midpoint + 1 - row &&
    stair.length + 1 <= midpoint + row - 1
  )
    stair += "#";
  else stair += " ";

  pyramid(n, row, stair);
}

// pyramid(10);
// pyramid2(10);
// pyramid3(10);
// pyramid4(10);

module.exports = pyramid;

// function pyramid(n) {
//   const midpoint = Math.floor((2 * n - 1) / 2);

//   for (let row = 0; row < n; row++) {
//     let level = "";

//     for (let column = 0; column < 2 * n - 1; column++) {
//       if (midpoint - row <= column && midpoint + row >= column) level += "#";
//       else level += " ";
//     }

//     console.log(level);
//   }
// }
