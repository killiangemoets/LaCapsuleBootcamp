var mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  name: String,
  url: String,
});

var imageModel = mongoose.model("images", imageSchema);

module.exports = imageModel;
