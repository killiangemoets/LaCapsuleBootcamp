var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/select-food", function (req, res, next) {
  console.log(req.query);
  res.render("food", { food: req.query.food, query: req.query });
});

module.exports = router;
