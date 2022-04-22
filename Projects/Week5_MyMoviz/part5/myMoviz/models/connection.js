var mongoose = require("mongoose");

const password = "F5trt36mNHDYCADy";

var options = {
  connectTimeoutMS: 5000,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(
  `mongodb+srv://admin:${password}@cluster0.5tit6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  options,
  function (err) {
    console.log(err);
  }
);
