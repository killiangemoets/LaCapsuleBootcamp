type RomanFunction = (num: number) => string;

const convertNumberToRomanNumeral: RomanFunction = (num) => {
  if (num >= 4000) return "Enter an integer smaller than 4000";

  const arr: [...string[]] = num.toString().split("");

  let RomanNumeral: string = "";
  for (let index = arr.length - 1; index >= 0; index--) {
    let num: number = +arr[arr.length - 1 - index];
    // console.log(num);
    let nine: string = "",
      five: string = "",
      four: string = "",
      one: string = "";
    if (index === 0) {
      nine = "IX";
      five = "V";
      four = "IV";
      one = "I";
    }
    if (index === 1) {
      nine = "XC";
      five = "L";
      four = "XL";
      one = "X";
    }
    if (index === 2) {
      nine = "CM";
      five = "D";
      four = "CD";
      one = "C";
    }
    if (index === 3) {
      one = "M";
      // No need to define five, four and nine bc we asked for a number smaller than 4000, so for index=3, num<4.
    }

    if (num === 9) RomanNumeral += nine;
    else if (num >= 5) {
      RomanNumeral += five;
      for (let i = 0; i < +num - 5; i++) {
        RomanNumeral += one;
      }
    } else if (num === 4) RomanNumeral += four;
    else {
      for (let i = 0; i < +num; i++) {
        RomanNumeral += one;
      }
    }
  }

  return RomanNumeral;
};

const solution2: RomanFunction = (number) => {
  const tab = [
    { val: 1000, num: "M" },
    { val: 900, num: "CM" },
    { val: 500, num: "D" },
    { val: 400, num: "CD" },
    { val: 100, num: "C" },
    { val: 90, num: "XC" },
    { val: 50, num: "L" },
    { val: 40, num: "XL" },
    { val: 10, num: "X" },
    { val: 9, num: "IX" },
    { val: 5, num: "V" },
    { val: 4, num: "IV" },
    { val: 1, num: "I" },
  ];

  return tab.reduce((a, c) => {
    a += c.num.repeat(Math.floor(number / c.val));
    number %= c.val;
    return a;
  }, "");
};

console.log(8, convertNumberToRomanNumeral(8), solution2(8));
console.log(48, convertNumberToRomanNumeral(48), solution2(48));
console.log(102, convertNumberToRomanNumeral(102), solution2(102));
console.log(999, convertNumberToRomanNumeral(999), solution2(999));
console.log(3999, convertNumberToRomanNumeral(3999), solution2(3999));
console.log(4000, convertNumberToRomanNumeral(4000), solution2(4000));
