var mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "xxx Please provide a username xxx"],
  },
  email: {
    type: String,
    required: [true, "yyy Please provide an email address yyy"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "yyy Please provide a valid email yyy"],
  },
  password: {
    type: String,
    required: [true, "zzz Please provide a password zzz"],
    minlength: [8, "zzz Your password should have at least 8 characters zzz"],
  },
  token: {
    type: String,
    required: true,
  },
});

var userModel = mongoose.model("users", userSchema);

module.exports = userModel;
