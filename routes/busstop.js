const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Busstop = require("../models/Busstop");

router.get("/busstops", (req, res) => {
  Busstop.find().then((busstops) =>
    res.json({
      success: true,
      busstops: busstops,
    })
  );
});

router.post("/initbusstops", (req, res) => {
  const bstops = req.body;
  Busstop.insertMany(bstops).then(() => {
    return res.json({
      success: true,
      message: "Initiate Busstops successfully.",
    });
  });
});

module.exports = router;
