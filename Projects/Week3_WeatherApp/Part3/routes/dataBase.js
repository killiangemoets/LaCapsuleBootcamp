var mongoose = require("mongoose");

// admin
//0I739FlY4vvEi6zg

var options = {
  connectTimeoutMS: 5000,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(
  "mongodb+srv://admin:0I739FlY4vvEi6zg@cluster0.sf3gi.mongodb.net/myFirstDatabase?retryWrites=true",
  options,
  function (err) {
    console.log(err);
  }
);

const citySchema = mongoose.Schema({
  name: String,
  description: String,
  urlImage: String,
  tmin: Number,
  tmax: Number,
});

var cityModel = mongoose.model("cities", citySchema);

module.exports = cityModel;
