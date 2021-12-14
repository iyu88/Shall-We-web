const router = require("express").Router();
const User = require("../models/User");
const Contest = require("../models/Contest");
const Teammate = require("../models/Teammate");
const Review = require("../models/Review");

router.get("/contest/:id", async (req, res) => {
  try {
    const user = await User.findById({ _id: req.params.id });
    const myContests = await Promise.all(
      user.fav_contest.map((el) => {
        return Contest.find({ _id: el });
      })
    );
    res.status(200).json(myContests);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/teammate/:id", async (req, res) => {
  try {
    const user = await User.findById({ _id: req.params.id });
    const myTeammates = await Promise.all(
      user.fav_teammate.map((el) => {
        return Teammate.find({ _id: el });
      })
    );
    res.status(200).json(myTeammates);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
