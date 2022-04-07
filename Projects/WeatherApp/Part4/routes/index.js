const { query } = require("express");
var express = require("express");
var request = require("sync-request");
var router = express.Router();

var cityModel = require("../models/cities");
var userModel = require("../models/users");

const WEATHER_API_KEY = "e5156d7b13f4107b85f36eda6cefb868";
const LANGUAGE = "en";
const UNITS = "metric";

function isEmpty(obj) {
  for (var prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false;
    }
  }

  return JSON.stringify(obj) === JSON.stringify({});
}

// let cityList = [];

let renderErrorMessage = false;

/* GET home page. */
router.get("/", function (req, res, next) {
  // cityList = [];
  res.render("index");
});

router.get("/logout", function (req, res, next) {
  req.session.currentID = null;
  req.session.currentUsername = null;
  res.redirect("/");
});

router.get("/weather/update", async function (req, res, next) {
  let cityList = await cityModel.find();

  const weatherPromises = [];
  cityList.forEach((city) => {
    const weatherInfos = request(
      "GET",
      `https://api.openweathermap.org/data/2.5/weather?q=${city.name}&lang=${LANGUAGE}&units=${UNITS}&appid=${WEATHER_API_KEY}`
    );

    const weatherInfosObj = JSON.parse(weatherInfos.body);

    weatherPromises.push(
      cityModel.updateOne(
        { name: city.name },
        {
          description: weatherInfosObj.weather[0].description,
          urlImage: `https://openweathermap.org/img/wn/${weatherInfosObj.weather[0].icon}@2x.png`,
          tmin: weatherInfosObj.main.temp_min,
          tmax: weatherInfosObj.main.temp_max,
        }
      )
    );
  });

  await Promise.all(weatherPromises);

  cityList = await cityModel.find();

  res.render("weather", { cityList, renderErrorMessage });
});

router.get("/weather", async function (req, res, next) {
  if (!req.session.currentID) {
    return res.redirect("/");
  }

  renderErrorMessage = false;

  if (!isEmpty(req.query)) {
    // cityList.splice(req.query.delete, 1);
    await cityModel.deleteOne({ _id: req.query.delete });
  }

  let cityList = await cityModel.find();
  // console.log(cityList);
  res.render("weather", { cityList, renderErrorMessage });
});

router.post("/weather", async function (req, res, next) {
  renderErrorMessage = false;
  if (req.body.city !== "") {
    const newCity =
      req.body.city.slice(0, 1).toUpperCase() +
      req.body.city.slice(1).toLowerCase();

    let cityAlreadyInTheList = false;
    let cityList = await cityModel.find();
    console.log(cityList);
    cityList.forEach((city) => {
      if (city.name === newCity) cityAlreadyInTheList = true;
    });
    if (!cityAlreadyInTheList) {
      const weatherInfos = request(
        "GET",
        `https://api.openweathermap.org/data/2.5/weather?q=${newCity}&lang=${LANGUAGE}&units=${UNITS}&appid=${WEATHER_API_KEY}`
      );

      const weatherInfosObj = JSON.parse(weatherInfos.body);
      // console.log(weatherInfosObj);
      // console.log(weatherInfosObj.cod);

      if (weatherInfosObj.cod == 404) {
        renderErrorMessage = true;
      } else {
        // console.log("hello");
        var city = new cityModel({
          name: newCity,
          description: weatherInfosObj.weather[0].description,
          urlImage: `https://openweathermap.org/img/wn/${weatherInfosObj.weather[0].icon}@2x.png`,
          tmin: weatherInfosObj.main.temp_min,
          tmax: weatherInfosObj.main.temp_max,
        });

        await city.save();
      }
    }
  }

  cityList = await cityModel.find();
  res.render("weather", { cityList, renderErrorMessage });
});

router.post("/sign-up", async function (req, res, next) {
  var user = await userModel.findOne({ email: req.body.email });

  if (user) {
    res.render("index");
  } else {
    var user = new userModel({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.currentID = await user.save();
    req.session.currentUsername = req.body.username;

    res.redirect("/weather");
  }
});

router.post("/sign-in", async function (req, res, next) {
  var user = await userModel.findOne({ email: req.body.email });
  if (user?.password == req.body.password) {
    req.session.currentID = user._id;
    req.session.currentUsername = user.username;

    res.redirect("/weather");
  } else {
    res.render("index");
  }
});

module.exports = router;
