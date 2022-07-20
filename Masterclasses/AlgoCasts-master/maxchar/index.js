// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxCharacter(str) {
  const charMap = {};
  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  let maxChar = str[0];
  for (let property in charMap) {
    if (charMap[property] > charMap[maxChar]) maxChar = property;
  }
  return maxChar;
}

console.log(maxCharacter("bcBccccccd"));
console.log(maxCharacter("apple 1231111"));

function maxChar(str) {
  let counts = {};

  //   str.split("").forEach((char) => {
  for (let char of str) {
    // if (Object.keys(counts).find((key) => key === char)) {
    if (counts[char]) {
      counts[char] += 1;
    } else {
      counts[char] = 1;
    }
    // counts[char] = counts[char] ? counts[char] + 1 : 1;
    // counts[char] = counts[char] + 1 || 1;
  }
  //   });

  let maxProperty = Object.keys(counts)[0];
  let maxValue = Object.values(counts)[0];

  for (const property in counts) {
    if (counts[property] > maxValue) {
      maxProperty = property;
      maxValue = counts[property];
    }
  }

  console.log(counts);

  return maxProperty;
}

console.log(maxChar("bcBccccccd"));
console.log(maxChar("apple 1231111"));

module.exports = maxChar;
