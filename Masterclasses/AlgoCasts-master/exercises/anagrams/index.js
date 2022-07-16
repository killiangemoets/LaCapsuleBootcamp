// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function buildCharMap(str) {
  const map = {};

  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    map[char] = map[char] + 1 || 1;
  }

  return map;
}

function anagrams2(stringA, stringB) {
  mapA = buildCharMap(stringA);
  mapB = buildCharMap(stringB);

  if (Object.keys(mapA).length !== Object.keys(mapB).length) return false;
  else {
    for (const property in mapA) {
      if (mapA[property] !== mapB[property]) return false;
    }
  }

  return true;
}

function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

// function anagrams(stringA, stringB) {
//   stringA = stringA.replace(/[^\w]/g, "").toLowerCase();
//   stringB = stringB.replace(/[^\w]/g, "").toLowerCase();

//   const countsA = {},
//     countsB = {};
//   for (let char of stringA) {
//     if (!countsA[char]) countsA[char] = 1;
//     else countsA[char] += 1;
//   }
//   for (let char of stringB) {
//     if (!countsB[char]) countsB[char] = 1;
//     else countsB[char] += 1;
//   }
//   //   console.log(countsA, countsB);

//   let anagrams = true;
//   for (const property in countsA) {
//     if (countsA[property] !== countsB[property]) anagrams = false;
//   }
//   for (const property in countsB) {
//     if (countsB[property] !== countsA[property]) anagrams = false;
//   }

//   return anagrams;
// }

console.log(anagrams("rail safety", "fairy tales"));
console.log(anagrams("RAIL! SAFETY!", "fairy tales"));
console.log(anagrams("Hi there", "Bye there"));

module.exports = anagrams;
