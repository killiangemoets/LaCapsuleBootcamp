var express = require("express");
var router = express.Router();
var imageModel = require("../models/images");
var uniqid = require("uniqid");

var cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "djuuji1j9",
  api_key: "317463221146189",
  api_secret: "_NQKtx-n_nzSHbeGIeM8yHgjkSw",
});
var fs = require("fs");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/upload", async function (req, res, next) {
  console.log(req.files.avatar.name);
  console.log(req.files.avatar.mimetype);
  console.log(req.files.avatar.data);

  const imagePath = "./tmp/" + uniqid() + ".jpg";

  const resultCopy = await req.files.avatar.mv(imagePath);
  if (!resultCopy) {
    const resultCloudinary = await cloudinary.uploader.upload(imagePath);

    var image = new imageModel({
      name: resultCloudinary.original_filename,
      url: resultCloudinary.url,
    });

    await image.save();

    res.json(resultCloudinary);
    // res.json({ retult: true, message: "File uploaded" });
  } else {
    res.json({ error: "error" });
  }

  fs.unlinkSync(imagePath);
});

router.get("/download", async function (req, res, next) {
  var images = await imageModel.find();

  console.log(images);

  if (images) {
    res.json(images);
    // res.json({ retult: true, message: "File uploaded" });
  } else {
    res.json({ error: "error" });
  }
});

module.exports = router;
