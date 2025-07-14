const Journal = require("../models/journal.model");

// ✍️ Create Journal Entry
module.exports.createJournal = async (req, res) => {
  try {
    const { skill, content, mood, date } = req.body;
    const journal = await Journal.create({
      user: req.user._id,
      skill,
      content,
      mood,
      date,
    });
    res.status(201).json({ message: "Journal created", journal });
  } catch (err) {
    console.error("Create Journal Error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// 📋 Get All Journals for Logged-in User
module.exports.getJournals = async (req, res) => {
  try {
    const journals = await Journal.find({ user: req.user._id })
      .populate("skill", "title category")
      .sort({ date: -1 });

    res.status(200).json(journals);
  } catch (err) {
    console.error("Get Journals Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// 🧾 Get Single Journal
module.exports.getJournalById = async (req, res) => {
  try {

    const journal = await Journal.findOne({
      _id: req.params.id,
      user: req.user._id,
    }).populate("skill", "title");

    if (!journal) return res.status(404).json({ message: "Journal not found", id: req.params.id });

    res.status(200).json(journal);
  } catch (err) {
    console.error("Get Journal Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// 📝 Update Journal
module.exports.updateJournal = async (req, res) => {
  try {
    const updated = await Journal.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!updated) return res.status(404).json({ message: "Journal not found" });

    res.status(200).json({ message: "Journal updated", journal: updated });
  } catch (err) {
    console.error("Update Journal Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// ❌ Delete Journal
module.exports.deleteJournal = async (req, res) => {
  try {
    const deleted = await Journal.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!deleted) return res.status(404).json({ message: "Journal not found" });

    res.status(200).json({ message: "Journal deleted" });
  } catch (err) {
    console.error("Delete Journal Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
