var express = require("express");
var router = express.Router();

var developpers = [
  {
    firstname: "Leanne",
    lastname: "Graham",
    sex: "woman",
    skills: ["HTML", "CSS"],
    level: 75,
  },
  {
    firstname: "Ervin",
    lastname: "Howell",
    sex: "man",
    skills: ["HTML", "nodeJS", "Express"],
    level: 30,
  },
  {
    firstname: "Clementine",
    lastname: "Bauch",
    sex: "woman",
    skills: ["HTML", "CSS"],
    level: 49,
  },
  {
    firstname: "Kurtis",
    lastname: "Weissnat",
    sex: "man",
    skills: ["JavaScript", "jQuery", "nodeJS", "Express"],
    level: 67,
  },
  {
    firstname: "Chelsey",
    lastname: "Dietrich",
    sex: "woman",
    skills: ["HTML", "CSS", "JavaScript", "nodeJS", "Express"],
    level: 96,
  },
  {
    firstname: "Dennis",
    lastname: "Shullist",
    sex: "man",
    skills: ["HTML", "CSS", "Javascript"],
    level: 54,
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { developpers: developpers });
});

module.exports = router;
