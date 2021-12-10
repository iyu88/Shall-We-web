const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 3,
      max: 10,
    },
    userId: {
      type: String,
      required: true,
      min: 6,
      max: 10,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 20,
    },
    fav_contest: {
      type: Array,
      default: [],
    },
    my_contest: {
      type: Array,
      default: [],
    },
    fav_teammate: {
      type: Array,
      default: [],
    },
    profiles: {
      type: Array,
      default: [],
    },
    fav_review: {
      type: Array,
      default: [],
    },
    my_review: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
