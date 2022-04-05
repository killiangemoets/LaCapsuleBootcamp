var express = require("express");
var request = require("sync-request");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  var res = request("GET", "https://example.com", {
    headers: {
      "user-agent": "example-user-agent",
    },
  });
  res.render("index");
});

module.exports = router;
