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
    name: "LIK089",
    urlImage: "images/bike-3.jpg",
    price: 839,
  },
  {
    name: "NASAY",
    urlImage: "images/bike-6.jpg",
    price: 1399,
  },
];

const getCheaperBikes = function () {
  cheaperBikes = dataBike.map((bike, id) => {
    return { price: bike.price, id };
  });

  cheaperBikes.sort(function (a, b) {
    return a.price - b.price;
  });

  return cheaperBikes.map((bike) => bike.id).slice(0, 3);
};

const calculateCosts = function (card) {
  const totalBasket = card.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );
  const normalShippingCost = card.reduce(
    (sum, item) => sum + item.quantity * 30,
    0
  );

  const relayPointShippingCost = card.reduce(
    (sum, item) => sum + item.quantity * 10,
    10
  );

  let shippingCost = normalShippingCost;
  if (totalBasket > 4000) {
    shippingCost = 0;
  } else if (totalBasket > 2000) {
    shippingCost = normalShippingCost * 0.5;
  }

  let expressShippingCosts = shippingCost + 100;

  return {
    totalBasket,
    normalShippingCost,
    shippingCost,
    expressShippingCosts,
    relayPointShippingCost,
    sayHello(hey) {
      console.log(hey);
    },
  };
};

/* GET home page. */
router.get("/", function (req, res, next) {
  cheaperBikes = getCheaperBikes();
  console.log(cheaperBikes.find((el) => el === 1));
  console.log(cheaperBikes);
  res.render("index", { dataBike, cheaperBikes });
});
router.get("/success", function (req, res, next) {
  req.session.dataCardBike = [];
  res.render("success", { dataBike, cheaperBikes });
});
router.get("/cancel", function (req, res, next) {
  res.render("cancel", { dataBike, cheaperBikes });
});
router.get("/shop", function (req, res, next) {
  if (!req.session.dataCardBike) req.session.dataCardBike = [];

  console.log(req.query);
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
    req.session.costs = calculateCosts(req.session.dataCardBike);
  }

  res.render("shop", {
    dataCardBike: req.session.dataCardBike,
    costs: req.session.costs,
  });
});

router.get("/shop/delete-shop", function (req, res, next) {
  req.session.dataCardBike.splice(req.query.id, 1);
  req.session.costs = calculateCosts(req.session.dataCardBike);

  res.render("shop", {
    dataCardBike: req.session.dataCardBike,
    costs: req.session.costs,
  });
});

router.post("/shop/update-shop", function (req, res, next) {
  if (req.body.quantity !== "") {
    req.session.dataCardBike[req.body.id].quantity = req.body.quantity;
    req.session.costs = calculateCosts(req.session.dataCardBike);
  }

  res.render("shop", {
    dataCardBike: req.session.dataCardBike,
    costs: req.session.costs,
  });
});

router.get("/shop/update-shop", function (req, res, next) {
  res.render("shop", {
    dataCardBike: req.session.dataCardBike,
    costs: req.session.costs,
  });
});

router.post("/shop/update-delivery", function (req, res, next) {
  console.log(req.body);

  res.render("shop", {
    dataCardBike: req.session.dataCardBike,
    costs: req.session.costs,
  });
});

router.get("/shop/update-shop", function (req, res, next) {
  res.render("shop", {
    dataCardBike: req.session.dataCardBike,
    costs: req.session.costs,
  });
});

const YOUR_DOMAIN = "http://localhost:3000";
router.post("/create-checkout-session", async (req, res) => {
  console.log(req.body);
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

  basket.push({
    price_data: {
      currency: "eur",
      product_data: {
        name: "Shipping Cost",
      },
      unit_amount: req.body.finalShippingCost * 100,
    },
    quantity: 1,
  });
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: basket,
    mode: "payment",
    success_url: `${YOUR_DOMAIN}/success`,
    cancel_url: `${YOUR_DOMAIN}/cancel`,
  });

  res.redirect(303, session.url);
});

module.exports = router;
