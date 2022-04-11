const mongoose = require("mongoose");

const bikeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A bike must have a name"],
  },
  urlImage: {
    type: Buffer,
    required: [true, "A bike must have a picture"],
  },
  price: {
    type: Number,
    required: [true, "A bike must have a price"],
  },
  stock: {
    type: Number,
    default: 0,
  },
});

const Bike = mongoose.model("Bike", bikeSchema);

module.exports = Bike;
