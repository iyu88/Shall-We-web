const router = require("express").Router();
const User = require("../models/User");
const Contest = require("../models/Contest");
const Teammate = require("../models/Teammate");
const Review = require("../models/Review");

router.get("/account/contest/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    const contests = await Contest.find({ user_id: user._id });
    res.status(200).json(contests);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/account/review/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    const reviews = await Review.find({ user_id: user._id });
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
