//// CHALLENGE 1 ////

var contacts1 = ["john", "vanessa", "FRANCK"];
contacts1 = contacts1.map(
  (el) => el[0].toUpperCase() + el.slice(1).toLowerCase()
);
console.log(contacts1);

//// CHALLENGE 2 ////

var contacts = [
  {
    prenom: "john",
    telephone: "0611223344",
  },
  {
    prenom: "elise",
    telephone: "0655667799",
  },
  {
    prenom: "franck",
    telephone: "0612345678",
  },
  {
    prenom: "elisa",
    telephone: "0612345678",
  },
];

let newContacts = [];
newContacts = contacts.map((el) => {
  return {
    prenom: el.prenom,
    telephone: "+33" + el.telephone.slice(1),
    admin: el.prenom === "john" ? true : false,
  };
});
console.log(newContacts);

let sansDoublons = [];
for (var i = 0; i < newContacts.length; i++) {
  let doublon = false;
  for (var j = 0; j < sansDoublons.length; j++) {
    if (sansDoublons[j].telephone === newContacts[i].telephone) doublon = true;
  }
  if (doublon === false) sansDoublons.push(newContacts[i]);
}
console.log(sansDoublons);

// Second method
let sansDoublons2 = [];
newContacts.forEach((nc) => {
  let doublon = false;

  sansDoublons2.forEach((sd) => {
    if (sd.telephone === nc.telephone) doublon = true;
  });

  if (doublon === false) sansDoublons2.push(nc);
});
console.log(sansDoublons2);

//// CHALLENGE 3 ////
var shopping = [
  { product: "Livre", unitPrice: 10.99 },
  { product: "CD", unitPrice: 15.99 },
  { product: "DVD", unitPrice: 23 },
];

var shopping2 = [
  { product: "Livre", unitPrice: 30 },
  { product: "CD", unitPrice: 20 },
  { product: "DVD", unitPrice: 25 },
];

const calculateTotal = function (shopping) {
  var valeurInitiale = 0;
  var total = shopping.reduce(
    (acc, valCourante) => acc + valCourante.unitPrice,
    valeurInitiale
  );
  if (total > 60) console.log("Frais de port offert");
  return total;
};
console.log(calculateTotal(shopping));
console.log(calculateTotal(shopping2));

var shopping3 = [
  { product: "Livre", unitPrice: 10.99, quantity: 1 },
  { product: "CD", unitPrice: 15.99, quantity: 1 },
  { product: "DVD", unitPrice: 23, quantity: 3 },
];

var shopping4 = [
  { product: "Livre", unitPrice: 10, quantity: 1 },
  { product: "CD", unitPrice: 5, quantity: 2 },
  { product: "DVD", unitPrice: 25, quantity: 1 },
];

const calculateTotal2 = function (shopping) {
  var valeurInitiale = 0;
  var total = shopping.reduce(
    (acc, valCourante) => acc + valCourante.unitPrice * valCourante.quantity,
    valeurInitiale
  );
  if (total > 60) console.log("Frais de port offert");
  return total;
};
console.log(calculateTotal2(shopping3));
console.log(calculateTotal2(shopping4));

//// CHALLENGE 4 ////

var tableau = [
  "bonjour",
  "kayak",
  "salut",
  "ressasser",
  "toto",
  "javascript",
  "été",
  "algo",
];

const cleanPalindromes = function (array) {
  let arrayPalindromes = [];
  array.forEach((word) => {
    let newWord = [];
    // let newWord = Array(word.length).fill("");
    for (i = 0; i < word.length; i++) {
      // newWord[word.length - 1 - i] = word[i];
      newWord.unshift(word[i]);
    }
    newWord = newWord.join("");
    if (newWord === word) arrayPalindromes.push(word);
  });
  return arrayPalindromes;
};

console.log(cleanPalindromes(tableau));

//// CHALLENGE 5 ////

var tableau2 = ["ordre", "donner", "roder", "recevoir", "dorer", "plaisir"];

const filterAnagrammes = function (array, modelWord) {
  let anagrammes = [];
  array.forEach((word) => {
    if (word.length !== modelWord.length) return;

    let modelLetters = modelWord.split("");
    const letters = word.split("");
    for (i = 0; i < letters.length; i++) {
      for (j = 0; j < modelLetters.length; j++) {
        if (letters[i] === modelLetters[j]) {
          modelLetters.splice(j, 1);
          break;
        }
      }
    }

    if (modelLetters.length === 0) anagrammes.push(word);
    return;
  });

  return anagrammes;
};

console.log(filterAnagrammes(tableau2, "ordre"));
