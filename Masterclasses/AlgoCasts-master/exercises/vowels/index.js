// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels2(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (vowels.find((vowel) => vowel === char)) count += 1;
  }

  return count;
}

function vowels3(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) count += 1;
  }

  return count;
}

function vowels(str) {
  console.log(str.match(/[aeiou]/gi));
  return str.match(/[aeiou]/gi)?.length || 0;
}

console.log(vowels("Hi There!"));
console.log(vowels("Why do you ask?"));
console.log(vowels("Why?"));

module.exports = vowels;
