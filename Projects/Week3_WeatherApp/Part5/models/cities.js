var mongoose = require("mongoose");

const citySchema = mongoose.Schema({
  name: String,
  description: String,
  urlImage: String,
  tmin: Number,
  tmax: Number,
  coords: Object,
});

var cityModel = mongoose.model("cities", citySchema);

module.exports = cityModel;
