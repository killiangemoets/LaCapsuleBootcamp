var convertNumberToRomanNumeral = function (num) {
    if (num >= 4000)
        return "Enter an integer smaller than 4000";
    var arr = num.toString().split("");
    var RomanNumeral = "";
    for (var index = arr.length - 1; index >= 0; index--) {
        var num_1 = +arr[arr.length - 1 - index];
        // console.log(num);
        var nine = "", five = "", four = "", one = "";
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
        if (num_1 === 9)
            RomanNumeral += nine;
        else if (num_1 >= 5) {
            RomanNumeral += five;
            for (var i = 0; i < +num_1 - 5; i++) {
                RomanNumeral += one;
            }
        }
        else if (num_1 === 4)
            RomanNumeral += four;
        else {
            for (var i = 0; i < +num_1; i++) {
                RomanNumeral += one;
            }
        }
    }
    return RomanNumeral;
};
var solution2 = function (number) {
    var tab = [
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
    return tab.reduce(function (a, c) {
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
