//////  TYPE BASIQUES //////
// let num = 25;
// C'est mieux de le définir explicitement:
var num = 25;
// Doesn't work bc num has to be a number
// num = "string";
num = 12;
var str = "hello";
// str = 32;
var template = "hello \nwassup\nhere i'm\n";
var myName = "Kiki";
var greeting = "Hello, I'm ".concat(myName);
var bool = true;
////// TYPES COMPLEXES //////
// On combine plusieurs types : can be a string or a number
var union = 12;
union = "hello world";
if (typeof union === "string")
    console.log("its a string");
else
    console.log("it's not a string");
var union2 = {};
var union3 = {};
var obj = null;
obj = { name: "Kiki" };
var User = /** @class */ (function () {
    function User(data) {
        this.name = data.toLowerCase();
    }
    return User;
}());
var myself = new User("Kiki");
var example = 33;
// console.log(example.length);
console.log(example.length);
console.log(example.length);
// Je cr&e une fonction de type AddFunction (que je viens de créer)
var add = function (num) { return num + 1; };
var obj1 = {
    key: 1,
    name: "object 1"
};
var exo1 = ["hello", 8];
// Utile pour les arguments d'une fonction
var fn = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
};
