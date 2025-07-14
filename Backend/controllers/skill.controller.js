const Skill = require("../models/skill.model");

// 📥 Create new skill
module.exports.createSkill = async (req, res) => {
  try {
    const { title, category, tags, progress } = req.body;
    const newSkill = await Skill.create({
      user: req.user._id,
      title,
      category,
      tags,
      progress,
    });
    res.status(201).json({ message: "Skill created", skill: newSkill });
  } catch (error) {
    console.error("Create Skill Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// 📤 Get all skills for a user
module.exports.getSkills = async (req, res) => {
  try {
    const skills = await Skill.find({ user: req.user._id }).sort("-createdAt");
    res.status(200).json(skills);
  } catch (error) {
    console.error("Get Skills Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// 📝 Update skill
module.exports.updateSkill = async (req, res) => {
  try {
    const skill = await Skill.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!skill) return res.status(404).json({ message: "Skill not found" });

    res.status(200).json({ message: "Skill updated", skill });
  } catch (error) {
    console.error("Update Skill Error:", error); // 👈 show error in terminal
    res.status(500).json({ message: "Server error", error: error.message }); // 👈 send exact message
  }
};

// ❌ Delete skill
module.exports.deleteSkill = async (req, res) => {
  try {
    const deleted = await Skill.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!deleted) return res.status(404).json({ message: "Skill not found" });

    res.status(200).json({ message: "Skill deleted" });
  } catch (error) {
    console.error("Delete Skill Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
