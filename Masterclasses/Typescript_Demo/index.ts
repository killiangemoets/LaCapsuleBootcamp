//////  TYPE BASIQUES //////

// let num = 25;
// C'est mieux de le définir explicitement:
let num: number = 25;

// Doesn't work bc num has to be a number
// num = "string";
num = 12;

let str: string = "hello";

// str = 32;

let template: string = `hello 
wassup
here i'm
`;

const myName = "Kiki";

const greeting: string = `Hello, I'm ${myName}`;

const bool: boolean = true;

////// TYPES COMPLEXES //////

// On combine plusieurs types : can be a string or a number
let union: string | number = 12;
union = "hello world";

if (typeof union === "string") console.log("its a string");
else console.log("it's not a string");

let union2: object | null = {};
let union3: object | void = {};
let obj: { name: String } | null = null;

obj = { name: "Kiki" };

class User {
  name: string;
  constructor(data: string) {
    this.name = data.toLowerCase();
  }
}

let myself = new User("Kiki");

let example: number = 33;
// console.log(example.length);
console.log((example as string).length);
console.log((<string>example).length);

// je définis mon propre type que j'appelle AddFunction
type AddFunction = (num: number) => number;

// Je cr&e une fonction de type AddFunction (que je viens de créer)
const add: AddFunction = (num) => num + 1;
// const add: AddFunction = (num) => `${num}`;

// On peut aussi mettre les unions dans un type:
type Union = number | string;

// Les types sont utlisées pour des données individuelles alors que les interfaces sont utilisés pour des données plus complexes.
interface Item {
  key: number;
  name: String;
  elements?: string[]; //Un tableau de strings
  // Si je mets un point d'interrogation, cet élément est alors optionel
}

// Les interfaces peuvent être combinés
interface Item {
  open?: boolean;
}

interface Props {
  item: Item;
  add: AddFunction;
}

const obj1: Item = {
  key: 1,
  name: "object 1",
};

////// TUPLES //////

type Tuple = [string, number, ...boolean[]];

const exo1: Tuple = ["hello", 8];

// Utile pour les arguments d'une fonction
const fn = (...args: Tuple) => {};
