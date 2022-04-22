var express = require("express");
var router = express.Router();
var request = require("sync-request");
const movieController = require("./../controllers/movieController");

// API CONFIG
const TMDB_KEY = "cc713d5ef08c615055e9a909b650b7d2";
const POSTER_PATH_START = "https://image.tmdb.org/t/p//w500";

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/new-movies", async function (req, res, next) {
  try {
    const response = await request(
      "GET",
      `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_KEY}&language=en-US&page=1`
    );
    const popularMovies = JSON.parse(response.body);

    const moviesList = popularMovies.results.map((movie) => {
      return {
        name: movie.title,
        desc: movie.overview,
        img: movie.backdrop_path
          ? POSTER_PATH_START + movie.backdrop_path
          : "/images/generique.jpg",
        note: movie.vote_average,
        vote: movie.vote_count,
      };
    });

    res.status(200).json(moviesList);
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
});

router
  .route("/wishlist-movies")
  .get(movieController.getAllMovies)
  .post(movieController.addMovie);

router.route("/wishlist-movies/:name").delete(movieController.deleteMovie);

module.exports = router;
