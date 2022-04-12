var mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  title: String,
  content: String,
  dateExp: Date,
  read: Boolean,
  sender: String,
});

const taskSchema = mongoose.Schema({
  name: String,
  category: String,
  owner: String,
  dateInsert: Date,
  dateDue: Date,
  dateCloture: Date,
});

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  age: Number,
  status: String,
  gender: String,
  dateInsert: Date,
  messages: [messageSchema],
  tasks: [taskSchema],
});

var userModel = mongoose.model("users", userSchema);

module.exports = userModel;
