// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Iterative solutions
function steps3(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= n; j++) {
      //   if (j <= i) str += "#";
      //   else str += " ";
      str += j <= i ? "#" : " ";
    }
    console.log(str);
  }
}

function steps(n) {
  for (let i = 1; i <= n; i++) {
    console.log("#".repeat(i) + " ".repeat(n - i));
  }
}

// Recursive solutions
function steps2(n, i = 1) {
  // IMPORTANT: First step: DEFINE THE BASE CASE !!
  // Indeed, to avoid an infinite loop, the first step is to define the base case, i.e the moment when we want to stop the recursion
  if (!n) return;

  let str = "";
  for (let j = 0; j < i; j++) {
    str += "#";
  }
  for (let j = 0; j < n - 1; j++) {
    str += " ";
  }
  console.log(str);

  steps2(n - 1, i + 1);
}

function steps4(n, i = 1) {
  // IMPORTANT: First step: DEFINE THE BASE CASE !!
  // Indeed, to avoid an infinite loop, the first step is to define the base case, i.e the moment when we want to stop the recursion
  if (i > n) return;

  let str = "";
  for (let j = 1; j <= n; j++) {
    if (j <= i) str += "#";
    else str += " ";
  }
  console.log(str);

  steps4(n, i + 1);
}

function steps5(n, row = 0, stair = "") {
  if (n === row) return;

  if (n === stair.length) {
    console.log(stair);
    steps(n, row + 1);
  }

  if (stair.length <= row) stair += "#";
  else stair += " ";
  steps5(n, row, stair);
}

steps(8);
// steps2(8);
// steps3(8);
// steps4(8);
// steps5(8);

module.exports = steps;
