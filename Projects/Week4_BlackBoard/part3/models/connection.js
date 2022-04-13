var mongoose = require("mongoose");

const user = "admin";
const password = "0I739FlY4vvEi6zg";

var options = {
  connectTimeoutMS: 5000,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(
  "mongodb+srv://blackboard:KRsEro8HYOIzopFX@cluster.dq2na.mongodb.net/blackboard",
  options,
  function (err) {
    console.log(err);
  }
);
