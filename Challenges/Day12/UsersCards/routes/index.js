var express = require("express");
var request = require("sync-request");
var router = express.Router();

const avatars = [
  "boss",
  "boy",
  "girl-1",
  "girl-2",
  "girl-3",
  "girl",
  "man-2",
  "man",
];

/* GET home page. */
router.get("/", function (req, res, next) {
  const result = request("GET", "https://jsonplaceholder.typicode.com/users");
  const resultObj = JSON.parse(result.body);

  res.render("index", { resultObj, avatars });
});

router.get("/messages", function (req, res, next) {
  const id = req.query.id;
  const posts = request(
    "GET",
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );

  const postsObj = JSON.parse(posts.body);

  res.render("posts", { postsObj });
});

router.get("/comments", function (req, res, next) {
  const id = req.query.id;
  const comments = request(
    "GET",
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`
  );

  const commentsObj = JSON.parse(comments.body);

  console.log(commentsObj);
  res.render("comments", { commentsObj, postId: id });
});

module.exports = router;
