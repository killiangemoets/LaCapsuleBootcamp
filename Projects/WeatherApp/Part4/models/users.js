var mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: "String",
  email: "String",
  password: "String",
});

var userModel = mongoose.model("users", userSchema);

module.exports = userModel;
