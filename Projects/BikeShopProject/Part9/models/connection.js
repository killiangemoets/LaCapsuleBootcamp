var mongoose = require("mongoose");

const user = "admin";
const password = "L3fXl5AoC7ZrGbJO";

var options = {
  connectTimeoutMS: 5000,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(
  `mongodb+srv://${user}:${password}@cluster0.qlqts.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  options,
  function (err) {
    console.log(err);
  }
);
