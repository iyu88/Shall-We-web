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

router.put("/:id", async (req, res) => {
  try {
    const contest = await Contest.findById(req.params.id);
    if (conteste.user_id === req.body.userId) {
      await contest.updateOne({ $set: req.body });
      res.status(200).json("성공적으로 수정했습니다.");
    } else {
      res.status(403).json("자신이 작성한 글만 수정할 수 있습니다.");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const contest = await Contest.findById(req.params.id);
    if (contest.user_id === req.body.userId) {
      await contest.deleteOne();
      res.status(200).json("성공적으로 삭제했습니다.");
    } else {
      res.status(403).json("자신이 작성한 글만 삭제할 수 있습니다.");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id/fav", async (req, res) => {
  try {
    const contest = await Contest.findById(req.params.id);
    if (!contest.contest_fav.includes(req.body.userId)) {
      await contest.updateOne({ $push: { contest_fav: req.body.userId } });
      res.status(200).json("즐겨찾기에 추가되었습니다.");
    } else {
      await contest.updateOne({ $pull: { contest_fav: req.body.userId } });
      res.status(200).json("즐겨찾기에서 제거되었습니다.");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id/view", async (req, res) => {
  try {
    const contest = await Contest.findById(req.params.id);
    if (!contest.contest_view.includes(req.body.userId)) {
      await contest.updateOne({ $push: { contest_view: req.body.userId } });
      res.status(200).json("해당 글을 조회함");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
