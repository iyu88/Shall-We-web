const router = require("express").Router();
const Contest = require("../models/Contest");

router.post("/register", async (req, res) => {
  try {
    const newContest = new Contest({
      user_id: req.body.user_id,
      userId: req.body.userId,
      article_title: req.body.article_title,
      contest_title: req.body.contest_title,
      contest_picture: req.body.contest_picture,
      due_date: req.body.due_date,
      num_of_people: req.body.num_of_people,
      contest_content: req.body.contest_content,
      requirements: req.body.requirements,
    });
    const contest = await newContest.save();
    res.status(200).json(contest);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const allContest = await Contest.find();
    res.status(200).json(allContest);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const contest = await Contest.findOne({ _id: req.params.id });
    res.status(200).json(contest);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
