var express = require("express");
const noteModel = require("../models/note");
var uid2 = require("uid2");

var router = express.Router();

/* GET home page. */
router.get("/notes", async function (req, res, next) {
  try {
    const notes = await noteModel.find();

    res.status(200).json({
      status: "success",
      results: notes.length,
      data: {
        notes,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
});

router.post("/add-note", async function (req, res, next) {
  try {
    const newNote = await noteModel.create({
      text: req.body.text,
      token: uid2(6),
    });

    res.status(201).json({
      status: "success",
      data: {
        note: newNote,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
});

router.post("/delete-note", async function (req, res, next) {
  try {
    console.log("heyyyy");
    console.log(req.body.token);
    const note = await noteModel.findOneAndDelete({ token: req.body.token });

    if (!note) throw new Error("No note found with this token");

    console.log(note);

    res.status(201).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
});

router.post("/update-note", async function (req, res, next) {
  try {
    const note = await noteModel.findOne({ token: req.body.token });

    if (!note) throw new Error("No note found with this token");

    const updateNote = await noteModel.findOneAndUpdate(
      { token: req.body.token },
      { done: !note.done, doneDate: !note.done ? Date.now() : null },
      { new: true }
    );

    res.status(200).json({
      status: "success",
      data: { note: updateNote },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
});

module.exports = router;
