const mongoose = require("mongoose");

const TeammateSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
      min: 3,
      max: 50,
      unique: true,
    },
    nickname: {
      type: String,
      required: true,
      min: 3,
      max: 10,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    profile_pic: {
      type: String,
      default: "",
    },
    job: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    technical: {
      type: String,
      required: true,
    },
    introduce: {
      type: String,
      min: 20,
      required: true,
    },
    teammate_fav: {
      type: Array,
      default: [],
    },
    teammate_view: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Teammate", TeammateSchema);
