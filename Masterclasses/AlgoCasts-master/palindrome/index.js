// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  //   return str === str.split("").reverse().join("");
  return str
    .split("")
    .every((el, i) => el === str.split("")[str.length - 1 - i]);
}

console.log(palindrome("bonjour"));
console.log(palindrome("kayak"));
console.log(palindrome("salut"));
console.log(palindrome("ressasser"));
console.log(palindrome("toto"));
console.log(palindrome("javascript"));
console.log(palindrome("été"));
console.log(palindrome("algo"));
module.exports = palindrome;
