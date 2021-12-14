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
  let category;
  if (req.query.cat === "contest") {
    category = "공모전";
  } else if (req.query.cat === "teammate") {
    category = "팀원";
  }
  console.log(category);
  try {
    let reviews;
    if (category) {
      reviews = await Review.find({
        review_type: {
          $in: [category],
        },
      });
    } else {
      reviews = await Review.find();
    }
    res.status(200).json(reviews);
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

router.put("/:id", async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (review.user_id === req.body.user_id) {
      await review.updateOne({ $set: req.body });
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
    const review = await Review.findById(req.params.id);
    if (review.user_id === req.body.userId) {
      await review.deleteOne();
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
    const review = await Review.findById(req.params.id);
    if (!review.review_fav.includes(req.body.userId)) {
      await review.updateOne({ $push: { review_fav: req.body.userId } });
      res.status(200).json("즐겨찾기에 추가되었습니다.");
    } else {
      await review.updateOne({ $pull: { review_fav: req.body.userId } });
      res.status(200).json("즐겨찾기에서 제거되었습니다.");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id/view", async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review.review_view.includes(req.body.userId)) {
      await review.updateOne({ $push: { review_view: req.body.userId } });
      res.status(200).json("해당 글을 조회함");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
