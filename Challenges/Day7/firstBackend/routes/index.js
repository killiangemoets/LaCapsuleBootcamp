var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Backend with NodeJS & Express",
    subtitle: "Coding Classes @LaCapsule",
  });
});
router.get("/home", function (req, res, next) {
  res.render("index", {
    title: "Backend with NodeJS & Express",
    subtitle: "@LaCapsule",
  });
});
router.get("/userinfo", function (req, res, next) {
  res.render("userinfo", {
    firstname: "John",
    lastname: "Doe",
    age: 40,
    animals: 2,
    born: "New York",
  });
});

module.exports = router;
