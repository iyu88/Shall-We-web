const router = require("express").Router();
const User = require("../models/User");

// SignUp
router.post("/signUp", async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      userId: req.body.userId,
      password: req.body.password,
    });
    const user = await newUser.save();
    res.status(200).json("회원가입에 성공했습니다.");
  } catch (err) {
    res.status(500).json(err);
  }
});

// SignIn
router.post("/signIn", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.userId });
    !user && res.status(404).json("아이디를 확인해주세요.");
    if (req.body.password !== user.password) {
      res.status(404).json("비밀번호를 확인해주세요.");
    } else {
      res.status(200).json(user);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
