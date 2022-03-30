var express = require("express");
var router = express.Router();

var dataBike = [
  {
    name: "BIK045",
    urlImage: "images/bike-1.jpg",
    price: 679,
  },
  {
    name: "ZOOK7",
    urlImage: "images/bike-2.jpg",
    price: 799,
  },
  {
    name: "LIK089",
    urlImage: "images/bike-3.jpg",
    price: 839,
  },
  {
    name: "GEW08",
    urlImage: "images/bike-4.jpg",
    price: 1249,
  },
  {
    name: "KIWIT",
    urlImage: "images/bike-5.jpg",
    price: 899,
  },
  {
    name: "NASAY",
    urlImage: "images/bike-6.jpg",
    price: 1399,
  },
];
var dataCardBike = [
  {
    name: "BIK045",
    urlImage: "images/bike-1.jpg",
    price: 679,
    quantity: 2,
  },
  {
    name: "ZOOK7",
    urlImage: "images/bike-2.jpg",
    price: 799,
    quantity: 1,
  },
  {
    name: "LIK089",
    urlImage: "images/bike-3.jpg",
    price: 839,
    quantity: 3,
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { dataBike: dataBike });
});
router.get("/shop", function (req, res, next) {
  res.render("shop", { dataBike: dataCardBike });
});

module.exports = router;
