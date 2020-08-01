const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Donation = require("../models/Donation");

router.get("/donations", (req, res) => {
  Donation.find().then((donations) =>
    res.json({
      success: true,
      donations: donations,
    })
  );
});

router.post("/donations", (req, res) => {
  const dona = req.body;
  Donation.insertMany(dona).then(() => {
    return res.json({
      success: true,
      message: "Donated successfully.",
    });
  });
});

router.post("/initdonations", (req, res) => {
  const donas = req.body;
  Donation.insertMany(donas).then(() => {
    return res.json({
      success: true,
      message: "Initiate donations successfully.",
    });
  });
});

module.exports = router;
