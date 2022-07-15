// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9
//   reverseInt(520) === 25

// function reverseInt(n) {
//   // 0 is an exception
//   if (n === 0) return 0;

//   // 1) Split number into an array
//   let value = n.toString().split("");

//   // 2) Keep the negative sign if number is negative
//   let sign = "";
//   if (value[0] === "-") {
//     sign = "-";
//     value = value.slice(1);
//   }

//   // 3) Revese the number
//   value = value.reverse().join("");

//   // 4) Remove the potential zeros at the beginning
//   while (value[0] === "0") {
//     value = value.slice(1);
//   }

//   // 5) Form the new number
//   //   const newNumber = parseInt((sign += value));
//   const newNumber = +(sign += value);

//   // 4) & 5) combined
//   //   const newNumber = +(sign += parseInt(value));

//   return newNumber;
// }

function reverseInt(n) {
  const reversed = n.toString().split("").reverse().join("");
  return parseInt(reversed) * Math.sign(n);
}

console.log(reverseInt(15));
console.log(reverseInt(981));
console.log(reverseInt(500));
console.log(reverseInt(-15));
console.log(reverseInt(-90));
console.log(reverseInt(520));
console.log(reverseInt(0));

module.exports = reverseInt;
