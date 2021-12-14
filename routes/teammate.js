const router = require("express").Router();
const Teammate = require("../models/Teammate");
const User = require("../models/User");

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
    const teammate = await Teammate.findOne({ userId: req.params.id });
    res.status(200).json(teammate);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/my/:id", async (req, res) => {
  try {
    const teammate = await Teammate.findOne({ user_id: req.params.id });
    res.status(200).json(teammate);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const teammate = await Teammate.findById(req.params.id);
    if (teammate.user_id === req.body.user_id) {
      await teammate.updateOne({ $set: req.body });
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
    const teammate = await Teammate.findById(req.params.id);
    if (teammate.user_id === req.body.userId) {
      await teammate.deleteOne();
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
    const teammate = await Teammate.findById(req.params.id);
    const user = await User.findById(req.body.userId);
    if (!teammate.teammate_fav.includes(req.body.userId)) {
      await teammate.updateOne({ $push: { teammate_fav: req.body.userId } });
      if (!user.fav_teammate.includes(req.params.id)) {
        await user.updateOne({ $push: { fav_teammate: req.params.id } });
        res.status(200).json("즐겨찾기에 추가되었습니다.");
      }
    } else {
      await teammate.updateOne({ $pull: { teammate_fav: req.body.userId } });
      if (user.fav_teammate.includes(req.params.id)) {
        await user.updateOne({ $pull: { fav_teammate: req.params.id } });
        res.status(200).json("즐겨찾기에서 제거되었습니다.");
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id/view", async (req, res) => {
  try {
    const teammate = await Teammate.findById(req.params.id);
    if (!teammate.teammate_view.includes(req.body.userId)) {
      await teammate.updateOne({ $push: { teammate_view: req.body.userId } });
      res.status(200).json("해당 글을 조회함");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
