var mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  name: String,
  desc: String,
  img: String,
  note: Number,
  vote: Number,
});

var movieModel = mongoose.model("whislist-movies", movieSchema);

module.exports = movieModel;
