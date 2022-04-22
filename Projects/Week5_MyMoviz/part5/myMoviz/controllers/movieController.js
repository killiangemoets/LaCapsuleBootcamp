var movieModel = require("../models/movies");

exports.addMovie = async function (req, res, next) {
  try {
    const newMovie = await movieModel.create(req.body);

    res.status(201).json({
      status: "success",
      date: {
        movie: newMovie,
      },
    });
  } catch (err) {
    // Exemple of error: trying to create a document without one of the require fields bc it will reject the promise.
    res.status(400).json({
      status: "fail",
      message: "Invalid data sent:" + err,
    });
  }
};

exports.deleteMovie = async function (req, res, next) {
  try {
    await movieModel.findOneAndDelete({ name: req.params.name });
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getAllMovies = async function (req, res, next) {
  try {
    movies = await movieModel.find();

    // SEND RESPONSE
    res.status(200).json({
      status: "success",
      results: movies.length,
      data: {
        movies,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
