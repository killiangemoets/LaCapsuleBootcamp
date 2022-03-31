var express = require("express");
var router = express.Router();

function isEmpty(obj) {
  for (var prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false;
    }
  }

  return JSON.stringify(obj) === JSON.stringify({});
}

var Products = [
  {
    name: "Apple watch",
    price: 300,
    image: "apple-watch",
  },
  {
    name: "Porte document",
    price: 76,
    image: "porte-doc",
  },
  {
    name: "DJI mavic air",
    price: 989,
    image: "dji-mavic-air",
  },
  {
    name: "Oculus",
    price: 342,
    image: "oculus",
  },
  {
    name: "Bose QC35",
    price: 155,
    image: "bose-qc35",
  },
  {
    name: "Xiaomi-m365",
    price: 674,
    image: "xiaomi-m365",
  },
  {
    name: "BRIG Eagle 380",
    price: 15500,
    image: "BRIG-Eagle-380",
  },
  {
    name: "Linda Razer",
    price: 897,
    image: "linda",
  },
  {
    name: "Fort 500",
    price: 67,
    image: "fort-500",
  },
  {
    name: "OnePlus 6",
    price: 540,
    image: "one-plus6",
  },
];

router.get("/", function (req, res, next) {
  if (!req.session.basket) req.session.basket = [];

  if (!isEmpty(req.query)) {
    req.session.basket.push({
      name: req.query.name,
      price: req.query.price,
      image: req.query.image,
    });
  }
  res.render("index", { Products, numOfArticles: req.session.basket.length });
});

router.get("/basket", function (req, res, next) {
  res.render("basket", { basket: req.session.basket });
});

module.exports = router;
