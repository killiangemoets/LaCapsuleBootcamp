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

let cityList = [
  {
    name: "paris",
    description: "nuageux",
    urlImage: "images/picto-1.png",
    tmin: 7.22,
    tmax: 5.56,
  },
  {
    name: "lyon",
    description: "ciel dégagé",
    urlImage: "images/picto-1.png",
    tmin: 6,
    tmax: 3.89,
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  cityList = [];
  res.render("index");
});

router.get("/weather", function (req, res, next) {
  // console.log(req.query);
  if (!isEmpty(req.query)) {
    // console.log("query");
    cityList.splice(req.query.delete, 1);
  }

  res.render("weather", { cityList });
});

router.post("/weather", function (req, res, next) {
  // console.log(req.body);
  if (req.body.city !== "") {
    // console.log("body");
    const newCity =
      req.body.city.slice(0, 1).toUpperCase() +
      req.body.city.slice(1).toLowerCase();

    let cityAlreadyInTheList = false;
    cityList.forEach((city) => {
      // console.log(city);
      // console.log(req.body);
      if (city.name === newCity) cityAlreadyInTheList = true;
    });
    if (!cityAlreadyInTheList) {
      cityList.push({
        name: newCity,
        description: "ciel dégagé",
        urlImage: "images/picto-1.png",
        tmin: 6,
        tmax: 3.89,
      });
    }
  }
  res.render("weather", { cityList });
});

module.exports = router;
