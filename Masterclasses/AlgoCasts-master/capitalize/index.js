// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize2(str) {
  return str
    .split("")
    .map((char, i) => {
      if (str.split("")[i - 1] === " " || i === 0) return char.toUpperCase();
      else return char;
    })
    .join("");
}

function capitalize(str) {
  return str
    .split(" ")
    .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalize("a short sentence"));
console.log(capitalize("a lazy fox"));
console.log(capitalize("look, it is working!"));

module.exports = capitalize;
