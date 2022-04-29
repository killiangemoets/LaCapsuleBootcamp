var express = require("express");
var router = express.Router();
var userModel = require("../models/users");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/addarticle", async function (req, res, next) {
  try {
    const user = await userModel.findOne({ token: req.body.token });

    user.articles.push({
      urlToImage: req.body.urlToImage,
      title: req.body.title,
      description: req.body.description,
      content: req.body.content,
    });

    const userSaved = await user.save();

    res.status(201).json({
      status: "success",
      date: {
        user: userSaved,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
});

router.delete("/deletearticle/:token/:title", async function (req, res, next) {
  try {
    // console.log(req.params.token);
    // console.log(req.params.title);
    const user = await userModel.findOne({ token: req.params.token });

    console.log(user.articles.length);

    console.log(user.articles[0].title);
    console.log(req.params.title);
    user.articles = user.articles.filter(
      (article) => article.title !== req.params.title
    );
    console.log(user.articles.length);

    const userSaved = await user.save();

    res.status(204).json({
      status: "success",
      user: userSaved,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
});

module.exports = router;
