var mongoose = require("mongoose");

const user = "admin";
const password = "0I739FlY4vvEi6zg";

var options = {
  connectTimeoutMS: 5000,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(
  `mongodb+srv://${user}:${password}@cluster0.sf3gi.mongodb.net/myFirstDatabase?retryWrites=true`,
  options,
  function (err) {
    console.log(err);
  }
);
