const { query } = require("express");
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

var dataCardBike = [];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { dataBike: dataBike });
});
router.get("/shop", function (req, res, next) {
  // console.log(req.query);
  // console.log(dataCardBike);
  if (!isEmpty(req.query)) {
    let bikeAlreadyInTheCard = false;
    dataCardBike.forEach((bike) => {
      if (req.query.name === bike.name) {
        bikeAlreadyInTheCard = true;
        bike.quantity++;
      }
    });
    if (!bikeAlreadyInTheCard) {
      dataCardBike.push({
        name: req.query.name,
        urlImage: req.query.urlImage,
        price: req.query.price,
        quantity: 1,
      });
    }
  }

  res.render("shop", {
    dataCardBike: dataCardBike,
  });
});

router.get("/delete-shop", function (req, res, next) {
  // console.log(req.query);
  dataCardBike.splice(req.query.id, 1);

  res.render("shop", {
    dataCardBike: dataCardBike,
  });
});

router.post("/update-shop", function (req, res, next) {
  // console.log(req.body);
  dataCardBike[req.body.id].quantity = req.body.quantity;

  res.render("shop", {
    dataCardBike: dataCardBike,
  });
});

module.exports = router;
