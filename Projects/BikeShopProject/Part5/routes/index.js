const { query } = require("express");
var express = require("express");

// This is your test secret API key.
const stripe = require("stripe")(
  "sk_test_51KjexnJNQutKRIOsRcOA3IOshaqmr6hANOTiJIiVdrsajHQcOZ2yDtXB2fttQnvGN1sHhSRUzDy5XY1yg2B1ITgq00DVdoxPnk"
);

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

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { dataBike: dataBike });
});
router.get("/success", function (req, res, next) {
  res.render("success", { dataBike: dataBike });
});
router.get("/shop", function (req, res, next) {
  if (!req.session.dataCardBike) req.session.dataCardBike = [];

  if (!isEmpty(req.query)) {
    let bikeAlreadyInTheCard = false;
    req.session.dataCardBike.forEach((bike) => {
      if (req.query.name === bike.name) {
        bikeAlreadyInTheCard = true;
        bike.quantity++;
      }
    });
    if (!bikeAlreadyInTheCard) {
      req.session.dataCardBike.push({
        name: req.query.name,
        urlImage: req.query.urlImage,
        price: req.query.price,
        quantity: 1,
      });
    }
  }

  res.render("shop", {
    dataCardBike: req.session.dataCardBike,
  });
});

router.get("/shop/delete-shop", function (req, res, next) {
  req.session.dataCardBike.splice(req.query.id, 1);

  res.render("shop", {
    dataCardBike: req.session.dataCardBike,
  });
});

router.post("/shop/update-shop", function (req, res, next) {
  if (!isEmpty(req.body)) {
    req.session.dataCardBike[req.body.id].quantity = req.body.quantity;
  }

  res.render("shop", {
    dataCardBike: req.session.dataCardBike,
  });
});

router.get("/shop/update-shop", function (req, res, next) {
  res.render("shop", {
    dataCardBike: req.session.dataCardBike,
  });
});

const YOUR_DOMAIN = "http://localhost:3000";
router.post("/create-checkout-session", async (req, res) => {
  const basket = req.session.dataCardBike.map((bike) => {
    return {
      price_data: {
        currency: "eur",
        product_data: {
          name: bike.name,
        },
        unit_amount: bike.price * 100,
      },
      quantity: bike.quantity,
    };
  });
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: basket,
    mode: "payment",
    success_url: `${YOUR_DOMAIN}/success`,
    cancel_url: `${YOUR_DOMAIN}/shop`,
  });

  res.redirect(303, session.url);
});

module.exports = router;
