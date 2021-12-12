const mongoose = require("mongoose");

const ContestSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
      min: 3,
      max: 50,
    },
    userId: {
      type: String,
      required: true,
      min: 6,
      max: 10,
    },
    article_title: {
      type: String,
      required: true,
      min: 3,
      max: 10,
    },
    contest_title: {
      type: String,
      required: true,
      min: 6,
      max: 30,
    },
    contest_picture: {
      type: String,
      default: "",
    },
    due_date: {
      type: String,
      required: true,
    },
    num_of_people: {
      type: Number,
      required: true,
      min: 2,
    },
    contest_content: {
      type: String,
      min: 40,
      required: true,
    },
    requirements: {
      type: String,
      min: 20,
      required: true,
    },
    contest_fav: {
      type: Array,
      default: [],
    },
    contest_view: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contest", ContestSchema);
