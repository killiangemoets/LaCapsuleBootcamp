var express = require("express");
var router = express.Router();
// var request = require("sync-request");
var userModel = require("../models/users");

router.post("/sign-up", async function (req, res, next) {
  try {
    const newUser = await userModel.create(req.body);

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
    console.log(user);
    console.log(user);

    if (!user) {
      res.status(404).json({
        status: "incorrect",
        message: "yyy email not found yyy",
      });
    } else if (user?.password !== req.body.password) {
      res.status(404).json({
        status: "incorrect",
        message: "zzz password incorrect zzz",
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
