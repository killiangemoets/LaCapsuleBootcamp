var express = require("express");
var router = express.Router();
var imageModel = require("../models/images");
var uniqid = require("uniqid");
var request = require("sync-request");
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

    var options = {
      json: {
        apiKey: "5c0a5d392c1745d2ae84dc0b1483bfd2",
        image: resultCloudinary.url,
      },
    };

    var resultDetectionRaw = await request(
      "POST",
      "https://lacapsule-faceapi.herokuapp.com/api/detect",
      options
    );

    var resultDetection = await resultDetectionRaw.body;
    resultDetection = await JSON.parse(resultDetection);
    console.log(resultDetection);

    var image = new imageModel({
      name: resultCloudinary.original_filename,
      url: resultCloudinary.url,
      gender: resultDetection?.result
        ? resultDetection.detectedFaces[0]?.gender
        : "No gender detected",
      age: resultDetection?.result
        ? resultDetection.detectedFaces[0]?.age
        : "No age detected",
    });

    await image.save();

    res.json({
      original_filename: resultCloudinary.original_filename,
      url: resultCloudinary.url,
      gender: resultDetection?.result
        ? resultDetection.detectedFaces[0]?.gender
        : "No gender detected",
      age: resultDetection?.result
        ? resultDetection.detectedFaces[0]?.age
        : "No age detected",
    });
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
