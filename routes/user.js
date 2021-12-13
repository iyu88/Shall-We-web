const router = require("express").Router();
const User = require("../models/User");

router.put("/:id", async (req, res) => {
  if (req.params.id === req.body.userId) {
    try {
      const user = await new User.findByIdAndUpdate(req.body.userId, {
        $set: req.body,
      });
      res.status(200).json("계정이 업데이트 되었습니다.");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("자신의 계정만 업데이트할 수 있습니다.");
  }
});

router.delete("/:id", async (req, res) => {
  if (req.params.id === req.body.userId) {
    try {
      const user = await User.findByIdAndDelete({ _id: req.body.userId });
      res.status(200).json("계정이 삭제되었습니다.");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("자신의 계정만 삭제할 수 있습니다.");
  }
});

router.get("/:id", async (req, res) => {
  // if (req.params.id === req.body.userId) {
  try {
    const user = await User.findOne({ _id: req.params.id });
    const { password, updatedAt, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
  // } else {
  //   res.status(500).json("자신의 정보만 받을 수 있습니다.");
  // }
});

module.exports = router;
