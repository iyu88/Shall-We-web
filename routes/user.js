const router = require("express").Router();
const User = require("../models/User");

// Update User
router.put("/:id", async (req, res) => {
  if (req.params.id === req.body.userId) {
    try {
      const user = await new User.findByIdAndUpdate(req.body.userId, {
        $set: req.body,
      });
      res.status(200).json("Account has been updated");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You can update only your account");
  }
});

// Delete User
router.delete("/:id", async (req, res) => {
  if (req.params.id === req.body.userId) {
    try {
      const user = await User.findByIdAndDelete({ _id: req.body.userId });
      res.status(200).json("Account has been deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You can delete only your account");
  }
});

module.exports = router;
