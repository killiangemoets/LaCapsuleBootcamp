var mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  articles: [{ type: mongoose.Schema.Types.ObjectId, ref: "articles" }],
  total: Number,
  shipping_cost: Number,
  date_insert: Date,
  status_payment: String,
  date_payment: Date,
  status_shipment: Boolean,
  date_shipment: Date,
  delivery_address: String,
  delivery_city: String,
  delivery_zipcode: String,
});

var orderModel = mongoose.model("orders", orderSchema);

module.exports = orderModel;
