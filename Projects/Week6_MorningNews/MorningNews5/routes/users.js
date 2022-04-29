var express = require("express");
var router = express.Router();
var userModel = require("../models/users");
var uid2 = require("uid2");
var bcrypt = require("bcrypt");

router.post("/sign-up", async function (req, res, next) {
  try {
    if (req.body.password.length < 8) {
      throw new Error(
        `${
          req.body.password.length === 0
            ? "zzz Please provide a password zzz"
            : "zzz Your password should have at least 8 characters zzz"
        } ${
          req.body.username.length === 0
            ? "xxx Please provide a username xxx"
            : ""
        } ${
          req.body.email.length === 0
            ? "yyy Please provide an email address yyy"
            : ""
        }`
      );
    }
    const hash = bcrypt.hashSync(req.body.password, 10);

    const newUser = await userModel.create({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      token: uid2(4),
    });

    console.log(req.body.password);
    console.log(hash);

    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    // Exemple of error: trying to create a document without one of the require fields bc it will reject the promise.
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
});

router.post("/sign-in", async function (req, res, next) {
  try {
    const user = await userModel.findOne({ email: req.body.email });

    if (!user) {
      res.status(404).json({
        status: "incorrect",
        message:
          req.body.email.length === 0
            ? "yyy Please provide an email address yyy"
            : "yyy Email not found yyy",
      });
      // } else if (user?.password !== req.body.password) {
    } else if (!bcrypt.compareSync(req.body.password, user.password)) {
      res.status(404).json({
        status: "incorrect",
        message:
          req.body.password.length === 0
            ? "zzz Please provide a password zzz"
            : "zzz Password incorrect zzz",
      });
    } else {
      res.status(200).json({
        status: "success",
        data: {
          user,
        },
      });
    }

    // same than Tour.findOne({_id: req.params.id})
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
});

module.exports = router;
