// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  //   let reverse = "";
  //   str.split("").forEach((letter) => {
  //     reverse = letter + reverse;
  //   });

  //   let reverse = [];
  //   for (let i = 0; i < str.length; i++) {
  //     reverse.unshift(str[i]);
  //   }
  //   reverse = reverse.join("");

  //   let reverse = "";
  //   for (let char of str) {
  //     reverse = char + reverse;
  //   }

  // const reverse = str.split("").reduce((acc, curr) => curr + acc, "");

  const reverse = str.split("").reverse().join("");

  return reverse;
}

console.log(reverse("hello world!"));
console.log(reverse("a b cd       z"));

module.exports = reverse;
