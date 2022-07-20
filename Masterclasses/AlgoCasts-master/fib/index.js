// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Iterative solutions
// Linear running time

function fib2(n) {
  let fib0 = 0,
    fib1 = 1;
  if (n == 0) return fib0;
  for (let i = 2; i <= n; i++) {
    let x = fib1;
    fib1 = fib0 + fib1;
    fib0 = x;
  }
  return fib1;
}

function fib3(n) {
  const fibSeries = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
  }
  return fibSeries[n];
}

// Recursive solutions
// Exponential running time
function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

// Let's use MEMOIZATION:

// Memoizer
function memoize(fn) {
  const cache = {};
  // We write ...args because we don't know how many arguments this function will be called with (indeed, we want to write a general memoizer). So we just take all the arguments and assign them as an array to this variable calles args
  return function (...args) {
    //   return function (args) {
    // CACHING MECHANISM
    // We check if we already called this function with this particular set of arguments and store the result this cache object
    if (cache[args]) {
      return cache[args];
    }
    // Whenever we call a function with an array of arguments, we have to use the apply method
    const result = fn.apply(this, args);
    // const result = fn(args);
    cache[args] = result;
    return result;
  };
}

// We take our slow function, we pass it to memorize and that's going to return a new function assigned to fib
fib = memoize(fib);

// console.log(fib(0));
// console.log(fib(1));
// console.log(fib(2));
// console.log(fib(3));
// console.log(fib(4));
// console.log(fib(7));
// console.log(fib(8));
// console.log(fib(9));

module.exports = fib;

// Doesn't work
// function fib4(n, fibSeries = [0, 1], i = 2) {
//   console.log(n, fibSeries, i, fibSeries[n]);
//   if (i > n) return fibSeries[n];

//   fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
//   fib(n, fibSeries, i + 1);
// }
