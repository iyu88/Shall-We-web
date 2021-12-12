const router = require("express").Router();
const Review = require("../models/Review");

router.post("/register", async (req, res) => {
  try {
    const newReview = new Review({
      user_id: req.body.user_id,
      userId: req.body.userId,
      review_type: req.body.review_type,
      review_to_whom: req.body.review_to_whom,
      review_title: req.body.review_title,
      review_content: req.body.review_content,
      impression: req.body.impression,
    });
    const review = await newReview.save();
    res.status(200).json(review);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const allReview = await Review.find();
    res.status(200).json(allReview);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const review = await Review.findOne({ _id: req.params.id });
    res.status(200).json(review);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
