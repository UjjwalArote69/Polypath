const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
      minlength: [2, "Title must be at least 2 characters"],
    },
    category: {
      type: String,
      required: true,
    },
    progress: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },
    tags: {
      type: [String],
      default: [],
    },
    xp: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Skill = mongoose.model("Skill", skillSchema);
module.exports = Skill;
