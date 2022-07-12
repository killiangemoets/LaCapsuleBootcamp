const hexMe = (r, b, g) => {
  let result = "#";
  const hex = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  const arr = [r, b, g];
  for (const value of arr) {
    const num = value > 255 ? 255 : value < 0 ? 0 : value;
    const first = Math.floor(num / 16) < 16 ? Math.floor(num / 16) : 15;
    const second = num % 16;
    result += hex[first] + hex[second];
  }

  return result;
};

console.log(hexMe(255, 0, 0)); // #FF0000
console.log(hexMe(265, 215, 0)); // #FFD700
console.log(hexMe(265, 215, -10)); // #FFD700
console.log(hexMe(8, 215, -10)); // #08D700
