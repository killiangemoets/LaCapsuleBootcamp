var mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, "Please write a note"],
    trim: true,
    maxlength: [500, "A note cannot have more than 500 characters"],
  },
  creationDate: {
    type: Date,
    default: Date.now(),
  },
  done: {
    type: Boolean,
    default: false,
  },
  doneDate: {
    type: Date,
    default: null,
  },
  token: {
    type: String,
    required: true,
  },
});

const noteModel = mongoose.model("notes", noteSchema);

module.exports = noteModel;
