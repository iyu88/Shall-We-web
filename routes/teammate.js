const router = require("express").Router();
const Teammate = require("../models/Teammate");

router.post("/register", async (req, res) => {
  try {
    const newTeammate = new Teammate({
      user_id: req.body.user_id,
      nickname: req.body.nickname,
      email: req.body.email,
      profile_pic: req.body.profile_pic,
      job: req.body.job,
      position: req.body.position,
      technical: req.body.technical,
      introduce: req.body.introduce,
    });
    const teammate = await newTeammate.save();
    res.status(200).json(teammate);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const allTeammate = await Teammate.find();
    res.status(200).json(allTeammate);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const teammate = await Teammate.findOne({ _id: req.params.id });
    res.status(200).json(teammate);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
