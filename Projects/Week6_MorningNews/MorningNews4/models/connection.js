var mongoose = require("mongoose");

const password = "bCafwb5KzpZChlbs";

var options = {
  connectTimeoutMS: 5000,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(
  `mongodb+srv://admin:${password}@cluster0.qatpr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  options,
  function (err) {
    console.log(err);
  }
);
