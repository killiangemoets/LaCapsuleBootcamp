var express = require("express");
var router = express.Router();

var articleModel = require("../models/articles");
var orderModel = require("../models/orders");
var userModel = require("../models/users");

/* GET home page. */
router.get("/", async function (req, res, next) {
  const soldOutArticles = await articleModel.find({ stock: 0 });

  const admin = await userModel.findOne({
    status: "admin",
  });
  const numUnreadMessages = admin.messages.filter(
    (message) => message.read == false
  ).length;
  const numTasksToDo = admin.tasks.filter(
    (task) => task.dateCloture == null
  ).length;

  res.render("index", {
    numSoldOutArticles: soldOutArticles.length,
    numUnreadMessages,
    numTasksToDo,
  });
});

/* GET tasks page. */
router.get("/tasks-page", async function (req, res, next) {
  const admin = await userModel.findOne({ status: "admin" });
  res.render("tasks", { tasks: admin.tasks });
});

/* GET Messages page. */
router.get("/messages-page", async function (req, res, next) {
  const admin = await userModel.findOne({ status: "admin" });
  res.render("messages", { messages: admin.messages });
});

/* GET Users page. */
router.get("/users-page", async function (req, res, next) {
  const users = await userModel.find({ status: "customer" });
  res.render("users", { users });
});

/* GET Catalog page. */
router.get("/catalog-page", async function (req, res, next) {
  const articles = await articleModel.find();
  // console.log(articles);
  res.render("catalog", { articles });
});

/* GET Orders-list page. */
router.get("/orders-list-page", async function (req, res, next) {
  const orders = await orderModel.find();

  res.render("orders-list", { orders });
});

/* GET Order detail page. */
router.get("/order-page", async function (req, res, next) {
  const order = await orderModel
    .findById(req.query.id)
    .populate("articles")
    .exec();
  console.log(order);
  res.render("order", { order });
});

/* GET chart page. */
router.get("/charts", async function (req, res, next) {
  const numMen = await userModel
    .find({
      status: "customer",
      gender: "male",
    })
    .countDocuments();
  const numWomen = await userModel
    .find({
      status: "customer",
      gender: "female",
    })
    .countDocuments();

  const admin = await userModel.findOne({
    status: "admin",
  });
  const numUnreadMessages = admin.messages.filter(
    (message) => message.read == false
  ).length;
  const numReadMessages = admin.messages.filter(
    (message) => message.read == true
  ).length;

  const numOrdersShipped = await orderModel
    .find({
      status_shipment: true,
      status_payment: "validated",
    })
    .countDocuments();
  const numOrdersNotShipped = await orderModel
    .find({
      status_shipment: false,
      status_payment: "validated",
    })
    .countDocuments();

  const aggregate = orderModel.aggregate();
  aggregate.group({
    _id: { $month: "$date_insert" },
    turnover: { $sum: "$total" },
  });
  console.log(aggregate);
  const turnoverByMonth = await aggregate.exec();

  let turnoverByMonthStr = JSON.stringify(turnoverByMonth);

  res.render("charts", {
    numMen,
    numWomen,
    numUnreadMessages,
    numReadMessages,
    numOrdersShipped,
    numOrdersNotShipped,
    turnoverByMonthStr,
  });
});

module.exports = router;
