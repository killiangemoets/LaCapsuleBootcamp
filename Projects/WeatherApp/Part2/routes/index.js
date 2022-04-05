var express = require("express");
var request = require("sync-request");
var router = express.Router();

const WEATHER_API_KEY = "e5156d7b13f4107b85f36eda6cefb868";
const LANGUAGE = "en";
const UNITS = "metric";

// https://api.openweathermap.org/data/2.5/weather?q=Paris&lang=en&units=metric&appid=e5156d7b13f4107b85f36eda6cefb868

function isEmpty(obj) {
  for (var prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false;
    }
  }

  return JSON.stringify(obj) === JSON.stringify({});
}

let cityList = [];

let renderErrorMessage = false;

/* GET home page. */
router.get("/", function (req, res, next) {
  cityList = [];
  res.render("index");
});

router.get("/weather", function (req, res, next) {
  renderErrorMessage = false;

  if (!isEmpty(req.query)) {
    cityList.splice(req.query.delete, 1);
  }

  res.render("weather", { cityList, renderErrorMessage });
});

router.post("/weather", function (req, res, next) {
  renderErrorMessage = false;
  if (req.body.city !== "") {
    const newCity =
      req.body.city.slice(0, 1).toUpperCase() +
      req.body.city.slice(1).toLowerCase();

    let cityAlreadyInTheList = false;
    cityList.forEach((city) => {
      if (city.name === newCity) cityAlreadyInTheList = true;
    });
    if (!cityAlreadyInTheList) {
      const weatherInfos = request(
        "GET",
        `https://api.openweathermap.org/data/2.5/weather?q=${newCity}&lang=${LANGUAGE}&units=${UNITS}&appid=${WEATHER_API_KEY}`
      );

      const weatherInfosObj = JSON.parse(weatherInfos.body);
      console.log(weatherInfosObj);
      console.log(weatherInfosObj.cod);

      if (weatherInfosObj.cod == 404) {
        renderErrorMessage = true;
      } else {
        console.log("hello");
        cityList.push({
          name: newCity,
          description: weatherInfosObj.weather[0].description,
          urlImage: `https://openweathermap.org/img/wn/${weatherInfosObj.weather[0].icon}@2x.png`,

          tmin: weatherInfosObj.main.temp_min,
          tmax: weatherInfosObj.main.temp_max,
        });
      }
    }
  }
  res.render("weather", { cityList, renderErrorMessage });
});

module.exports = router;
