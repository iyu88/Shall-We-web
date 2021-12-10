const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
      min: 3,
      max: 50,
      unique: true,
    },
    review_type: {
      type: String,
      required: true,
    },
    review_to_whom: {
      type: String,
      required: true,
    },
    review_content: {
      type: String,
      required: true,
      min: 40,
    },
    impression: {
      type: String,
      required: true,
      min: 20,
    },
    review_fav: {
      type: Array,
      default: [],
    },
    review_view: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", ReviewSchema);
