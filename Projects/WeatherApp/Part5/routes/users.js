var express = require("express");
var router = express.Router();
var request = require("sync-request");

var userModel = require("../models/users");

router.post("/sign-up", async function (req, res, next) {
  var user = await userModel.findOne({ email: req.body.email });

  if (user) {
    res.render("index");
  } else {
    var user = new userModel({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.currentID = await user.save();
    req.session.currentUsername = req.body.username;

    res.redirect("/weather");
  }
});

router.post("/sign-in", async function (req, res, next) {
  var user = await userModel.findOne({ email: req.body.email });
  if (user?.password == req.body.password) {
    req.session.currentID = user._id;
    req.session.currentUsername = user.username;

    res.redirect("/weather");
  } else {
    res.render("index");
  }
});

router.get("/logout", function (req, res, next) {
  req.session.currentID = null;
  req.session.currentUsername = null;
  res.redirect("/");
});

module.exports = router;
