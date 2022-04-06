var mongoose = require("mongoose");

// admin
// xsOTv5IoxAewJyBK

var options = {
  connectTimeoutMS: 5000,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(
  "mongodb+srv://admin:xsOTv5IoxAewJyBK@cluster0.bwlwk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  options,
  function (err) {
    console.log(err);
  }
);

var mealSchema = mongoose.Schema({
  meal: String,
  name: String,
  delivery: String,
  adress: String,
  phone: Number,
  beverage: String,
});

var mealModel = mongoose.model("orders", mealSchema);

module.exports = mealModel;
