var express = require("express");
var router = express.Router();

var bagels = [
  {
    name: "Bagel façon Bresse Bleu",
    urlImage: "images/bagel_bleu.jpg",
    description:
      "Les fans de fromage bleu vont adorer cette recette de burger aux blancs de poulet et confit d'oignons. A accompagner de pommes de terres sautées ou de frites.",
  },
  {
    name: "Bagel Pizza",
    urlImage: "images/bagel_pizza.jpg",
    description:
      "La Pizza Bagel réalise votre rêve le plus fou: une pizza réaslier en quelques minutes avec comme base un bagel garni de sauce tomate, de jambon et de fromage. Une recete idéale pour votre prochain brunch.",
  },
  {
    name: "Bagel Saumon",
    urlImage: "images/bagel_saumon.jpg",
    description:
      "Un délicieux pain rond, ultra moelleux et grillé, garni de saumon fumé et de crème.",
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/bagel", function (req, res, next) {
  res.render("bagel", { bagels: bagels });
});

module.exports = router;
