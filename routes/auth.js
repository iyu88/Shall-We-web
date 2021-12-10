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
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// SignIn
router.post("/signIn", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.userId });
    !user && res.status(404).json("User Not Found");
    if (req.body.password !== user.password) {
      res.status(404).json("Wrong Password");
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
