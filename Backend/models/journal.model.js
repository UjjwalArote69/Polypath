const mongoose = require("mongoose");

const journalSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    skill: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Skill",
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    content: {
      type: String,
      required: [true, "Journal content is required"],
    },
    mood: {
      type: String,
      enum: ["happy", "neutral", "sad"],
      default: "neutral",
    },
  },
  { timestamps: true }
);

const Journal = mongoose.model("Journal", journalSchema);
module.exports = Journal;
